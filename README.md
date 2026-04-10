# React Learning

React公式ドキュメント(https://ja.react.dev/learn) の学習リポジトリ

## ディレクトリ構成

```
├── package.json           # 共通の依存関係（ルートで一元管理）
├── public/index.html      # 共通HTML
├── src/
│   ├── index.js           # 共通エントリーポイント
│   ├── styles.css         # 共通スタイル
│   ├── App.js             # チャプター切り替え用（import先を変更）
│   └── learn/             # 公式ドキュメント「LEARN REACT」の学習
│       ├── 01-describing-ui/
│       ├── 02-adding-interactivity/
│       ├── 03-managing-state/
│       └── 04-escape-hatches/
│
├── tutorial/              # チュートリアル
│   └── tic-tac-toe/       # 三目並べチュートリアル
│
└── sandbox/               # 自由に試すコード置き場
    └── experiments/
```

## 開発サーバーの起動・停止

依存関係はプロジェクトルートで一元管理しています。

| ポート | URL |
|---|---|
| 3001 | http://localhost:3001 |

### 起動

```bash
npm install   # 初回のみ
npm start
```

### 停止

ターミナルで `Ctrl + C`

### チャプターの切り替え

`src/App.js` のimport先を変更するだけで、表示するチャプターを切り替えられます。

```js
// 例: 01 → 02 に切り替える場合
export { default } from "./learn/02-adding-interactivity/App";
```

各チャプターのディレクトリには `App.js`（コンポーネントファイル）だけ置けばOKです。

> **注意**: ポート3000は既存プロジェクトが使用中のため、learn配下は3001以降を使用する。

## Progress

### Tutorial
- [x] 三目並べ (tic-tac-toe)

### Learn React
- [ ] 01 UIの記述
- [ ] 02 インタラクティビティの追加
- [ ] 03 stateの管理
- [ ] 04 避難ハッチ
