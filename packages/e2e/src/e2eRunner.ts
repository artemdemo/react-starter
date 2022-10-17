import { spawn } from 'child_process';

export const runE2e = (): Promise<number> =>
  new Promise((resolve, reject) => {
    const e2e = spawn('yarn', ['test:e2e'], {
      // @link https://nodejs.org/api/child_process.html#optionsstdio
      // * subprocess.stdin
      // * subprocess.stdout
      // * subprocess.stderr
      stdio: ['pipe', 'inherit', 'pipe'],
    });

    try {
      e2e.stderr.on('data', function (data) {
        console.log('stderr: ' + data);
        reject();
      });

      e2e.on('close', (code) => {
        console.log('child process exited with code ' + code);
        if (code === 0) {
          resolve(code);
        } else {
          reject(code);
        }
      });
    } catch (e) {
      console.error(e);
      reject();
    }
  });
