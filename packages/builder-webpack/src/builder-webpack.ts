import { build } from './cliActions/build';
import { start } from './cliActions/start';
import { cliArgsParser } from './cliArgsParser';

cliArgsParser([
  {
    name: 'start',
    description: 'Starts the project',
    action: start,
  },
  {
    name: 'build',
    description: 'Builds the project',
    action: build,
  },
]);
