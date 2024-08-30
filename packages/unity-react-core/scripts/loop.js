const { execSync } = require("child_process");
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

try {
  for (let i = 0; i < folders.length; i++) {
  console.log("number", i);
  const command = `NUMBER=${i} yarn build-individual-components`;
  execSync(command, { stdio: "inherit" });
  }
} catch (error) {
  throw new Error("Error building individual components", error);
}

