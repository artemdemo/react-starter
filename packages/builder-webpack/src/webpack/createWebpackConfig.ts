import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { DefinePlugin, Configuration } from 'webpack';
import path from 'path';
import { fontLoaders } from './fontLoaders';
import { BUILD_DIR, SOURCE_DIR, TARGET_DIR } from '../constants';

export const createWebpackConfig = (): Configuration => {

  const projectCwd = process.cwd();
  const isProduction = process.env.NODE_ENV === 'production';
  const appVersion = require(path.join(projectCwd, './package.json')).version;

  return {
    entry: path.join(projectCwd, TARGET_DIR, 'index.tsx'),
    mode: isProduction ? 'production' : 'development',
    output: {
      path: path.join(projectCwd, BUILD_DIR),
      filename: isProduction ? './js/[name]-[chunkhash].js' : './js/[name].js',
      chunkFilename: isProduction
        ? './js/[id].chunk-[chunkhash].js'
        : './js/[id].chunk.js',
      publicPath: '/',
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        // Since the chunk name includes all origin chunk names
        // it's recommended for production builds with long term caching to NOT include [name] in the filenames
        name: false,
      },
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.([tj])sx?$/,
          include: [
            path.resolve(projectCwd, SOURCE_DIR),
            path.resolve(projectCwd, TARGET_DIR),
          ],
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
          include: path.resolve(projectCwd, SOURCE_DIR),
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
                  localIdentName: isProduction ? '[hash:base64:5]' : '[path]',
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
          production: isProduction,
          appVersion: JSON.stringify(appVersion),
        },
      }),

      // ModuleConcatenationPlugin
      // * faster build
      // * faster execution time in the browser
      // @link https://webpack.js.org/plugins/module-concatenation-plugin/
      // new ModuleConcatenationPlugin(),

      new HtmlWebpackPlugin({
        templateContent: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>App</title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="app-version" content="${appVersion}">
  <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width">
</head>
<body>
  <div id="app"></div>
</body>
</html>
        `,
        filename: './index.html',
      }),

      new CleanWebpackPlugin({
        // verbose: true,
        dry: false,
        cleanOnceBeforeBuildPatterns: ['**/*', '!.gitignore'],
      }),
    ],
  };
};
