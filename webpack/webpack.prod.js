const DefinePlugin = require('webpack').DefinePlugin;
const UglifyJsPlugin = require('webpack').optimize.UglifyJsPlugin;
const WebpackChunkHash = require('webpack-chunk-hash');
const webpackCommonFactory = require('./webpack.common');
const staticCommons = require('./commonChunks').staticCommons;

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

            staticCommons(true),

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
