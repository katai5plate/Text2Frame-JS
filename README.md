# Text2Frame-JS

入力補完付きの JS でイベントコマンドを書きたい！

## 使い方

```
npm i yktsr/Text2Frame-MV#117-forlib katai5plate/Text2Frame-JS
npm i -D @babel/core @babel/node @babel/preset-env
```

### .babelrc

```json
{
  "presets": ["@babel/preset-env"]
}
```

### example.js

```js
//@ts-check
/** @type {import("Text2Frame-MV/Text2Frame.mjs")} */
//@ts-ignore
const TF = require("Text2Frame-MV");
import { parse as ev, events } from "../dist";

const text = ev(
  events.message.Window({ name: "アレックス" }),
  "暇だなー",
  events.message.Window({ name: "ブライアン" }),
  "そうだな",
  events.flow.Check(
    "$gameSwitches.value(10)",
    ev(events.message.Window({ name: "ぬくりあ" }), "めでてえｗｗｗｗｗｗｗ")
  )
);

console.log(text);
// <Name: アレックス>
// 暇だなー
// <Name: ブライアン>
// そうだな
// <If: Script, $gameSwitches.value(10)>
// <Name: ぬくりあ>
// めでてえｗｗｗｗｗｗｗ
// <End>

const list = TF.convert(text);
console.log(list);
// [
//   { code: 101, indent: 0, parameters: [ '', 0, 0, 2, 'アレックス' ] },
//   { code: 401, indent: 0, parameters: [ '暇だなー' ] },
//   { code: 101, indent: 0, parameters: [ '', 0, 0, 2, 'ブライアン' ] },
//   { code: 401, indent: 0, parameters: [ 'そうだな' ] },
//   {
//     code: 111,
//     indent: 0,
//     parameters: [ 12, '$gameSwitches.value(10)' ]
//   },
//   { code: 101, indent: 1, parameters: [ '', 0, 0, 2, 'ぬくりあ' ] },
//   { code: 401, indent: 1, parameters: [ 'めでてえｗｗｗｗｗｗｗ' ] },
//   { code: 0, indent: 1, parameters: [] },
//   { code: 412, indent: 0, parameters: [] }
// ]
```

### 実行

```
npx babel-node example.js
```
