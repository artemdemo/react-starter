const CommonsChunkPlugin = require('webpack').optimize.CommonsChunkPlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpackCommonFactory = require('./webpackCommon');

/**
 * @param options {Object} - see required params in `webpackCommon.js`
 */
module.exports = (options) => {
    const webpackCommon = webpackCommonFactory(options);
    return Object.assign(webpackCommon, {
        devtool: 'source-map',
        devServer: {
            port: 8080,
            contentBase: `${options.buildFolder}/`,
            historyApiFallback: true,
        },
        plugins: webpackCommon.plugins.concat([
            new ExtractTextPlugin('./css/styles.css'),
            new CommonsChunkPlugin({
                name: 'vendor',
                filename: './js/vendor.js',
                minChunks: Infinity,
            }),
        ]),
    });
};
