const webpackCommonFactory = require('./webpack.common');

/**
 * @param options {Object} - see required params in `webpackCommon.js`
 */
module.exports = (options) => {
    const webpackCommon = webpackCommonFactory(options);
    return Object.assign(webpackCommon, {
        mode: 'development',
        devtool: 'source-map',
        optimization: {
            minimize: false,
        },
        devServer: {
            port: 8080,
            contentBase: `${options.buildFolder}/`,
            historyApiFallback: true,
        },
        plugins: [
            ...webpackCommon.plugins,
        ],
    });
};
