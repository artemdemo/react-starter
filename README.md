# React with webpack - starter pack

[![Build Status](https://travis-ci.org/artemdemo/react-webpack-starter.svg?branch=master)](https://travis-ci.org/artemdemo/react-webpack-starter)

Basic packages and scripts to start app developing in react, redux and webpack

## Packages

- react
  - react-router
- redux
- webpack
  - webpack-dev-server
- less
- bootstrap css

## Getting started

```
$ git clone git@github.com:artemdemo/react-webpack-starter.git YOUR_APP_NAME
```

```
$ cd YOUR_APP_NAME
```

```
$ yarn install
```

You also can use `yarn i` instead, but yarn is better.

And finally you'll probably want replace `.git` folder with yours:

```
$ rm -rf .git/ && git init
```

## yarn commands

- `$ yarn start` - build bundle, but without minification and serve it in the browser
- `$ yarn build` - build version of bundle
- `$ yarn outdated` - check if some of yarn packages are outdated
- `$ yarn stats` - analyze code distribution in bundle files
- `$ yarn eslint` - run eslint for code-styling checks
- `$ yarn t` - run tests
- `$ yarn server:prod` - build for production and run simple server to show in the browser
- `$ yarn server:dev:minified` - run dev server with minified JS

**Notice**

In order to run command in production mode you'll need use env variable `NODE_ENV='production'`

### Check for outdated packages

```
$ yarn outdated
```

After that you can upgrade them:

```
$ yarn update [-g] [<pkg>...]
```

If you want to upgrade to the latest version use:

```
$ yarn update <pkg>@latest
```
