import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import { generateTarget } from '../generateTarget';
import { ActionCb } from '../cliArgsParser';
import { createWebpackConfig } from '../webpack/createWebpackConfig';
import { createDevServerConfig } from '../webpack/createDevServerConfig';

export const start: ActionCb = async (str, options) => {
  console.log('start action');

  await generateTarget();

  const compiler = webpack(createWebpackConfig());
  const server = new WebpackDevServer(createDevServerConfig(), compiler);

  console.log('Starting server...');
  await server.start();
}
