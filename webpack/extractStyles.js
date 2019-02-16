/* eslint-disable max-len */
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanCSSPlugin = require('less-plugin-clean-css');

const moduleRule = (extract = false) => {
    const rule = {
        test: /\.(less|css)$/,
        use: null,
    };
    const cssLoader = {
        loader: 'css-loader',
    };
    const lessLoader = {
        loader: 'less-loader',
        options: {
            plugins: [
                // Compresses the css output from less using clean-css.
                // @link https://github.com/less/less-plugin-clean-css
                new CleanCSSPlugin({
                    // advanced optimizations - selector & property merging, reduction, etc.
                    // @link https://github.com/jakubpawlowicz/clean-css/tree/v3.0.1#how-to-use-clean-css-programmatically
                    advanced: true,
                }),
            ],
        },
    };
    if (extract) {
        // Build styles into separate css files
        // (extract them and put outside of js)
        //
        rule.use = ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
                cssLoader,
                lessLoader,
            ],
        });
    } else {
        // Keep styles inside of js
        // They will be added by js only when needed
        //
        rule.use = [
            'style-loader',
            cssLoader,
            lessLoader,
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
