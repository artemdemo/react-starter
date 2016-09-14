const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
    entry: {
        app: './source/index.jsx',
    },
    output: {
        path: `${__dirname}/build`,
        filename: './js/bundle.js',
        publicPath: '/',
    },
    devServer: {
        port: 8080,
        colors: true,
        contentBase: 'build/',
        historyApiFallback: true,
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.(less|css)$/,
                loader: ExtractTextPlugin.extract(
                    'style',
                    'css?importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader!less'
                ),
            },
            {test: /\.(png|gif|jpg)$/, loader: 'url-loader?limit=100000&name=images/[hash].[ext]'},
            {test: /\.json$/, loader: 'json'},
            {test: /\.html$/, loader: 'html'},
            // Font Definitions
            {test: /\.svg$/, loader: 'url?limit=65000&mimetype=image/svg+xml&name=fonts/[name].[ext]'},
            {test: /\.woff$/, loader: 'url?limit=65000&mimetype=application/font-woff&name=fonts/[name].[ext]'},
            {test: /\.woff2$/, loader: 'url?limit=65000&mimetype=application/font-woff2&name=fonts/[name].[ext]'},
            {test: /\.[ot]tf$/, loader: 'url?limit=65000&mimetype=application/octet-stream&name=fonts/[name].[ext]'},
            {test: /\.eot$/, loader: 'url?limit=65000&mimetype=application/vnd.ms-fontobject&name=fonts/[name].[ext]'},
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './source/index.html',
            filename: './index.html',
        }),
        new ExtractTextPlugin('./css/styles.css', {
            allChunks: true,
        }),
    ],
    postcss: function() {
        return [
            autoprefixer({browsers: [
                'last 2 Chrome versions',
                'last 2 Firefox versions',
                'Firefox ESR',
                'Firefox 24',
                'last 2 Opera versions',
                'last 2 Safari versions',
                'last 2 iOS versions',
                'Explorer >= 10',
                'last 2 ChromeAndroid versions',
                'Android >= 4.0',
            ]}),
        ];
    },
};
