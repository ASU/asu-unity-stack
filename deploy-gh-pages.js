var ghpages = require('gh-pages');

// Jenkins file will call the file with branch name
let branch = process?.argv?.[2] !== "dev" || "dev";
const options = {
  // default is the root (dev)
  dest: ".",
  // ensures we delete the root directory except for the branch folder
  remove: ["*", "!branch"]
};

if(branch === "dev"){
  options.dest = `branch/${process.argv[2]}`;
}

ghpages.publish('build', options, function(){
  console.log(`Published gh-pages branch: ${branch}`);
});
