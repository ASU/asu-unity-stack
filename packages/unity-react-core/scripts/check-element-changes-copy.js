const {diffChars, createPatch} = require('diff');
const { execSync, spawnSync } = require("child_process");
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

const args = process.argv.slice(1);
const daysAgo = args [2];
console.log(daysAgo);

const runGit = function (command) {
  let commitHash = null;
  const eg = execSync(command);
  return eg.toString();
};

const parseDateForHTML = (days=0) => {
  const d = new Date();
  d.setDate(d.getDate() - days);
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

const OLD_DATE_HTML = parseDateForHTML(daysAgo);

const old_date_git = parseDateForGIT();

const gitOldCommitCommand = `git rev-list -1 --before="${old_date_git}" dev --format=medium`;

const runOldCommit = runGit(gitOldCommitCommand);
const m = runOldCommit.match(/^commit\s+([a-f0-9]{40})/m);
const commitHash = m ? m[1] : null;

const gitCheckout = `git worktree add scripts/temp ${commitHash}`;
const runCheckout = runGit(gitCheckout);

const targetDir = "scripts/temp/packages/unity-react-core/scripts";
const dir = "scripts/temp/packages/unity-react-core"
const srcDir = "packages/unity-react-core/scripts/check-changes.tsx"
fs.copyFileSync(srcDir, targetDir+"/check-changes.tsx")
/**
 *
 * 1. OJAS TODO: We dont actually need to change directory, we can pass in the directory to the spawnSync command as the argument cwd: <directory>
 */

//execSync(`npx tsx check-changes.tsx ${OLD_DATE_HTML}`);
console.log(process.cwd());
const output = spawnSync("npx", ["tsx", "scripts/check-changes.tsx", OLD_DATE_HTML], {
  stdio: "inherit",
  cwd: dir
});

/**
 * * 5. OJAS TODO: We know the name of old components file and the location, so we can
 * read it using fs.readFileSync after creating the OLD_FILE_LOCATION variable
 * Example:
 * const OLD_FILE_LOCATION = path.join(targetDir, `components-${OLD_DATE_HTML}.json`)
 * const oldDateComponentObjectWithHtml = JSON.parse(fs.readFileSync(OLD_FILE_LOCATION, 'utf8))
 */
const OLD_FILE_LOCATION = path.join(targetDir, `components-${OLD_DATE_HTML}.json`);
const oldDateComponentObjectWithHtml = JSON.parse(
  fs.readFileSync(OLD_FILE_LOCATION, 'utf8')
)



/**
 * 6. OJAS TODO: We can run the spawnSync("npx", ["tsx" command again but in the same directory of this file
 * and we can pass in today's date. You can create a date at the current time by just instantiating `new Date()`
 * and then you can get the month day and year same as in parseDateForHTML above
 */
const currentOutput = spawnSync("npx", ["tsx", "packages/unity-react-core/scripts/check-changes.tsx", parseDateForHTML()], {
  stdio: "inherit"
});


/**
 * 7. OJAS TODO: Now that we have the current date components in a json file from step 6,
 * we can read that file and compare that to the old data, `oldDateComponentObjectWithHtml`
 */
const currFilewithHtml = JSON.parse(
  fs.readFileSync(`packages/unity-react-core/scripts/components-${parseDateForHTML()}.json`, 'utf8')
);

for(const[key, value] of Object.entries(currFilewithHtml)){
  try{
    const htmlStr = currFilewithHtml[key].html
    const oldHtmlStr = oldDateComponentObjectWithHtml[key].html
    const differences = diffChars(oldHtmlStr, htmlStr);
    console.log(differences);
  } catch(error){
    console.log(error, key);
  }
}







//execSync(`git worktree remove --force /Users/etloaner/Desktop/ASU/asu-unity-stack/scripts/temp`);

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
