const { DefinePlugin } = require('webpack');
const { UglifyJsPlugin } = require('webpack').optimize;
const WebpackChunkHash = require('webpack-chunk-hash');
const webpackCommonFactory = require('./webpack.common');
const { commonCommons } = require('./commonChunks');

/**
 * @param options {Object} - see required params in `webpackCommon.js`
 */
module.exports = (options) => {
    const webpackCommon = webpackCommonFactory(options);
    return Object.assign(webpackCommon, {
        plugins: webpackCommon.plugins.concat([
            // @docs https://webpack.js.org/guides/caching/
            new WebpackChunkHash(),

            commonCommons(true),

            new DefinePlugin({
                'process.env': {
                    NODE_ENV: '"production"',
                },
            }),
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: {
                        warnings: false,
                    },
                },
            }),
        ]),
    });
};
