# auth0sample

## ページ構成

- /top: ログインなしで遷移できるページ
- /home: ダミー API アクセス時に認証トークンを取得、トークンがなければ auth0 ログインしてトークン取得
- /profile: /home と同様。表示内容はメールアドレスなど auth0 から取れるユーザー情報
- /login: ログイン画面に遷移。ログイン後に/home 遷移
- /logout: ログアウト。動作不安定

## Setup

### auth0 関連

- auth0 で application 作成
  - single page application を指定
- Allowed Callback URLs に以下を指定
  - ログイン元、ログイン後のリダイレクト先
  - http://localhost:8080, http://localhost:8080/authorized
- Allowed Logout URL, Allowed Origins に以下を指定
  - ログアウト先？
  - http://localhost:8080
- .env.local.sample をコピーして.env.local にリネーム
- VUE_APP_DOMAIN, VUE_APP_CLIENT_ID をそれぞれの auth0 の値に更新する

### ライブラリインストール

```
npm i
npm run serve:local
```

## Start

```
npm run serve:local
```
