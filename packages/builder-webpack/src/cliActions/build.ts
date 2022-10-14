import webpack from 'webpack';
import { ActionCb } from '../cliArgsParser';
import { generateTarget } from '../generateTarget';
import { createWebpackConfig } from '../webpack/createWebpackConfig';

export const build: ActionCb = async (str, options) => {
  await generateTarget();

  webpack(createWebpackConfig(), (err, stats) => {
    if (err) {
      console.error(err.stack || err);
      return;
    }

    console.log(stats?.toString() + '\n');
  });
};
