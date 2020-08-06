# Mobility Actions

## Prerequisites

You must have [Hugo v0.74.3/extended](https://gohugo.io/getting-started/installing/) and [Nodejs](https://nodejs.org/en/) installed on your machine.

## Clone this repository

```sh
git clone https://github.com/datasketch/mobility-actions.git
```

## Install dependencies

```sh
cd mobility-actions
npm install
```

## Develop

```sh
hugo server
```

## Deploy

1. Add, commit and push changes to master branch

```sh
git add .
git commit -m "A commit message"
git push origin master
```

2. Run script to deploy

If it is the first time you're deploying run the below command only once:

```sh
# Only do this once!
chmod +x build
```

Then run this every single time:

```sh
npm run deploy
```

If the above steps does not work, run this on your terminal:

```sh
hugo
npx gh-pages --dist public --message "Build site"
```
