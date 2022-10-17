import path from 'path';
import { spawn, ChildProcess } from 'child_process';

export const runServer = (): Promise<ChildProcess> =>
  new Promise((resolve, reject) => {
    const staticServer = spawn('yarn', ['start'], {
      cwd: path.join(__dirname, '../../server'),
    });

    staticServer.stdout.on('data', async (data) => {
      const resultStr: string = data.toString();
      if (resultStr.indexOf('Server listening on port') > -1) {
        console.log(resultStr);
        resolve(staticServer);
      } else {
        console.error(resultStr);
        reject();
      }
    });
  });
