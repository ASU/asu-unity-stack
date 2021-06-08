# ASU Unity Stack
Arizona State University Unity StaCK(Standards Compliance Kit). This project is currently under development.

Version DEV-1

## ❯ Packages in this repository

This repository contains multiple packages which are managed and published using [LernaJS](https://lerna.js.org/). For more information about each individual package, see the README located at the package root.

1. [bootstrap4-theme](./packages/bootstrap4-theme/README.md) - ASU-customized Bootstrap 4 CSS library. This library serves as a structural base for most of the styling across our packages.
2. [components-library](./packages/components-library/README.md) - Preact component library. Contains ASU-branded global header.
3. [component-forms](./packages/component-forms/README.md) - Preact form components.
4. [design-tokens](./packages/design-tokens/README.md) - ASU styled design token values used across all packages. Built with style-dictionary library.
5. [maps](./packages/maps/README.md) - React map components. TODO: convert this package to Preact

## ❯ Dependencies

In order to build the project, the dev environment needs to have the following programs installed:
- Node.js
- NPM
- Yarn

## ❯ Setup Local Development Environment

### Install Node and Yarn

You need to set up your development environment before you can do anything.

**Note:** this project is a Yarn Workspaces monorepo. This means only the `yarn` utility is to be used to interact with this codebase. `npm` should never be used to install or update packages or to execute project scripts.

The recommended method for setting up your local development environment is to use [Volta - Javascript Tool Manager](https://volta.sh/). Volta is designed to allow MacOS, Liux, and Windows users to easily install and use the correct version of Node, NPM, and Yarn for their projects. In addition to easily installing different versions of Node on your computer and switching between them when needed, this project has been configured to notify Volta what version of Node and Yarn is required to work on this project. This ensure all devs are using the same version of these tools, and preventing some subtle errors and development issues from occurring.

Adhering to the standard Volta installation instructions would introduce a weakpoint in the Unity development toolchain, so rather than recommending you pipe to your system's bash command the result of cURLing a web-based script that could change at any time, we have captured a copy of  the installer script, vetted it, and included it here, in the getvolta/ folder.

For MacOS, execute the following commands in your terminal to use our vetted copy of the installer. From the root of your checkout:

```
bash ./getvolta/getvolta.sh
```

When deemed necessary, we'll review newer versions of the installer from https://get.volta.sh/ and update our copy of getvolta.sh.

For reference, the original Volta install instructions and references to the script can be found at [Getting Started](https://docs.volta.sh/guide/getting-started).

You must then close and restart all open terminal sessions so the new Volta paths can take effect.

#### Installing Node engines
When you install a tool to your toolchain, you always choose a default version of that tool, which Volta will use unless you’re working within a project directory that has configured Volta to use a different version.

For example, you can select your default version of node by installing a particular version:

```
volta install node@14.15.5
```

You don’t need to specify a precise version, in which case Volta will choose a suitable version to match your request:
```
volta install node@14
```

You can also specify latest—or even leave off the version entirely, and Volta will choose the latest LTS release:
```
volta install node
```

#### Installing Yarn

Similarly, you can install versions of the npm and Yarn package managers with volta:
```
volta install yarn
```

and for other projects that use npm:
```
volta install npm
```

## ❯ Quickstart Guide

**Note:** this project is a Yarn Workspaces monorepo. This means only the `yarn` utility is to be used to interact with this codebase. `npm` should never be used to install or update packages or to execute project scripts.

## ❯ How to use the private package registry:

The ASU Unity Design System packages have been published to a private package service that requires user authentication. Before you can install or update these packages in this project (inlcuding running `yarn install` for the first time after the project is cloned to your local machine), you must create a user account on the ASU private Verdaccio package server and sign-in.

1. Visit this URL and follow step #1 to add yourself as a user: [http://registry.web.asu.edu/](http://registry.web.asu.edu/) Don't try to do step #2. Only certain users have access to publish packages.

2. Configure NPM to use our private registry. The easiest way is to add the following line to the .npmrc file in your home directory (e.g. `/home/{username}/.npmrc`):

```@asu-design-system:registry=https://registry.web.asu.edu/```

This config tells NPM that all packages with the ‘@asu-design-system’ should be grabbed from our private registry. If it says you are not authorized, login using:

```npm login --registry https://registry.web.asu.edu/```

3. Test installing packages using yarn or npm inside of another NPM project:

```yarn add @asu-design-system/design-tokens```

Remember to add ‘@dev’ if you wish to install from ‘dev’ channel.

#### Local development
The easiest way to get started is to spin up storybook as a dev environment:

```bash
git clone https://github.com/ASU/asu-unity-stack.git # clone the package
cd asu-unity-stack # cd into git root
yarn install # do this at git root
cd packages/<package-name> # step into package root
yarn storybook # run storybook
```
If you get errors during `yarn install` regarding failures to install packages from the registry, please ensure that the line `@asu-design-system:registry=https://registry.web.asu.edu` is in your `~/.npmrc` file. This will ensure that all @asu-design-system packages are sourced from the registry.

See the developer documentation on storybook at https://storybook.js.org/docs/basics/introduction/

## ❯ Structure
 - packages/[package-name] - NPM package root
 - packages/[package-name]/src - Source code
 - packages/[package-name]/.storybook - Storybook configuration

## ❯ Building, Testing (from the package root at packages/[package-name])

```bash
yarn build # build the project
yarn test  # run tests
```

It's also possible to build a package from the git project root with a Yarn workspace command like:

```yarn workspace @asu/asu-brand build```


## ❯ Running end-to-end testing (from the Git project root)

```bash
yarn build # build the project
yarn start & yarn test:e2e # start the testing server and run e2e tests
yarn stop # stop the testing server
```

## ❯ Supplemental links

 - Storybook (https://storybook.js.org/docs/basics/introduction/)
 - LernaJS (https://lerna.js.org/)
 - Yarn Workspaces (https://classic.yarnpkg.com/en/docs/workspaces/)
 - Jest (https://jestjs.io/docs/en/getting-started)
 - Puppeteer (https://pptr.dev/)

## ❯ Build process:

Whenever code is merged to the 'dev' branch, a build is kicked off by Jenkins which builds, tests, and then publishes packages to the 'dev' channel of our private npm registry.

After publishing, a QA environment is deployed to AWS ECS with the latest built code, including storybook builds, and a 'kitchen sink' page with a selection of components. It can be accessed at:

```https://unity.web.asu.edu/```

## ❯ Git commit guidelines:
This repo uses semantic-release to automatically release new packages upon merging to the 'dev' or 'master' branches.

In order to trigger a release, commit and Pull Request messages must be structured properly in order for semantic-release to accurately update packages versions, generate changelogs and publish packages.

The ASU Unity project follows the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.4/) specification. It provides an easy set of rules for creating an explicit commit history; which makes it easier to write automated tools on top of. This convention dovetails with semantic versioning (SemVer), by describing the features, fixes, and breaking changes made in commit messages.

The commit message should be structured as follows:

```
<type>[optional scope]: <description>

[optional body]

[optional footer]
```

### Examples

#### Commit message with description and breaking change (Major version release)
There is no scope specified, which means this change impacts the entire monorepo.

```
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

#### Commit message with scope
This change was made within the 'lang' package. This is a minor version release.
```
feat(lang): add polish language
```

#### Commit message for a fix using an (optional) issue number.
```
fix(components-library): correct minor typos in code

see the issue for details on the typos fixed

closes issue #12
```

More information can be found [here](https://semantic-release.gitbook.io/semantic-release/) under 'Commit Message Format' section

### Project Update!

Two build tools have been added to this project to assist contributors to write properly formatted commit messages: commitizen and commitlint.

`commitlint` now evaluates *all* commits for format compliance **BEFORE** your commit is saved into the repository. All `git commit` commands are reviewed and accepted or rejected based on the message meeting our the Conventional Commit standard. If your commit message is formatted incorrectly, `commitlint` will reject your commit and require you to resubmit with the correct syntax.

To assist contributors with writing compliant commit messages, the `commitizen` tool now inserts a new commit UI into the `git commit` CLI command. When you execute `git commit` in the terminal command-line, you will be prompted with questions to help build your commit message.

![GitHub Logo](/doc/assets/commitizen-prompts.png)

## ❯ Contributing:

Read contribution guide here: [CONTRIBUTING.md](./CONTRIBUTING.md)

# Github Actions Deployment Process

A Github Action workflow is triggered by pushing to the `dev` branch. A push includes merging a pull request or pushing directly to the branch. The file containing the steps executed during the workflow is located at the project root, `.github/workflows/`. Currently, the workflow consists of a single job with several steps. Alternatively, the same workflow could be logically split up into several jobs (ex. Build/test/deploy). Both options have pros and cons. The pros to having the workflow consist of a single job include the fact that a single job executes steps on the same runner. If the build step and test step were different jobs, you would either need to build again in the test job, or save the build output as an artifact in the first job and retrieve it in the second. Depending on number of dependencies, etc, this could drastically increase build times. Reducing the workflow to a single job also saves on account minutes. See [here](https://docs.github.com/en/billing/managing-billing-for-github-actions/about-billing-for-github-actions) for more information about github account minutes and billing. Some considerations for whether to use multiple jobs include: breaking the workflow up logically into jobs, which allows more granular errors if the workflow breaks, and ability for a job to depend on completion of a previous job, ex. deploy job relying on test step to pass.

The bulk of the workflow steps should be self explanatory. The most intensive of the work happens in the "Install and build" step. First, `yarn install` is ran to install dependencies in all packages. Secondly, `yarn build` is ran, which corresponds to the script `lerna run build`. This will run the build script in each package, which varies depending on the package. The bootstrap4-theme package utilizes gulp, while other packages build utilizing webpack, for example.

The built output location for each package is important. In most packages, the built output is specified as `{package-name}/dist`. It may vary however. The components-library package outputs to `{package-name}/public`, for example. If the storybook build needs the static files generated by the build output, that package must have a `"build-storybook"` script in the package's package.json file that passes the static build directory as a command line argument. For example, the bootstrap4-theme package build output directory is `dist`. The monorepo index.html file generated and published to Github pages relies on the css and images found in bootstrap4-theme's `dist` directory, so the bootstrap4-theme package must have a "build-storybook" script that specifies the location of these static files. The resulting "build-storybook" script for bootstrap4-theme looks like this: `"build-storybook": "build-storybook -s ./dist"`.

Once each package has ran it's individual build process, the github action workflow runs the `yarn deploy-storybook` command. The deploy-storybook command looks as follows:

`storybook-to-ghpages --out=build --packages packages --monorepo-index-generator server/storybook-index-generator.js --source-branch=dev --dry-run`

For more information on the arguments used, look [here](https://www.npmjs.com/package/@storybook/storybook-deployer)

*** As a side note, one of the quirks of the storybook-deployer package where the `storybook-to-ghpages` command comes is that, when indicating that the repo is a monorepo, each package's storybook build is first output inside it's respective package, before being moved to the root of the project and combined with the other package's build outputs (and the index.html, linking to each package's storybook). While setting this up, it is being noted that the build directory itself is not being fully removed as part of cleanup. [This](https://github.com/storybookjs/storybook-deployer/blob/b850547021735c41e3d640fc05de3a73677d37c6/src/build.js#L47) is where the storybook-deployer package attempts to remove the directory. The project's .gitignore file already ignores directories named "build", so this should not be an issue, but in case anyone runs across this, this is why you may be seeing empty build directories inside the packages locally.

Each package's storybook is then built, combined, and moved to the root of the project.

### TODO
Dockerfile, Jenkinsfile, and contents of server directory (except storybook-index-generator.js) will become unnecessary and can be removed.

### See more [here](https://docs.github.com/en/actions/guides/publishing-nodejs-packages)


