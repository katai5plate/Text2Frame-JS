# Text2Frame-JS

入力補完付きの JS でイベントコマンドを書きたい！

## 使い方

```
npm i yktsr/Text2Frame-MV#117-forlib katai5plate/Text2Frame-JS
```

### example.js

```js
/** @type {import("Text2Frame-MV/Text2Frame.mjs")} */
const TF = require("Text2Frame-MV");
const { parse: ev, events } = require("Text2Frame-JS");

const text = ev(
  events.message.Window({ name: "アレックス" }),
  "暇だなー",
  events.message.Window({ name: "ブライアン" }),
  "そうだな",
  events.flow.Check(
    "$gameSwitches.value(10)",
    ev(events.message.Window({ name: "ぬくりあ" }), "めでてえｗｗｗｗｗｗｗ")
  ),
  events.interpreter.Script((globalThis) => {
    console.log(globalThis.$gamePlayer._x, globalThis.$gamePlayer._y);
  })
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
// <Script>
// console.log(globalThis.$gamePlayer._x, globalThis.$gamePlayer._y);
// </Script>

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
//   { code: 412, indent: 0, parameters: [] },
//   {
//     code: 355,
//     indent: 0,
//     parameters: [
//       'console.log(globalThis.$gamePlayer._x, globalThis.$gamePlayer._y);'
//     ]
//   }
// ]
```

### 実行

```
node example.js
```
