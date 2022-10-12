import webpack from 'webpack';
import { ActionCb } from '../cliArgsParser';
import { generateTarget } from '../generateTarget';
import { createWebpackConfig } from '../webpack/createWebpackConfig';

export const build: ActionCb = async (str, options) => {
  console.log('build action');

  await generateTarget();

  webpack(createWebpackConfig(), (err, stats) => {
    if (err) {
      console.error(err.stack || err);
      return;
    }

    console.log(stats?.toString() + '\n');

    const info = stats?.toJson();

    if (stats?.hasErrors()) {
      console.log('>>> ERRORS <<<');
      info?.errors?.forEach((error) => {
        console.error(error.stack);
      });
    }

    if (stats?.hasWarnings()) {
      console.log('>>> WARNINGS <<<');
      console.warn(info?.warnings);
    }
  });
}
