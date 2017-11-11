const ExtractTextplugin = require('extract-text-webpack-plugin');

const loaders = (extractCssFile) => {
    const result = [];
    if (extractCssFile) {
        result.push({
            test: /\.(less|css)$/,
            use: ExtractTextplugin.extract({
                fallback: 'style-loader',
                use: [
                    { loader: 'css-loader', options: { importLoaders: 1, minimize: true } },
                    'less-loader',
                ],
            }),
        });
    } else {
        result.push({
            test: /\.(less|css)$/,
            use: [
                'style-loader',
                { loader: 'css-loader', options: { importLoaders: 1, minimize: true } },
                'less-loader',
            ],
        });
    }
    return result;
};

const plugins = (extractCssFile, isProduction) => {
    if (extractCssFile) {
        return [
            new ExtractTextplugin({
                filename: isProduction ?
                    './css/styles-[hash].css' :
                    './css/styles.css',
                disable: false,
                allChunks: true,
            }),
        ];
    }
    return [];
};

module.exports = {
    loaders,
    plugins,
};
