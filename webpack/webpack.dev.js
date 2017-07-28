const webpackCommonFactory = require('./webpack.common');
const staticCommons = require('./commonChunks').staticCommons;

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
            staticCommons(),
        ]),
    });
};
