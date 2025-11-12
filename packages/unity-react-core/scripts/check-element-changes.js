const {diffChars, createPatch} = require('diff');
const { execSync, spawnSync } = require("child_process");
const { fstat } = require("fs");
const fs = require('fs');

const exec = require("child_process").exec;
const path = require("path");

//=====================================================
// Console log helpers
//=====================================================
const FgBlue = "\x1b[34m";
const FgGreen = "\x1b[32m";
const FgRed = "\x1b[31m";
const FgYellow = "\x1b[33m";
const Reset = "\x1b[0m";

const printLine = () => console.log(FgBlue, "-".repeat(84), Reset);
const printTitle = (text = "") => console.log(FgGreen, `${text + " ".repeat(84 - text.length)}`, Reset);
const printError = (text = "") => console.log(FgRed, text, Reset);
const printWarning = (text = "") => console.log(FgYellow, text, Reset);
//=====================================================
// Process files
//=====================================================

const args = process.argv.slice(2);

let daysAgo;

if (args.length === 0) {
  console.log(`
Usage: node check-element-changes.js -d <days-ago>

Options:
  -d, --days    Number of days ago to compare with

Examples:
  node check-element-changes.js -d 7     # Compare with 7 days ago
  node check-element-changes.js -d 14    # Compare with 14 days ago
  node check-element-changes.js --days 30 # Compare with 30 days ago
  `);
  process.exit(1);
}

if (args[0] === '-d' || args[0] === '--days') {
  if (args.length < 2 || isNaN(parseInt(args[1]))) {
    printError('Error: Please provide a valid number of days after -d flag');
    process.exit(1);
  }
  daysAgo = parseInt(args[1]);
} else if (args[0] && !isNaN(parseInt(args[0]))) {
  daysAgo = parseInt(args[0]);
} else {
  printError('Error: Invalid arguments. Use -d <days> format.');
  process.exit(1);
}

printTitle(`Comparing components: current vs ${daysAgo} days ago`);

const runGit = function (command) {
  try {
    const result = execSync(command, { encoding: 'utf8' });
    return result.toString();
  } catch (error) {
    printError(`Git command failed: ${command}`);
    printError(error.message);
    throw error;
  }
};

const parseDateForHTML = (days=0) => {
  const d = new Date();
  d.setDate(d.getDate() - days);
  return d.getMonth() + 1 + "-" + d.getDate() + "-" + d.getFullYear();
};

const parseDateForGIT = (daysAgo) => {
  const d = new Date();
  d.setDate(d.getDate() - daysAgo);
  const date = d.toDateString();
  const arrayDate = date.split(' ');
  const [day, month, dayOfMonth, year] = arrayDate;
  return month + " " + dayOfMonth + " " + year;
};

const OLD_DATE_HTML = parseDateForHTML(daysAgo);
const old_date_git = parseDateForGIT(daysAgo);

printTitle(`Getting commit from ${daysAgo} days ago (${old_date_git})...`);

const gitOldCommitCommand = `git rev-list -1 --before="${old_date_git}" dev --format=medium`;
const runOldCommit = runGit(gitOldCommitCommand);
const m = runOldCommit.match(/^commit\s+([a-f0-9]{40})/m);
const commitHash = m ? m[1] : null;

if (!commitHash) {
  printError(`No commit found for date: ${old_date_git}`);
  process.exit(1);
}

console.log(`✅ Found commit: ${commitHash}`);

printTitle("Setting up temporary worktree...");

// Clean up existing temp directory
if (fs.existsSync("scripts/temp")) {
  try {
    runGit(`git worktree remove scripts/temp --force`);
  } catch (e) {
    // Ignore errors if worktree doesn't exist
  }
}

const gitCheckout = `git worktree add scripts/temp ${commitHash}`;
const runCheckout = runGit(gitCheckout);

const targetDir = "scripts/temp/packages/unity-react-core/scripts";
const dir = "scripts/temp/packages/unity-react-core";
const srcDir = "packages/unity-react-core/scripts/check-changes.tsx";
const htmlDir = "packages/shared/utils/html-utils.js";

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

fs.copyFileSync(srcDir, targetDir + "/check-changes.tsx");
fs.copyFileSync(htmlDir, "scripts/temp/" + htmlDir);

printTitle(`Generating component HTML from ${daysAgo} days ago...`);

const output = spawnSync("npx", ["tsx", "scripts/check-changes.tsx", OLD_DATE_HTML], {
  stdio: "inherit",
  cwd: dir
});

if (output.error) {
  printError(`Error generating old components: ${output.error.message}`);
  process.exit(1);
}

const OLD_FILE_LOCATION = path.join(targetDir, `components-${OLD_DATE_HTML}.json`);

if (!fs.existsSync(OLD_FILE_LOCATION)) {
  printError(`Old components file not found: ${OLD_FILE_LOCATION}`);
  process.exit(1);
}

const oldDateComponentObjectWithHtml = JSON.parse(
  fs.readFileSync(OLD_FILE_LOCATION, 'utf8')
);

printTitle("Generating current component HTML...");

const currentOutput = spawnSync("npx", ["tsx", "packages/unity-react-core/scripts/check-changes.tsx", parseDateForHTML()], {
  stdio: "inherit"
});

if (currentOutput.error) {
  printError(`Error generating current components: ${currentOutput.error.message}`);
  process.exit(1);
}

const currentFilePath = `packages/unity-react-core/scripts/components-${parseDateForHTML()}.json`;

if (!fs.existsSync(currentFilePath)) {
  printError(`Current components file not found: ${currentFilePath}`);
  process.exit(1);
}

const currFilewithHtml = JSON.parse(
  fs.readFileSync(currentFilePath, 'utf8')
);

printLine();
printTitle("COMPONENT COMPARISON RESULTS");
printLine();

const currentComponents = currFilewithHtml.components || currFilewithHtml;
const oldComponents = oldDateComponentObjectWithHtml.components || oldDateComponentObjectWithHtml;

let changedCount = 0;
let unchangedCount = 0;
let errorCount = 0;
const changedComponents = [];

Object.keys(currentComponents).forEach(componentName => {
  const current = currentComponents[componentName];
  const old = oldComponents[componentName];

  try {
    if (!current || !old) {
      printError(`❌ ${componentName}: Missing component data`);
      errorCount++;
      return;
    }

    // Handle both old and new data structures
    const currentHtml = current.html || current;
    const oldHtml = old.html || old;

    if (typeof currentHtml !== 'string' || typeof oldHtml !== 'string') {
      printError(`❌ ${componentName}: Invalid HTML data`);
      errorCount++;
      return;
    }

    const hasChanges = currentHtml !== oldHtml;
    const currentSize = currentHtml.length;
    const oldSize = oldHtml.length;
    const sizeDiff = currentSize - oldSize;

    if (hasChanges) {
      console.log(`🔄 ${componentName}: CHANGED`);
      console.log(`   Size: ${oldSize} → ${currentSize} (${sizeDiff > 0 ? '+' : ''}${sizeDiff} chars)`);
      changedComponents.push(componentName);

      // Show detailed diff for debugging (optional, can be commented out for cleaner output)
      // const differences = diffChars(oldHtml, currentHtml);
      // console.log(`   Detailed differences:`, differences.filter(part => part.added || part.removed));

      changedCount++;
      /**
       * TODO:
       * Add component name to list changedComponents
       */
    } else {
      console.log(`✅ ${componentName}: No changes`);
      unchangedCount++;
    }
  } catch (error) {
    printError(`❌ ${componentName}: Error during comparison - ${error.message}`);
    errorCount++;
  }
});

printLine();
printTitle("SUMMARY");
console.log(`Changed: ${changedCount}`);
console.log(`Unchanged: ${unchangedCount}`);
console.log(`Errors: ${errorCount}`);
console.log(`Total: ${changedCount + unchangedCount + errorCount}`);
printLine();

try {
  execSync(`git worktree remove --force scripts/temp`);
  console.log(`✅ Cleaned up temporary worktree`);
} catch (e) {
  printWarning(`Warning: Could not remove temp directory: ${e.message}`);
}

/**
 * Step 1
 * Ask user input if they want to see the new html for the changed components
 * Step 2
 * If yes, parse the new file (e.g. components-09-25-2023.json) to show the html for only those that have changed
 * Step 3
 * After parsing the json file, use the changedComponnents array to only get the html for the changed components
 *
 */

console.log("Would you like to view the new HTML for the changed components? (y/n)");
process.stdin.resume();
process.stdin.setEncoding("utf8");

process.stdin.once("data", (data) => {
  const userInput = data.trim().toLowerCase();

  if (userInput === "y" || userInput === "yes") {
    printTitle("User chose to view changed components.");

    try {
      const currentFileData = JSON.parse(fs.readFileSync(currentFilePath, "utf8"));
      const currentComponentsData = currentFileData.components || currentFileData;

      printLine();
      printTitle("CHANGED COMPONENT HTML PREVIEWS");
      printLine();

      if (changedComponents.length === 0) {
        printWarning("No changed components were recorded.");
      } else {
        changedComponents.forEach((comp) => {
          const html = currentComponentsData[comp]?.html || currentComponentsData[comp];
          if (html) {
            console.log(`\n ${comp}:\n`);
            console.log(html);
            printLine();
          } else {
            printWarning(`Could not find HTML for component: ${comp}`);
          }
        });
      }
    } catch (err) {
      printError(`Error reading current components file: ${err.message}`);
    }

  } else {
    printWarning("User chose not to view changed components.");

  }

  process.stdin.pause();
});

