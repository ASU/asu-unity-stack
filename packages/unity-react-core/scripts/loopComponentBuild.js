const { exec } = require("child_process");
const path = require("path");
const { readdirSync } = require("fs");

const PROJECT_DIR = path.resolve(__dirname, "../");
const componentsToIgnore = ["FeedAnatomy", "Loader"];

const componentsLocation = path.resolve(PROJECT_DIR, "src/components");

let folders = readdirSync(componentsLocation);
folders = folders.filter(
  file =>
    !componentsToIgnore.some(component => file.includes(component)) &&
    !file.endsWith(".js")
);

const runCommand = (command) => {
  return new Promise((resolve, reject) => {
    exec(command, { stdio: 'inherit' }, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      } else {
        resolve(stdout);
      }
    });
  });
};

const buildComponents = async () => {
  try {
    const promises = [];
    for (let i = 0; i < folders.length; i++) {
      const buildEsmCommand = `NUMBER=${i} yarn build-individual-esm-components`;
      promises.push(runCommand(buildEsmCommand));
    }
    await Promise.all(promises);
    console.log("\x1b[32m✓ Individual ESM components built successfully\x1b[0m");
  } catch (error) {
    throw new Error("Error building individual components", error);
  }
};

buildComponents();
