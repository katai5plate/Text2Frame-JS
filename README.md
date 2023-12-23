# Text2Frame-JS

[Text2Frame-MV](https://github.com/yktsr/Text2Frame-MV) のテキストを JS で書きたい人向けモジュール

## なぜ？

本家 Text2Frame-MV には以下のデメリットがある

- VSCode でテキストを編集する際、言語固有の構文ハイライトが適用されないため、見通しが悪い。
- 入力補完機能が利用できず、自前でスニペットを用意するとかしなければならない。
- こうした欠点のせいで、コーディングの生産性とエラーの発見が困難になり、メンテが面倒になる可能性がある。

このモジュールでは、テキストを書く代わりに、TypeScript 型定義が設定された JS で書くため、視認性と保守性が向上しメンテが楽になる。  
また、`JS -> テキスト -> JSON` という変換フローが独立した関数で行われるため、関連ツールを作るのも簡単になる。

## 使い方 (ツクール MZ)

### 必要なファイルを配置する

#### Windows (powershell) の場合

```bash
New-Item -ItemType Directory -Path ./js/text2frame -Force
Invoke-WebRequest -Uri https://raw.githubusercontent.com/katai5plate/Text2Frame-JS/main/dist/Text2Frame-JS.d.ts -Headers @{"Cache-Control"="no-cache"} | Select-Object -ExpandProperty Content | Out-File -FilePath ./js/text2frame/Text2Frame-JS.d.ts -Force
Invoke-WebRequest -Uri https://raw.githubusercontent.com/katai5plate/Text2Frame-JS/main/dist/Text2Frame-JS.umd.js -Headers @{"Cache-Control"="no-cache"} | Select-Object -ExpandProperty Content | Out-File -FilePath ./js/libs/Text2Frame-JS.umd.js -Force
Invoke-WebRequest -Uri https://raw.githubusercontent.com/katai5plate/Text2Frame-JS/main/rpgmaker/H2A_Text2FrameJSLoader.js -Headers @{"Cache-Control"="no-cache"} | Select-Object -ExpandProperty Content | Out-File -FilePath ./js/plugins/H2A_Text2FrameJSLoader.js -Force
```

#### Mac (curl) の場合

```bash
curl -H "Cache-Control: no-cache" https://raw.githubusercontent.com/katai5plate/Text2Frame-JS/main/dist/Text2Frame-JS.d.ts --create-dirs -o ./js/text2frame/Text2Frame-JS.d.ts
curl -H "Cache-Control: no-cache" https://raw.githubusercontent.com/katai5plate/Text2Frame-JS/main/dist/Text2Frame-JS.umd.js --create-dirs -o ./js/libs/Text2Frame-JS.umd.js
curl -H "Cache-Control: no-cache" https://raw.githubusercontent.com/katai5plate/Text2Frame-JS/main/rpgmaker/H2A_Text2FrameJSLoader.js --create-dirs -o ./js/plugins/H2A_Text2FrameJSLoader.js
```

#### 手動でやる場合

1. `js/libs` に [これ](https://raw.githubusercontent.com/katai5plate/Text2Frame-JS/main/dist/Text2Frame-JS.umd.js) を入れる
2. `js/text2frame` を作成し、中に [これ](https://raw.githubusercontent.com/katai5plate/Text2Frame-JS/main/dist/Text2Frame-JS.d.ts) を入れる
3. `js/plugins` に [これ](https://raw.githubusercontent.com/katai5plate/Text2Frame-JS/main/rpgmaker/H2A_Text2FrameJSLoader.js) を入れる

### イベントコマンドの書き方

JS ファイルは `js/text2frame` に作成する。

```js
//@ts-check
/** @type {import("./Text2Frame-JS")} */
const { cmd, ev } = globalThis.Text2FrameJS;

export default ev(
  cmd.message.Window({ name: "アレックス" }),
  "暇だなー",
  cmd.message.Window({ name: "ブライアン" }),
  "そうだな"
);
```

- 最初の 3 行を入れることで、VSCode 補完が行われる。
- `export default ev(...)` で出力する。

### ツクール側の設定

1. プラグイン `H2A_Text2FrameJSLoader` をプラグインマネージャで有効化する
2. プラグインコマンドからプラグインを指定し「実行」を選ぶ
3. 「実行するファイル名」に `js/text2frame/` 以降のファイルパス（拡張子を省く）を入れる (例: `shop/armor-store`)
4. 必要に応じて「事前にプリロードする素材」を入力する (実行前に指定された素材がロードされるまでウェイトする)

## 使い方 (Node.js)

```
npm i katai5plate/Text2Frame-JS
```

### example.js

```js
const { ev, cmd, convert } = require("Text2Frame-JS");

const text = ev(
  cmd.message.Window({ name: "アレックス" }),
  "暇だなー",
  cmd.message.Window({ name: "ブライアン" }),
  "そうだな",
  cmd.flow.Check(
    "$gameSwitches.value(10)",
    ev(cmd.message.Window({ name: "ぬくりあ" }), "めでてえｗｗｗｗｗｗｗ")
  ),
  cmd.etc.Script((globalThis) => {
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
    const { ev, cmd, convert } = Text2FrameJS;

    const text = ev(
      cmd.message.Window({
        name: "アレックス",
      }),
      "暇だなー",
      cmd.message.Window({
        name: "ブライアン",
      }),
      "そうだな",
      cmd.flow.Check(
        "$gameSwitches.value(10)",
        ev(
          cmd.message.Window({
            name: "ぬくりあ",
          }),
          "めでてえｗｗｗｗｗｗｗ"
        )
      ),
      cmd.etc.Script((globalThis) => {
        console.log(globalThis.$gamePlayer._x, globalThis.$gamePlayer._y);
      })
    );
    console.log(text);

    const list = convert(text);
    console.log(list);
  </script>
</body>
```

## 使用上の注意

- まだテストが十分に行われていません。バグを見つけたら issues にて報告をお願いします。

## ライセンス

MIT

