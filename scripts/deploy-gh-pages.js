var ghpages = require('gh-pages');

// Jenkins file will call the file with branch name
let BRANCH = process?.argv?.[2] || null;
// Jenkins file will call the file with PUSH to trigger deploy to gh-pages
let push = process?.argv?.[3] === "PUSH" ? true: false;

const options = {
  // default is the root (dev)
  dest: ".",
  push,
  // ensures we delete the root directory except for the branch folder
  remove: ["*", "!branch"]
};

if(BRANCH !== "dev"){
  options.dest = `branch/${process.argv[2]}`;
}

console.log(options);

if(typeof process?.env?.GH_TOKEN !== "undefined") {
  /**
 * This configuration will avoid logging the GH_TOKEN if there is an error.
 */
  options.repo = "https://" + process.env.GH_TOKEN + "@github.com/ASU/asu-unity-stack.git";
  // options.silent = true;

  console.log("Added GH_TOKEN Option");
}


require('./deploy-check');

ghpages.publish('build', options, function(err){

  if(err) {
    console.log(err);
  }

  if(push){
    console.log(`Published gh-pages branch: ${BRANCH}`);
  }
  else{
    console.log(`
Option to push was false!

Output gh-pages to local directory "./node_modules/.cache/gh-pages".

PUSH argument should only be used from jenkin, with the exception
jenkins is down and the static site needs an immediate fix.
  `);
  }
});