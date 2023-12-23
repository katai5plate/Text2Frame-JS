# Text2Frame-JS

入力補完付きの JS でイベントコマンドを書きたい！

## 使い方 (Node.js)

```
npm i katai5plate/Text2Frame-JS
```

### example.js

```js
const { parse: ev, events, convert } = require("Text2Frame-JS");

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

const list = convert(text);
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

## 使い方 (ブラウザ)

### index.html

```html
<body>
  <script src="./node_modules/Text2Frame-JS/dist/Text2Frame-JS.umd.js"></script>
  <script>
    const { parse: ev, events, convert } = Text2FrameJS;

    const text = ev(
      events.message.Window({
        name: "アレックス",
      }),
      "暇だなー",
      events.message.Window({
        name: "ブライアン",
      }),
      "そうだな",
      events.flow.Check(
        "$gameSwitches.value(10)",
        ev(
          events.message.Window({
            name: "ぬくりあ",
          }),
          "めでてえｗｗｗｗｗｗｗ"
        )
      ),
      events.interpreter.Script((globalThis) => {
        console.log(globalThis.$gamePlayer._x, globalThis.$gamePlayer._y);
      })
    );

    console.log(text);
    const list = convert(text);
    console.log(list);
  </script>
</body>
```
