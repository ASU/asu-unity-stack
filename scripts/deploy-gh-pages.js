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

if(typeof process?.env?.GH_TOKEN !== "undefined") {
  // gh-pages needs Jenkins user information
  options.user = {
    name: "asu-jenkins-devops",
    email: "jenkins_app@asu.edu"
  };

  console.log(`options object, before adding GH_TOKEN`, options, `\n`);

  // This configuration will avoid logging the GH_TOKEN if there is an error.
  options.repo = "https://" + process.env.GH_TOKEN + "@github.com/ASU/asu-unity-stack.git";
  options.silent = true;
  console.log("Added GH_TOKEN Option");
} else {
  console.log(`options object`, options, `\n`);
}

ghpages.publish('build', options, function(err){
  if(err) {
    // Error
    console.log(err);
  } else if(push) {
    // Success gh-pages deployed
    console.log(`Published gh-pages branch: ${BRANCH}`);
  } else {
    // Success Local build
    console.log(`\nOption to push was false!\n\n` +
      `Output gh-pages to local directory "./node_modules/.cache/gh-pages".\n\n` +
      `PUSH argument should only be used from jenkin, with the exception\n\n` +
      `Jenkins is down and the static site needs an immediate fix.`);
  }
});
