const DefinePlugin = require('webpack').DefinePlugin;
const UglifyJsPlugin = require('webpack').optimize.UglifyJsPlugin;
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpackCommonFactory = require('./webpackCommon');

/**
 * @param options {Object} - see required params in `webpackCommon.js`
 */
module.exports = (options) => {
    const webpackCommon = webpackCommonFactory(options);
    return Object.assign(webpackCommon, {
        output: Object.assign(webpackCommon.output, {
            filename: './js/bundle-[hash].js',
        }),
        plugins: webpackCommon.plugins.concat([
            new ExtractTextPlugin('./css/styles-[hash].css'),
            new DefinePlugin({
                'process.env': {
                    NODE_ENV: '"production"',
                },
            }),
            new UglifyJsPlugin({
                compress: {
                    warnings: false,
                },
            }),
        ]),
    });
};
