import { ChildProcess } from 'child_process';
import { runServer } from './serverRunner';
import { runE2e } from './e2eRunner';

const run = async () => {
  let server: ChildProcess;

  try {
    console.log('Spawning new server');
    server = await runServer();

    console.log('Starting e2e tests');
    await runE2e();
  } catch (e) {
    console.error(e);
  }

  server?.kill();
};

run();

