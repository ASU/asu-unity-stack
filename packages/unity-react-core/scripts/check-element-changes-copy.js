const { execSync } = require("child_process");
const { fstat } = require("fs");
const fs = require('fs');
// import {convertToHTML} from "./check-changes";

const exec = require("child_process").exec;
const path = require("path");

//=====================================================
// console log helpers
//=====================================================
const FgBlue = "\x1b[34m";
const FgGreen = "\x1b[32m";

const printLine = () => console.log(FgBlue, "-".repeat(84));

const printTitle = (text = "") => {
  console.log(FgGreen, `${text + " ".repeat(84 - text.length)}`);
};
//=====================================================
// Process files
//=====================================================

const args = process.argv.slice(2);
const daysAgo = args[1];

const runGit = function (command) {
  let commitHash = null;
  const eg = execSync(command);
  return eg.toString();
};

const parseDateForHTML = () => {
  const d = new Date();
  d.setDate(d.getDate() - daysAgo);
  return d.getMonth() + 1 + "-" + d.getDate() + "-" + d.getFullYear();
};

const parseDateForGIT = () => {
  const d = new Date();
  d.setDate(d.getDate() - daysAgo);
  const date = d.toDateString();
  const arrayDate = date.split(' ');
  const [day, month, dayOfMonth, year] = arrayDate;
  const old_Date = month + " " + dayOfMonth + " " + year;
  return old_Date;
};

const OLD_DATE_HTML = parseDateForHTML();

const old_date_git = parseDateForGIT();

const gitOldCommitCommand = `git rev-list -1 --before="${old_date_git}" dev --format=medium`;

const runOldCommit = runGit(gitOldCommitCommand);
const m = runOldCommit.match(/^commit\s+([a-f0-9]{40})/m);
const commitHash = m ? m[1] : null;

const gitCheckout = `git worktree add scripts/temp ${commitHash}`;
const runCheckout = runGit(gitCheckout);

const targetDir = "scripts/temp/packages/unity-react-core/scripts";
const srcDir = "packages/unity-react-core/scripts/check-changes.tsx"
fs.copyFileSync(srcDir, targetDir+"/check-changes.tsx")
process.chdir(targetDir);
execSync(`npx tsx check-changes.tsx ${OLD_DATE_HTML}`);
console.log(process.cwd());


//convertToHTML(OLD_DATE_HTML);


// const GIT_COMMAND = `git whatchanged --since '${parseDateForGIT()}' --oneline --name-only --pretty=format: | sort | uniq`;

// console.log(`Run GIT command '${GIT_COMMAND}'`);

// runGit(GIT_COMMAND, (res = "") => {
//   const fileTemplates = res
//     .split(/\r\n|\r|\n/)
//     .filter(elm => elm.match(/.*\.(templates?)/gi));

//   printLine();

//   fileTemplates.forEach(filePath => {
//     const fileName = path.parse(filePath).name;
//     const packageName = filePath.split(path.sep)[1];
//     printTitle(`${packageName}: ${fileName}`);
//     printLine();
//   });
// });
//=====================================================

// const v = execSync(gitOldCommitCommand);
// console.log(v.toString());
