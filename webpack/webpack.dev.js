const webpackCommonFactory = require('./webpack.common');
const proxy = require('./proxy');

const shouldMinify = process.env.MINIFIED === 'true';

/**
 * @param options {Object} - see required params in `webpackCommon.js`
 */
module.exports = (options) => {
    const webpackCommon = webpackCommonFactory(options);
    return Object.assign(webpackCommon, {
        mode: shouldMinify ? 'production' : 'development',
        devtool: 'source-map',
        optimization: shouldMinify ? {} : {
            minimize: false,
        },
        devServer: {
            host: '0.0.0.0',
            port: 8080,
            contentBase: `${options.buildFolder}/`,
            historyApiFallback: true,
            proxy,
        },
        plugins: [
            ...webpackCommon.plugins,
        ],
    });
};
