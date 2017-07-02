const DefinePlugin = require('webpack').DefinePlugin;
const UglifyJsPlugin = require('webpack').optimize.UglifyJsPlugin;
const CommonsChunkPlugin = require('webpack').optimize.CommonsChunkPlugin;
const WebpackChunkHash = require('webpack-chunk-hash');
const webpackCommonFactory = require('./webpack.common');

/**
 * @param options {Object} - see required params in `webpackCommon.js`
 */
module.exports = (options) => {
    const webpackCommon = webpackCommonFactory(options);
    return Object.assign(webpackCommon, {
        output: Object.assign(webpackCommon.output, {
            filename: './js/[name]-[chunkhash].js',
        }),
        plugins: webpackCommon.plugins.concat([
            // @docs https://webpack.js.org/guides/caching/
            new WebpackChunkHash(),
            new CommonsChunkPlugin({
                name: 'global',
                // `global` chunk should always change hash
                // This way we can be sure that browser will get fresh list of all chunk hashes
                // For more information see `webpack.common`
                filename: './js/global-[hash].js',
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
