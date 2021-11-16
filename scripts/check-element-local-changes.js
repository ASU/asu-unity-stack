const fs = require("fs");
const path = require("path");

//=====================================================
// console log helpers
//=====================================================
const RESET_COLOR = "\x1b[0m";
const FgBlue = "\x1b[34m";
const FgYellow = "\x1b[33m";
const FgGreen = "\x1b[32m";

const printLine = () => console.log(FgBlue, "-".repeat(84));

const printTitle = (text = "") => {
  printLine();
  console.log(FgGreen, `${text + " ".repeat(84 - text.length)}`);
  printLine();
};

const printContent = (text = "") =>
  console.log(FgYellow, `\tLast Modified: ${text}`);

//=====================================================
// Process files
//=====================================================
/**
 * @param {string} dir
 * @returns {array}
 */
function getFiles(dir) {
  const dirents = fs.readdirSync(dir, { withFileTypes: true });
  const files = dirents.map(dirent => {
    const res = path.resolve(dir, dirent.name);
    return dirent.isDirectory() ? getFiles(res) : res;
  });
  return Array.prototype.concat(...files);
}

const BASE_URL = "./packages/bootstrap4-theme/stories";

const fileTemplates = getFiles(BASE_URL).filter(elm =>
  elm.match(/.*\.(templates?)/gi)
);

const args = process.argv.slice(2);
const daysAgo = args[1];
console.log(daysAgo);
const parseDate = (d = new Date()) =>
  d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();

/**
 * @param {date} lastChangeDate
 * @param {number} daysAgo
 * @return {boolean}
 */
const isDateInDays = (lastChangeDate, daysAgo) => {
  const refDate = new Date();
  refDate.setDate(refDate.getDate() - daysAgo);
  const daysAgoDate = new Date(parseDate(refDate));
  const fileDate = new Date(parseDate(lastChangeDate));
  return fileDate >= daysAgoDate;
};

fileTemplates.forEach(filePath => {
  const stats = fs.statSync(filePath);
  const lastChangeDate = stats.mtime;
  const fileName = path.parse(filePath).name;
  let canPrint = true;

  if (daysAgo) {
    canPrint = isDateInDays(lastChangeDate, daysAgo);
  }

  if (canPrint) {
    printTitle(fileName.replace(".templates", "").toUpperCase());
    printContent(lastChangeDate.toUTCString());
  }
});
//=====================================================
