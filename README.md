# React Learning

React公式ドキュメント(https://ja.react.dev/learn) の学習リポジトリ

## ディレクトリ構成

```
├── tutorial/          # チュートリアル
│   └── tic-tac-toe/   # 三目並べチュートリアル
│
├── learn/             # 公式ドキュメント「LEARN REACT」の学習
│   ├── 01-describing-ui/
│   ├── 02-adding-interactivity/
│   ├── 03-managing-state/
│   └── 04-escape-hatches/
│
└── sandbox/           # 自由に試すコード置き場
    └── experiments/
```

## 開発サーバーの起動・停止

各ディレクトリに `package.json` があり、個別に起動できます。

| ディレクトリ | ポート | URL |
|---|---|---|
| `learn/01-describing-ui` | 3001 | http://localhost:3001 |

### 起動

```bash
cd learn/01-describing-ui
npm install   # 初回のみ
npm start
```

### 停止

ターミナルで `Ctrl + C`

> **注意**: ポート3000はUKABU_01が使用中のため、learn配下は3001以降を使用する。

## Progress

### Tutorial
- [x] 三目並べ (tic-tac-toe)

### Learn React
- [ ] 01 UIの記述
- [ ] 02 インタラクティビティの追加
- [ ] 03 stateの管理
- [ ] 04 避難ハッチ
