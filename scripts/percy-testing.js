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
        const stdout = await execPromise(`percy storybook --dry-run --verbose ${packageDir}`);
        console.log(stdout);
      }
    }
    // execPromise('percy build:finalize');
  } catch (err) {
    console.error("Error reading the storybook directory or capturing snapshots:", err);
  }
};

captureSnapshots();
