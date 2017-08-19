const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextplugin = require('extract-text-webpack-plugin');
const IgnorePlugin = require('webpack').IgnorePlugin;
const DefinePlugin = require('webpack').DefinePlugin;

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

            // @docs https://webpack.js.org/guides/caching/#deterministic-hashes
            filename: options.isProduction ?
                './js/[name]-[chunkhash].js' :
                './js/[name].js',
            chunkFilename: options.isProduction ?
                './js/[id].chunk-[chunkhash].js' :
                './js/[id].chunk.js',
            publicPath: '/',
        },
        resolve: {
            extensions: ['.js', '.jsx'],
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)?$/,
                    exclude: /node_modules/,
                    use: 'babel-loader',
                },
                {
                    test: /\.(less|css)$/,
                    use: ExtractTextplugin.extract({
                        fallback: 'style-loader',
                        use: [
                            { loader: 'css-loader', options: { importLoaders: 1, minimize: true } },
                            'less-loader',
                        ],
                    }),
                },
                {test: /\.(png|gif|jpg)(\?.*$|$)/, use: 'url-loader?limit=100000&name=images/[hash].[ext]'},
                {test: /\.(json)(\?.*$|$)/, use: 'json-loader'},
                {test: /\.(html)(\?.*$|$)/, use: 'html-loader'},

                // Font Definitions
                {test: /\.(svg)(\?.*$|$)/, use: 'url-loader?limit=65000&mimetype=image/svg+xml&name=fonts/[name].[ext]'},
                {test: /\.(woff)(\?.*$|$)/, use: 'url-loader?limit=65000&mimetype=application/font-woff&name=fonts/[name].[ext]'},
                {test: /\.(woff2)(\?.*$|$)/, use: 'url-loader?limit=65000&mimetype=application/font-woff2&name=fonts/[name].[ext]'},
                {test: /\.([ot]tf)(\?.*$|$)/, use: 'url-loader?limit=65000&mimetype=application/octet-stream&name=fonts/[name].[ext]'},
                {test: /\.(eot)(\?.*$|$)/, use: 'url-loader?limit=65000&mimetype=application/vnd.ms-fontobject&name=fonts/[name].[ext]'},
            ],
        },
        plugins: [
            // Ignoring warnings for following plugins, case they doesn't matter
            new IgnorePlugin(/regenerator|nodent|js-beautify/, /ajv/),

            // Defining global ENV variable
            new DefinePlugin({
                ENV: {production: options.isProduction},
            }),

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
            new ExtractTextplugin({
                filename: options.isProduction ?
                    './css/styles-[hash].css' :
                    './css/styles.css',
                disable: false,
                allChunks: true,
            }),
        ],
    };
};
