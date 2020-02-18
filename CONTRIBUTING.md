# Contributing Guide

Contributions are welcome and are greatly appreciated!

Please take a moment to review this document, as well as the web design standards set out by the [ASU Brand Guide](brandguide.asu.edu).

## Using the issue tracker

The [issue tracker](https://github.com/asu/asu-unity-stack/issues) is the preferred channel for [bug reports](#bug-reports), [features requests](#feature-requests) and [submitting pull requests](#pull-requests), but please respect the following restrictions:

* Please **do not** use the issue tracker for personal support requests.  Please contact the team directly on [slack](http://asuwebstandards.slack.com), the ASU Brandguide, or the UTO department for personal support.

* Please **do not** derail issues.  Keep the discussion on topic.  Each issue should only have one issue in it.  If you have any tangential issues, please create a new issue.

* Please **do not** report Twitter Bootstrap issues or pull requests here.  Please issue them on their [repository](https://github.com/twbs/bootstrap/).

## Bug reports

A bug is a _demonstrable problem_ that is caused by the code in the repository.  Good bug reports are extremely helpful to identifying and solving the issue.

Guidelines for bug reports:

0. **Validate and lint your code** &mdash; run the ``` yarn lint ``` command, if available. [validate your HTML](http://html5.validator.nu)
   and [lint your HTML](https://github.com/twbs/bootlint) to ensure your
   problem isn't caused by a simple error in your own code.

1. **Use the GitHub issue search** &mdash; check if the issue has already been
   reported.

2. **Check if the issue has been fixed** &mdash; try to reproduce it using the
   latest `master` or development branch in the repository.

3. **Isolate the problem** &mdash; ideally create a [reduced test
   case](http://css-tricks.com/6263-reduced-test-cases/) and a live example.

A good bug report shouldn't leave others needing to chase you up for more
information. Please try to be as detailed as possible in your report. What is
your environment? What steps will reproduce the issue? What browser(s) and OS
experience the problem? Do other browsers show the bug differently? What
would you expect to be the outcome? All these details will help people to fix
any potential bugs.

Example:

> Short and descriptive example bug report title
>
> A summary of the issue and the browser/OS environment in which it occurs. If
> suitable, include the steps required to reproduce the bug.
>
> 1. This is the first step
> 2. This is the second step
> 3. Further steps, etc.
>
> `<url>` - a link to the reduced test case
>
> Any other information you want to share that is relevant to the issue being
> reported. This might include the lines of code that you have identified as
> causing the bug, and potential solutions (and your opinions on their
> merits).

## Feature requests

Feature requests are welcome. But take a moment to find out whether your idea
fits with the scope and aims of the project. It's up to *you* to make a strong
case to convince the project's developers of the merits of this feature. Please
provide as much detail and context as possible.

Also remember that this code is based off of the web standards provided by ASU's marketing hub.

## Before Developing

This repository is structured using [lerna](https://github.com/lerna/lerna). Each directory under 'packages' is an individual package with its own package.json file and CONTRIBUTING.md guide. Please be sure to read the contrib guide for a specific package before starting development on it.

## Setting up your environment

Do the following steps to get started:

```bash
# clone ASU Unity Stack repo to local machine
git clone https://github.com/asu/asu-unity-stack.git

# step into unity repo
cd asu-unity-stack

# install dependencies
yarn install

# change to desired package directory, then run Storybook
cd packages/<package-name>
yarn storybook
```

## Running Tests

Running the test suite for an individual package.

```bash
cd packages/<package-name>
yarn build
yarn test
```

## Pull requests

Good pull requests—patches, improvements, new features—are a fantastic
help. They should remain focused in scope and avoid containing unrelated
commits.

**Please ask first** before embarking on any significant pull request (e.g.
implementing features, refactoring code, porting to a different language),
otherwise you risk spending a lot of time working on something that the
project's developers might not want to merge into the project.

Please adhere to the coding guidelines used throughout the
project (indentation, accurate comments, etc.) and any other requirements
(such as test coverage).

In order to publish your own changes to a package, do the following:

1. If an issue ticket does not already exist for the code changes in Github, create one
2. Checkout a new branch from the latest 'dev' branch of the repo, referencing the ticket number. For example, a branch for issue #21:

```bash
# from the root of the repo
git checkout -b i21
```

3. Make code changes
4. Increment the version in the changed project's package.json. This project adheres to the same semantic versioning process as [React](https://reactjs.org/docs/faq-versioning.html)
5. Add details about changes to the project's CHANGELOG
6. Commit and push changes to issue branch
7. Submit pull request on Github from your issue branch to 'dev' branch

##

Before submitting a pull request, please check that it meets these guidelines:

1. If the pull request fixes a bug, it should include tests that fail without the changes, and pass
with them.
2. If the pull request adds functionality, the docs should be updated as part of the same PR.
3. Please rebase and resolve all conflicts before submitting.


## Contributing a new package

If you have a package you'd like to contribute, or want to build a new package, start by creating an issue on this repo with details about the package. From there we can discuss the details of the package and any individual needs. Once a package has been approved for inclusion in the repo, there are a couple of helpful resources for package setup and testing:

For a full explanation of basic configuration see example package [config](./examples/example-package/README.md)

### Storybook configuration

Storybook is the standard component explorer which we use for local development. Each package should have a Storybook configuration under a root '.storybook' directory. For more info see the Storybook config in the 'examples/example-package/.storybook' directory, and the example story [here](../examples/example-package/src/components/Example/Example.stories.js).

### Webpack configuration

We are using Webpack to statically bundle React component modules for universal deployment in any application. Typically there are separate development and production Webpack configurations located under a 'webpack' directory at the package root. See the 'examples/example-package/webpack' directory for inspiration.

Note: The PostCSS plugin is used alongside Webpack for some advanced CSS processing, but is not required for all packages.

### Testing configuration

Jest configuration is included in the package.json for most packages. See testing [requirements](./tests/README.md), and also example [test](../examples/example-package/src/components/Example/Example.test.js).
