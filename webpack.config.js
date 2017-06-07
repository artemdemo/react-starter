const packageFile = require('./package.json');

const isProduction = process.env.NODE_ENV === 'production';
const configOptions = {
    buildFolder: './build',
    appVersion: packageFile.version,
    isProduction,
};

const webpackConfig = isProduction ?
    require('./webpack/webpackProd')(configOptions) :
    require('./webpack/webpackDev')(configOptions);

if (process.argv.indexOf('--json') === -1) {
    console.log(' ❤ isProduction:', isProduction, '\n');
}

module.exports = webpackConfig;
