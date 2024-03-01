/*
* PERCY_PARALLEL_TOTAL=-1 must be set in the environment to run this script.
* It is set in the package.json script. See https://www.browserstack.com/docs/percy/integrate/parallel-test-suites
* for more info on why.
*/

const { exec } = require('child_process');
const fs = require('fs').promises; // Use the Promise-based version of fs
const path = require('path');

const storybookDir = path.join(__dirname, '..', 'build/@asu');

const execPromise = (cmd) => new Promise((resolve, reject) => {
  exec(cmd, (err, stdout, stderr) => {
    if (err) {
      reject(err);
      return;
    }
    if (stderr) {
      console.error(stderr);
    }
    resolve(stdout);
  });
});

const captureSnapshots = async () => {
  try {
    const files = await fs.readdir(storybookDir, { withFileTypes: true });
    for (const dirent of files) {
      if (dirent.isDirectory()) {
        const packageDir = path.join(storybookDir, dirent.name);
        console.log(`Capturing snapshots for ${dirent.name}`);
        try {
          const stdout = await execPromise(`percy storybook --verbose ${packageDir}`);
          console.log(stdout);
        } catch (err) {
          console.error(`Error capturing snapshots for ${dirent.name}:`, err);
        }
      }
    }
    execPromise('percy build:finalize');
  } catch (err) {
    console.error("Error reading the storybook directory:", err);
  }
};

captureSnapshots();
