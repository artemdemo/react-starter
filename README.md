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
$ npm i
```

And finally you'll probably want replace `.git` folder with yours:

```
$ rm -rf .git/ && git init
```

## npm commands

* `$ npm start` (alias `$ npm run server:dev`) - build bundle, but without minification and serve it in the browser
* `$ npm run server:prod` - build prod version of bundle (with minification) and serve it in the browser
* `$ npm run build` (alias `$ npm run build:prod`) - build prod version of bundle (with minification)
* `$ npm run build:dev` - build bundle, without minification
* `$ npm run watch` (alias `$ npm run watch:dev`) - watch changes and build build bundle without minification
* `$ npm run npm-check` - check if some of npm packages are outdated
* `$ npm run npm-check:update` - interactive console for updating npm packages
* `$ npm run eslint` - run eslint for code-styling checks
* `$ npm t` - run tests

