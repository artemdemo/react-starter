import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { DefinePlugin } from 'webpack';
import path from 'path';
import packageFile from '../package.json';
import { proxy } from './proxy';
import { fontLoaders } from './fontLoaders';

type ConfigOptions = {
  buildFolder?: string;
  sourceFolder?: string;
  clientId?: string;
  apiKey?: string;
  isProduction?: boolean;
};

export const createWebpackConfig = (options: ConfigOptions = {}) => {
  const {
    buildFolder = './build',
    sourceFolder = './src',
    clientId = process.env.CLIENT_ID,
    apiKey = process.env.API_KEY,
    isProduction = process.env.NODE_ENV === 'production',
  } = options;
  const appVersion = packageFile.version;

  return {
    entry: path.join(__dirname, sourceFolder, 'index.tsx'),
    mode: isProduction ? 'production' : 'development',
    output: {
      path: `${process.cwd()}/${buildFolder}`,
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
    devServer: {
      host: '0.0.0.0',
      port: 8080,
      static: {
        directory: path.join(__dirname, buildFolder),
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
          include: path.resolve(__dirname, sourceFolder),
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
          include: path.resolve(__dirname, sourceFolder),
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
        template: `${sourceFolder}/index.ejs`,
        filename: './index.html',
        appVersion,
      }),

      new CleanWebpackPlugin({
        verbose: true,
        dry: false,
        cleanOnceBeforeBuildPatterns: ['**/*', '!.gitignore'],
      }),
    ],
  };
};
