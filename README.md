# gh-now

Simple static webpage with api server

- static : gh-pages
- api : zeit-now

# Developing

```
npm run watch
```

Static server : `[localhost:9966](localhost:9966)`
Api server    : `[localhost:3000](localhost:3000)`

Base url of api server address will be revealed in `process.env.NOW_BASE`.

# Deployment

Edit circle.yml and fill in the `environment` fields.

If you want a CNAME setting, fill in the `CNAME` field.

## gh-pages deployment token

Open CircleCI and build project.

⚙ -> PERMISSIONS -> Checkout SSH Keys -> Add user key

## zeit-now deployment token

Open [tokens](https://zeit.co/account/tokens) and create a new token.

Open CircleCI and set environment variable `NOW_TOKEN`.

⚙ -> BUILD SETTINGS -> Environment Variables -> Add Variable

Then, rebuild.
