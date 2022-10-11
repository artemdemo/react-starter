import { cliArgsParser } from './cliArgsParser';

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
    }
  },
  {
    name: 'build',
    description: 'Builds the project',
    action: (str, options) => {
      console.log('build action');
    }
  },
]);
