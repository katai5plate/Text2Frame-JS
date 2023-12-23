# Text2Frame-JS

[Text2Frmae-MV](https://github.com/yktsr/Text2Frame-MV) のテキストを JS で書きたい人向けモジュール

## なぜ？

本家 Text2Frmae-MV には以下のデメリットがある

- VSCode でテキストを編集する際、言語固有の構文ハイライトが適用されないため、見通しが悪い。
- 入力補完機能が利用できず、自前でスニペットを用意するとかしなければならない。
- こうした欠点のせいで、コーディングの生産性とエラーの発見が困難になり、メンテが面倒になる可能性がある。

このモジュールでは、テキストを書く代わりに、TypeScript 型定義が設定された JS で書くため、視認性と保守性が向上しメンテが楽になる。  
また、`JS -> テキスト -> JSON` という変換フローが独立した関数で行われるため、関連ツールを作るのも簡単になる。

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
