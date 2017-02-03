const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpackBase = require('./webpack.config');

module.exports = Object.assign(webpackBase, {
    devtool: 'source-map',
    plugins: webpackBase.plugins.concat([
        new ExtractTextPlugin('./css/styles.css'),
    ])
});
