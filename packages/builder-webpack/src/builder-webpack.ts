import webpack from 'webpack';
import { cliArgsParser } from './cliArgsParser';
import { createWebpackConfig } from './webpack/createWebpackConfig';

console.log('--><--');
console.log('Hello from ::: builder-webpack');
console.log(process.cwd());
console.log('--><--');

cliArgsParser([
  {
    name: 'start',
    description: 'Starts the project',
    action: (str, options) => {
      console.log('start action');
    },
  },
  {
    name: 'build',
    description: 'Builds the project',
    action: (str, options) => {
      console.log('build action');

      webpack(createWebpackConfig(), (err, stats) => {
        if (err) {
          console.error(err.stack || err);
          return;
        }

        console.log(stats?.toString() + '\n');

        const info = stats?.toJson();

        if (stats?.hasErrors()) {
          console.log('>>> ERRORS <<<');
          console.error(info?.errors);
        }

        if (stats?.hasWarnings()) {
          console.log('>>> WARNINGS <<<');
          console.warn(info?.warnings);
        }
      });
    },
  },
]);
