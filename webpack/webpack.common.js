const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

/**
 * @param options {Object}
 * @param options.isProduction {Boolean}
 * @param options.buildFolder {String}
 * @param options.appVersion {String}
 */
module.exports = (options) => {
    return {
        entry: {
            bundle: './source/index.jsx',
        },
        output: {
            path: `${process.cwd()}/${options.buildFolder}`,
            filename: './js/[name].js',
            chunkFilename: './js/[id].chunk.js',
            publicPath: '/',
        },
        resolve: {
            extensions: ['.js', '.jsx'],
        },
        module: {
            loaders: [
                {
                    test: /\.jsx?$/,
                    loaders: ['babel-loader'],
                    exclude: /node_modules/,
                },
                {
                    test: /\.(less|css)$/,
                    use: [
                        'style-loader',
                        { loader: 'css-loader', options: { importLoaders: 1 } },
                        'less-loader',
                    ],
                },
                {test: /\.(png|gif|jpg)(\?.*$|$)/, loader: 'url-loader?limit=100000&name=images/[hash].[ext]'},
                {test: /\.(json)(\?.*$|$)/, loader: 'json-loader'},
                {test: /\.(html)(\?.*$|$)/, loader: 'html-loader'},
                // Font Definitions
                {test: /\.(svg)(\?.*$|$)/, loader: 'url-loader?limit=65000&mimetype=image/svg+xml&name=fonts/[name].[ext]'},
                {test: /\.(woff)(\?.*$|$)/, loader: 'url-loader?limit=65000&mimetype=application/font-woff&name=fonts/[name].[ext]'},
                {test: /\.(woff2)(\?.*$|$)/, loader: 'url-loader?limit=65000&mimetype=application/font-woff2&name=fonts/[name].[ext]'},
                {test: /\.([ot]tf)(\?.*$|$)/, loader: 'url-loader?limit=65000&mimetype=application/octet-stream&name=fonts/[name].[ext]'},
                {test: /\.(eot)(\?.*$|$)/, loader: 'url-loader?limit=65000&mimetype=application/vnd.ms-fontobject&name=fonts/[name].[ext]'},
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './source/index.ejs',
                filename: './index.html',
                appVersion: options.appVersion,
            }),
            new CleanWebpackPlugin([options.buildFolder], {
                verbose: true,
                dry: false,
                root: process.cwd(),
                exclude: ['.gitignore'],
            }),
        ],
    };
};
