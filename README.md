# React with webpack - starter pack

Basic packages and scripts to start app developing in react, redux and webpack

## Packages
* react
* redux
    - redux-router
* webpack
    - webpack-dev-server
* less
* bootstrap css

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

You also can use `npm i` instead, but yarn is better.

And finally you'll probably want replace `.git` folder with yours:

```
$ rm -rf .git/ && git init
```

## npm commands

* `$ npm start` (alias `$ npm run server:dev`) - build bundle, but without minification and serve it in the browser
* `$ npm run build` - build version of bundle
* `$ npm run watch` - watch changes (if don't want to use `webpack-dev-server`)
* `$ npm run npm-check` - check if some of npm packages are outdated
* `$ npm run eslint` - run eslint for code-styling checks
* `$ npm t` - run tests

**Notice**

In order to run command in production mode you'll need use env variable `NODE_ENV='production'`