import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { DefinePlugin, Configuration } from 'webpack';
import path from 'path';
// import { proxy } from './proxy';
import { fontLoaders } from './fontLoaders';
import { BUILD_DIR, SOURCE_DIR, TARGET_DIR } from '../constants';

type ConfigOptions = {
  projectCwd?: string;
  buildFolder?: string;
  sourceFolder?: string;
  targetFolder?: string;
  clientId?: string;
  apiKey?: string;
  isProduction?: boolean;
};

export const createWebpackConfig = (options: ConfigOptions = {}): Configuration => {
  const {
    projectCwd = process.cwd(),
    buildFolder = BUILD_DIR,
    sourceFolder = SOURCE_DIR,
    targetFolder = TARGET_DIR,
    clientId = process.env.CLIENT_ID,
    apiKey = process.env.API_KEY,
    isProduction = process.env.NODE_ENV === 'production',
  } = options;
  const appVersion = require(path.join(projectCwd, './package.json')).version;

  return {
    entry: path.join(projectCwd, targetFolder, 'index.tsx'),
    mode: isProduction ? 'production' : 'development',
    output: {
      path: path.join(projectCwd, buildFolder),
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
    // devServer: {
    //   host: '0.0.0.0',
    //   port: 8080,
    //   static: {
    //     directory: path.join(projectCwd, buildFolder),
    //   },
    //   historyApiFallback: true,
    //   hot: true,
    //   proxy,
    // },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.([tj])sx?$/,
          include: [
            path.resolve(projectCwd, sourceFolder),
            path.resolve(projectCwd, targetFolder),
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
          include: path.resolve(projectCwd, sourceFolder),
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
          clientId: JSON.stringify(clientId),
          apiKey: JSON.stringify(apiKey),
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
