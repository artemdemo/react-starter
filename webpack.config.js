const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { DefinePlugin } = require('webpack');
const packageFile = require('./package.json');
const proxy = require('./webpack/proxy');
const fontLoaders = require('./webpack/fontLoaders');
const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';
const configOptions = {
  buildFolder: './build',
  mainSourceFolder: './source',
  appVersion: packageFile.version,
  clientId: process.env.CLIENT_ID,
  apiKey: process.env.API_KEY,
  isProduction,
};

module.exports = () => {
  return {
    entry: path.join(__dirname, configOptions.mainSourceFolder, 'index.tsx'),
    mode: configOptions.isProduction ? 'production' : 'development',
    output: {
      path: `${process.cwd()}/${configOptions.buildFolder}`,
      filename: configOptions.isProduction
        ? './js/[name]-[chunkhash].js'
        : './js/[name].js',
      chunkFilename: configOptions.isProduction
        ? './js/[id].chunk-[chunkhash].js'
        : './js/[id].chunk.js',
      publicPath: '/',
    },
    devServer: {
      host: '0.0.0.0',
      port: 8080,
      static: {
        directory: path.join(__dirname, configOptions.buildFolder),
      },
      historyApiFallback: true,
      hot: true,
      proxy,
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.([tj])sx?$/,
          include: path.resolve(__dirname, configOptions.mainSourceFolder),
          exclude: /node_modules/,
          use: [
            {
              loader: 'ts-loader',
              options: {},
            },
          ],
        },
        {
          test: /\.css$/i,
          include: path.resolve(__dirname, configOptions.mainSourceFolder),
          exclude: /node_modules/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                // https://webpack.js.org/loaders/css-loader/#modules
                modules: {
                  // enable CSS modules for all files matching /\.module\.\w+$/i.test(filename)
                  auto: true,
                  localIdentName: configOptions.isProduction
                    ? '[hash:base64:5]'
                    : '[path]',
                },
              },
            },
            'postcss-loader',
          ],
        },

        ...fontLoaders,
      ],
    },
    plugins: [
      // Defining global ENV variable
      // Useful for some age cases, when you need explicitly know whether you're in development or not
      // For example, when you want to log out something only in development mode
      // and don't want to delete this code in production, just want to deactivate it then.
      new DefinePlugin({
        ENV: {
          production: configOptions.isProduction,
          clientId: JSON.stringify(configOptions.clientId),
          apiKey: JSON.stringify(configOptions.apiKey),
          appVersion: JSON.stringify(configOptions.appVersion),
        },
      }),

      // ModuleConcatenationPlugin
      // * faster build
      // * faster execution time in the browser
      // @link https://webpack.js.org/plugins/module-concatenation-plugin/
      // new ModuleConcatenationPlugin(),

      new HtmlWebpackPlugin({
        template: './source/index.ejs',
        filename: './index.html',
        appVersion: configOptions.appVersion,
      }),

      new CleanWebpackPlugin({
        verbose: true,
        dry: false,
        cleanOnceBeforeBuildPatterns: ['**/*', '!.gitignore'],
      }),
    ],
  };
};
