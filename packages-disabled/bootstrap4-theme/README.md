<p align="center">
  <img src="./asu_university_horiz_rgb_maroongold_150_4.png" alt="Arizona State University" width="400" />
</p>

<h1 align="center">ASU Web Standards UI Kit and Style Guide using Bootstrap 4.</h1>

<p align="center">
  A Bootstrap 4-based web ui kit for website developers building new websites from scratch or for inclusion as a standardized theming foundation for ASU application frameworks, such as Drupal, WordPress, or other application frameworks. A comprehensive development and testing framework has been implemented using best-in-class tools like StorybookJS and Jest.
</p>

<br />

![divider](./divider.png)

### Features

- **Clean, easy to use styles and scripts** thanks to the helper utilities and variables provided by the Bootstrap 4 team..
- **Font Awesome 5** bundled into the theme for immediate use in your website.
- **Google Webfonts** bundled into the theme for immediate use in your website.
- **StorybookJS** provides a live, development enviroment to view styling changes immediately as the code is edited.
- **Cross-browser validation** of all UI kit components provided by the fantastic Happo.io visual testing service.
- **Quality-of-life improvement scripts** bundled into the theme for immediate use in all web site environments.

![divider](./divider.png)

## ❯ Table of Contents

- [❯ Table of Contents](#-table-of-contents)
- [❯ Development Overview](#-development-overview)
  - [Adding a new element to the package](#adding-a-new-element-to-the-package)
- [❯ Import into Application](#-import-into-application)
- [❯ Setup Local Development Environment](#-setup-local-development-environment)
  - [Install Node and Yarn](#install-node-and-yarn)
  - [Install VS Code](#install-vs-code)
- [❯ Development Procedures](#-development-procedures)
  - [Clone and initialize this project](#clone-and-initialize-this-project)
  - [Launch Storybook Dev Server](#launch-storybook-dev-server)
- [❯ Prepare Releases](#-prepare-releases)
  - [Linting and compiling the source code](#linting-and-compiling-the-source-code)
- [❯ Project Structure](#-project-structure)
- [❯ Contribute to Project](#-contribute-to-project)
- [❯ Further Documentation](#-further-documentation)
- [❯ License](#-license)

![divider](./divider.png)

## ❯ Development Overview

This package rethemes the vanilla Bootstrap 4 UI Kit to meet ASU Web Standards Guidelines. The Bootstrap team has provided an [excellent guide](https://getbootstrap.com/docs/4.3/getting-started/theming/) on their suggested practices for this retheming process. The starting code committed in the `/src/scss/` folder is based on suggestions from the Bootstrap theming guide and the lessons from the [GIOS Bootstrap 3 theme](https://github.com/gios-asu/ASU-Web-Standards-Bootstrap).

To make the developement process easier for developers, we make use of StorybookJS to provide a better UI for reviewing and interacting with the design elements provided by this package. With StorybookJS we create different pages in isolation for each of the components organized for developer needs, adding controls, actions, etc.

Once you have followed the instructions for setting up a [local development environment](#-setup-local-development-environment), you will need to clone this project into a sutiable location on your local computer and initialize it for development tasks.

### Adding a new element to the package

We make use of atomic design classifications and custom tooling for elements within this system. Please read the ['Adding elements' Guidelines](./ADDING_ELEMENTS.md) when adding a new element to the package.

![divider](./divider.png)

## ❯ Import into Application

To use an element in your application you should copy the HTML code from Storybook to the HTML template where you want to include the element. Make sure you have included our Bootstrap4 Theme package assets and the Font Awesome library so your component will render properly.

![divider](./divider.png)

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

### Install VS Code

Browse to the [VS Code homepage](https://code.visualstudio.com/) and click on the Download button. Once VS Code is downloaded, run the install package to install the software on uyour computer. Later, after you have cloned this project into a development folder on your computer, launch VS Code and then open this project folder:

1. Click on the File menu
2. Click "Add Folder to Workspace"
3. Begin exploring!

A Workspace in VS Code is your project workspace and special settings you choose to configure for the project (vs global settings that affect the entire IDE and any projects you ever work on.) You can save your project as a Workspace [File->Save Workspace As], which makes it easier to track your project and reload it and your settings in the future.


![divider](./divider.png)

## ❯ Development Procedures

### Clone and initialize this project

Once you have verified that node and yarn installed correctly, it is time to download and initialize this project and all its software dependencies.

First, use your favorite git client ([Gitkraken](https://www.gitkraken.com/) is a popular and easy-to-use option), and clone this repo to your preferred folder on your computer; e.g. on MacOS/Linux:

```
cd ~
mkdir projects
cd projects

git clone https://github.com/gios-asu/asu-web-standards-bootstrap4
cd asu-web-standards-bootstrap4
```

Now that you are located in the root of the project, initialize the project and install all of its build tools:

```
yarn install
```

Wait until this install process completes.

### Launch Storybook Dev Server

In your terminal, still located at the root of the project, type:

```
yarn storybook
```

Storybook will launch a live development server at http://localhost:9009 and compile all the SCSS source files defined in src/scss/bootstrap-asu.scss. Using these source files, and the stories defined in '/stories/' (all files with filenames ending `.stories.js`), Storybook will dynamically generate a development preview of styled UI elements in our theme. Any time you make changes to existing source files, or save new `.stories.js` files, Storybook will re-read your files and immediately refresh the Storybook dev website.

![divider](./divider.png)

## ❯ Prepare Releases

### Linting and compiling the source code

[GulpJS](https://gulpjs.com/) is a toolkit for automating tasks, and is used in this project for performing common tasks to prepare the project for production releases. Currently, Gulp is configured to perform the following tasks:

* Compile SASS/SCSS source code into CSS
* Lint (validate code for coding standards) SASS source code
* Lint Javascript code
* Optimize any images included in the framework
* Compress the compiled CSS into .min.css files
* Concatenate and compress the utility javascripts files
* Perform housecleaning tasks on output folders

Two top-level Gulp tasks have been configured to execute all necessaary sub-tasks to validate and compile the production output of this theme:

```
yarn gulp validate  # Lint and validate the source styles and scripts
yarn gulp compile   # Compile the styles, scripts, and update all assets into the dist/ folder
```

Running these these two tasks in order will generate an up-to-date version of the ASU Web Standards production build, all contained within the `/dist/` project folder. The contents of the `/dist/` is sufficient to be copied into any website or application to be used in production.

Gulp is also configured with a series of sub-tasks, which can be executed on their own for the purposes of debugging and development:

```
yarn gulp sass          # Compiles the SASS/SCSS into CSS
yarn gulp eslint        # Lint the scripts
yarn gulp sasslint      # Lint the SASS/SCSS source code
yarn gulp imagemin      # Optimize images and copy into `/dist/img/`
yarn gulp minifycss     # Minify the compiled CSS
yarn gulp scripts       # Concatenate and minify the scripts into `/dist/js/`
yarn gulp copy-assets   # Copy font-awesome fonts into `/dist/fonts/`
yarn gulp clean-dist    # Delete the contents of `/dist/`
yarn gulp styles        # Execute the 'sass' and 'minifycss' sub-tasks
yarn gulp               # Execute the default Gulp task (validate)
```

![divider](./divider.png)

## ❯ Project Structure

| Name                              | Description |
| --------------------------------- | ----------- |
| **.vscode/**                      | VSCode tasks, launch configuration and some other settings |
| **dist/**                         | Compiled source files will be placed here |
| **src/**                          | Source files |
| **stories/**                      | Storybook stories and tests for UI components |
| **test**                          | Separate tests folder |
| **test/e2e/** *.test.ts           | End-2-End tests (Not Yet Implemented) |
| **test/integration/** *.test.ts   | Integration tests (Not Yet Implemented) |

![divider](./divider.png)

## ❯ Contribute to Project

View our [Contributing Guidelines](./CONTRIBUTING.md)

## ❯ Further Documentation

| Name & Link                       | Description                       |
| --------------------------------- | --------------------------------- |
| [Bootstrap 4](https://getbootstrap.com/docs/4.3/getting-started/introduction/) | Build responsive, mobile-first projects on the web with the world’s most popular front-end component library. Bootstrap is an open source toolkit for developing with HTML, CSS, and JS. Quickly prototype your ideas or build your entire app with our Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful plugins built on jQuery. |
| [Font Awesome 5](https://fontawesome.com/) | Get vector icons and social logos on your website with Font Awesome, the web's most popular icon set and toolkit. |
| [StorybookJS](https://storybook.js.org/) | Storybook is an open source tool for developing UI components in isolation for React, Vue, and Angular. It makes building stunning UIs organized and efficient. |
| [Jest](https://jestjs.io/) | Jest is a delightful JavaScript Testing Framework with a focus on simplicity. |

![divider](./divider.png)

## ❯ License
[MIT](/LICENSE)

