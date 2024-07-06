# フルスタック環境構築

## 課題

- Next.js と Nest.js の node_modules を統合したいな

## Dokcer

### コンテナ立ち上げ

```
docker-compose up -d
```

### コンテナ落とす

```
docker-compose stop
```

### コンテナ入る

```
docker-compose exec {$container_name} /bin/sh
```

### コンテナ抜ける

```
exit
```

### コンテナビルド

```
docker-compose build
```
※ Dockerfileのイメージが変更された場合に再ビルド

## フロント

### Next.js

- [とほほの Next.js 入門](https://www.tohoho-web.com/ex/nextjs.html)
- [Next.js を使うべき 5 つの理由 + 実装 Tips](https://qiita.com/Yuki_Oshima/items/5c0dfd8f7af8fb76af8f)
- [ディレクトリ構成](https://zenn.dev/hokuto_tech/articles/fdabaff60f5af2)

### MUI UI

- [MUI Getting Started](https://mui.com/material-ui/getting-started/installation/)
- [MUI の使い方](https://zenn.dev/masaru0208/articles/153a69c8b21206)
- インストールコマンド: `yarn add @mui/material @emotion/react @emotion/styled`

### React Query (データフェッチ)

- [React Query の使い方](https://zenn.dev/taisei_13046/books/133e9995b6aadf/viewer/2ce93a)
- インストールコマンド: `yarn add @tanstack/react-query`

### Jotai (状態管理)

- [Jotai 公式サイト](https://jotai.org/)
- [Jotai の使い方](https://qiita.com/55enokky/items/7f2f3962977c098a0993)
- インストールコマンド: `yarn add jotai`

## テスト

### E2E (VRT もできる)

- [Playwright](https://qiita.com/cc822jp/items/6f786a9ed104af1a382f)

### VRT

- Storybook + Chromatic

## Linter + Formatter

- Biome
- StyleLint

## サーバ

## DB
