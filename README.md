# How to develop this project

## Prerequisites
1. Node 18 ([installation instructions](https://github.com/nvm-sh/nvm?tab=readme-ov-file#usage))
2. pnpm@9.0.6 ([installation instructions](https://pnpm.io/installation))

## Environment variables
If you want to connect dev UI version to your local CassetteOS server, you will need to set up a couple of env variables:
1. Copy `.env.dev` to `.env.dev.local` (this file is git-ignored)
2. Set `VUE_APP_DEV_IP` to IP address of your local CassetteOS server

## Set up dev server
```shell
# install dependencies
pnpm install

# build
pnpm dev 
```

# How to build this project

```shell
# install dependencies
pnpm install

# build
pnpm build 
```

# How to test this project

```shell
pnpm test
```
