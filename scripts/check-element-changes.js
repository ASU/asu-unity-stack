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

const runGit = function (command, cb) {
  var child = exec(command, function (err, stdout, stderr) {
    if (err != null) {
      return cb(new Error(err), null);
    } else if (typeof stderr != "string") {
      return cb(new Error(stderr), null);
    } else {
      return cb(stdout);
    }
  });
};

const parseDateForGIT = () => {
  const d = new Date();
  d.setDate(d.getDate() - daysAgo);
  return d.getMonth() + 1 + "/" + d.getDate() + "/" + d.getFullYear();
};

const GIT_COMMAND = `git whatchanged --since '${parseDateForGIT()}' --oneline --name-only --pretty=format: | sort | uniq`;

console.log(`Run GIT command '${GIT_COMMAND}'`);

runGit(GIT_COMMAND, (res = "") => {
  const fileTemplates = res
    .split(/\r\n|\r|\n/)
    .filter(elm => elm.match(/.*\.(templates?)/gi));

  printLine();

  fileTemplates.forEach(filePath => {
    const fileName = path.parse(filePath).name;
    printTitle(fileName);
    printLine();
  });
});
//=====================================================
