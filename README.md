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

Typically, the easiest and most reliable way to manage Node.js and NPM on your desktop is via [NVM (Node Version Manager)](https://github.com/nvm-sh/nvm). NVM allows you install and switch between multiple versions of node, which may necessary depending on what projects you are helping to develop.

On MacOS or Linux, you should be able to follow the standard install instructions and run the NVM install script on your terminal:
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
```
or
```
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
```
After installing nvm, if you get `nvm: command not found` error, close out your current terminal and reopen a new one.

MacOS may require you install the Xcode Command Line Tools, if you haven't already for other development tasks in the past and you do not wish to install the full 4.3 GB Xcode framework:

[How to Install Command Line Tools in OS X Mavericks & Yosemite (Without Xcode)](http://osxdaily.com/2014/02/12/install-command-line-tools-mac-os-x/)

On Windows, you will need to install [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows). Follow the instruction there for your setup.)

If these methods fail for you, you can always use the traditional install method provided by [Node.js and NPM from nodejs.org](https://nodejs.org/en/download/)
 or to use:
- on OSX use [homebrew](http://brew.sh) `brew install node`
- on Windows use [chocolatey](https://chocolatey.org/) `choco install nodejs`

Once you have node and npm installed (included automatically with node), verify your node install works correctly:

```
node -v
```
and
```
npm -v
```

You should get printouts of the current version of node and npm that are installed.

To install and activate a specific version of Node for a project, such as the current LTS (Long-Term Support) version of node for this project, lts = v10 as of June 2019:

```
nvm install lts
nvm use lts
nvm alias default lts
```

These three commands install, activate, and set the current LTS version of node to v10.x.

Next, install yarn globally

```bash
npm install yarn -g
```
Yarn is an alternative package manager to `npm`. In particular, yarn provides performance and added features for monorepos and other configuration elements in our project.

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

See the developer documentation on storybook at https://storybook.js.org/docs/basics/introduction/

## ❯ Structure
 - packages/[package-name] - NPM package root
 - packages/[package-name]/src - Source code
 - packages/[package-name]/.storybook - Storybook configuration

## ❯ Building, Testing (from the package root at packages/[package-name])

```bash
yarn build # build the project
yarn test # run tests
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

Two build tools have been added to this project to contributors in writing properly formated commit messages: commitizen and commitlint.

`commitlint` now evaluates *all* commits for format compliance **BEFORE** your commit is saved into the repository. All `git commit` commands are reviewed and accepted or rejected based on the message meeting our the Conventional Commit standard. If your commit message is formatted incorreclty, `commitlint` will reject your commit and require you resubmit with the correct syntax.

To assist contributors with writing compliant commit messages, the `commitizen` tool now inserts a new commit UI into the `git commit` CLI command. When you execute `git commit` in the terminal command-line, you will be prompted with questions to help build your commit message.

![GitHub Logo](/doc/assets/commitizen-prompts.png)

## ❯ Contributing:

Read contribution guide here: [CONTRIBUTING.md](./CONTRIBUTING.md)

