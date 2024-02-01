const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const storybookDir = path.join(__dirname, '..', 'build/@asu');

fs.readdir(storybookDir, { withFileTypes: true }, (err, files) => {
  if (err) {
    console.error("Error reading the storybook directory:", err);
    return;
  }

    const NUMBER_OF_PACKAGES = files.length || 0; // TODO: Do we want to include all packages?

    files.forEach((dirent, index) => {
        if (dirent.isDirectory()) {
            const packageDir = path.join(storybookDir, dirent.name);
            console.log(`Capturing snapshots for ${dirent.name}`);

            exec(`percy storybook --shard-count=${NUMBER_OF_PACKAGES} --shard-index=${index} ${packageDir}`, (err, stdout, stderr) => {
                if (err) {
                    console.error(`Error capturing snapshots for ${dirent.name}:`, err);
                    return;
                }
                console.log(stdout);
                if (stderr) {
                    console.error(stderr);
                }
            });
        }
    });
});
