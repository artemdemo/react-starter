const DefinePlugin = require('webpack').DefinePlugin;
const UglifyJsPlugin = require('webpack').optimize.UglifyJsPlugin;
const CommonsChunkPlugin = require('webpack').optimize.CommonsChunkPlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackChunkHash = require('webpack-chunk-hash');
const webpackCommonFactory = require('./webpackCommon');

/**
 * @param options {Object} - see required params in `webpackCommon.js`
 */
module.exports = (options) => {
    const webpackCommon = webpackCommonFactory(options);
    return Object.assign(webpackCommon, {
        output: Object.assign(webpackCommon.output, {
            filename: './js/bundle-[chunkhash].js',
        }),
        plugins: webpackCommon.plugins.concat([
            // @docs https://webpack.js.org/guides/caching/
            new WebpackChunkHash(),
            new ExtractTextPlugin('./css/styles-[chunkhash].css'),
            new CommonsChunkPlugin({
                name: 'vendor',
                filename: './js/vendor-[chunkhash].js',
                minChunks: Infinity,
            }),
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
