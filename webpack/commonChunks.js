const CommonsChunkPlugin = require('webpack').optimize.CommonsChunkPlugin;

const staticCommons = (prod = false) => {
    const filename = prod ? './js/static-[chunkhash].js' : './js/static.js';
    return new CommonsChunkPlugin({
        name: 'static',
        filename,
        minChunks(module, count) {
            const context = module.context;
            return context && context.indexOf('node_modules') >= 0;
        },
    });
};

module.exports = {
    staticCommons,
};
