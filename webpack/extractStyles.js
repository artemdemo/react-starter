const ExtractTextPlugin = require('extract-text-webpack-plugin');

const moduleRule = (extract = false) => {
    const rule = {
        test: /\.(less|css)$/,
        use: null,
    };
    const cssLoader = {
        loader: 'css-loader',
    };
    if (extract) {
        // Build styles into separate css files
        // (extract them and put outside of js)
        //
        rule.use = ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
                cssLoader,
                'less-loader',
            ],
        });
    } else {
        // Keep styles inside of js
        // They will be added by js only when needed
        //
        rule.use = [
            'style-loader',
            cssLoader,
            'less-loader',
        ];
    }
    return rule;
};

const plugins = (extract = false, isProduction = false) => {
    if (extract) {
        return [
            new ExtractTextPlugin({
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
    moduleRule,
    plugins,
};
