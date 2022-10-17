import { spawn } from 'child_process';

export const runE2e = (): Promise<number> =>
  new Promise((resolve, reject) => {
    const e2e = spawn('yarn', ['test:e2e'], {
      // stdio: 'pipe',
      // stdio: "inherit",
      // shell: true,

      // @ts-ignore
      // env: { FORCE_COLOR: true }
    });

    try {
      e2e.stdout.on('data', (data) => {
        const resultStr = data.toString();
        const normStr = resultStr.length > 3 ? resultStr.replace('\n', '') : resultStr;
        console.log(normStr);
      });

      e2e.stderr.on('data', function (data) {
        console.log('stderr: ' + data);
        reject();
      });

      e2e.on('close', (code) => {
        console.log('child process exited with code ' + code);
        if (code === 0) {
          resolve(0);
        } else {
          reject(code);
        }
      });
    } catch (e) {
      console.error(e);
      reject();
    }
  });
