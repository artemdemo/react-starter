import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import path from 'path';
import { generateTarget } from '../generateTarget';
import { ActionCb } from '../cliArgsParser';
import { createWebpackConfig } from '../webpack/createWebpackConfig';
import { BUILD_DIR } from '../constants';
// import { proxy } from '../webpack/proxy';

export const start: ActionCb = async (str, options) => {
  console.log('start action');

  await generateTarget();

  const compiler = webpack(createWebpackConfig());
  const projectCwd = process.cwd();
  const buildFolder = BUILD_DIR;

  const devServerOptions = {
    host: '0.0.0.0',
    port: 8080,
    static: {
      directory: path.join(projectCwd, buildFolder),
    },
    historyApiFallback: true,
    hot: true,
    // proxy,
    open: true
  };
  const server = new WebpackDevServer(devServerOptions, compiler);

  console.log('Starting server...');
  await server.start();
}
