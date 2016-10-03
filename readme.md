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
$ npm init
```

```
$ ./install-react.sh
```

At the end you'll need to add build script commands to your `package.json`. You'll see them in your terminal at the end of installation.

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


