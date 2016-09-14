#!/usr/bin/env bash

YELLOW='\033[1;33m'
BLUE='\033[1;34m'
RED='\033[1;31m'
NC='\033[0m'

if [ ! -f ./package.json ]; then
  printf "\n"
  printf "${RED}[!] ${YELLOW}First run npm init${NC} \n"
  printf "Installation aborted \n"
  exit 1
fi

mkdir source/actions
mkdir source/components
mkdir source/constants
mkdir source/reducers

printf '--> Installing babel... \n'
npm i --save babel babel-plugin-transform-object-assign babel-plugin-transform-react-jsx babel-preset-es2015

printf '--> Installing less... \n'
npm i --save less

printf '--> Installing react... \n'
npm i --save react react-dom react-router history

printf '--> Installing redux... \n'
npm i --save react-redux redux react-router-redux redux-thunk

printf '--> Installing webpack... \n'
npm i --save webpack webpack-dev-server

printf '--> Installing loaders... \n'
npm i --save babel-loader css-loader style-loader less-loader postcss-loader url-loader file-loader html-loader

printf '--> Installing plugins... \n'
npm i --save classnames html-webpack-plugin extract-text-webpack-plugin autoprefixer

printf '--> Installing eslint... \n'
npm i --save eslint git+https://github.com/artemdemo/eslint-config-artem-react.git#1.0.0

printf '--> Installing bootstrap css... \n'
npm i --save bootstrap

printf "${YELLOW} Done${NC} You can add scripts to package.json: \n"
printf '{ \n'
printf '  "start": "npm run server", \n'
printf '  \"server\": \"webpack-dev-server\", \n'
printf '  \"build\": \"webpack --progress --colors\", \n'
printf '  \"watch\": \"webpack --progress --colors --watch\", \n'
printf '... \n'
printf '} \n'
