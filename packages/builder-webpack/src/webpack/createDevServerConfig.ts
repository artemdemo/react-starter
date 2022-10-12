import WebpackDevServer from 'webpack-dev-server';
import path from 'path';
import { BUILD_DIR } from '../constants';
// import { proxy } from '../webpack/proxy';

export const createDevServerConfig = (): WebpackDevServer.Configuration => {
  const projectCwd = process.cwd();
  const buildFolder = BUILD_DIR;

  return {
    host: '0.0.0.0',
    port: 8080,
    static: {
      directory: path.join(projectCwd, buildFolder),
    },
    historyApiFallback: true,
    hot: true,
    // proxy,
    open: true,
  };
};
