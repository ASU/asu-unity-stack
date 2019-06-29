<p align="center">
  <img src="./asu_university_horiz_rgb_maroongold_150_4.png" alt="Arizona State University" width="400" />
</p>

<h1 align="center">ASU Web Standards UI Kit and Style Guide using Bootstrap 4, StorybookJS, and GatsbyJS.</h1>

<p align="center">
  A Bootstrap 4-based web ui kit for website developers building new websites from scratch or for inlcusion as a standardized theming foundation for ASU application frameworks, such as Drupal, WordPress, or other application frameworks. A comprehensive development and testing framework has been implemented using best-in-class tools like StorybookJS, GatsbyJs, Jest, and Enzyme.
</p>

<br />

![divider](./divider.png)

### Features

- **Clean, easy to use styles and scripts** thanks to the helper utilities and variables provided by the Bootstrap 4 team..
- **Font Awesome 5** bundled into the theme for immediate use in your website.
- **Google Webfonts** bundled into the theme for immediate use in your website.
- **StorybookJS** provides a live, development enviroment to view styling changes immediately as the code is edited.
- **GatsbyJS** generates a stylish Style Guide for all UI kit features and instructions on how to use this library.
- **Cross-browser validation** of all UI kit components provided by the fantastic Happo.io visual testing service.
- **Quality-of-life improvmeent scripts** bundled into the theme for immediate use in all web site environments.

![divider](./divider.png)

## ❯ Table of Contents

- [❯ Table of Contents](#%E2%9D%AF-Table-of-Contents)
- [❯ Load into website](#%E2%9D%AF-Load-into-website)
- [❯ Import into application or theme](#%E2%9D%AF-Import-into-application-or-theme)
  - [TODO](#TODO)
- [❯ Features of this UI kit](#%E2%9D%AF-Features-of-this-UI-kit)
  - [TODO](#TODO-1)
- [❯ Development Overview](#%E2%9D%AF-Development-Overview)
  - [TODO](#TODO-2)
- [❯ Local Development Setup](#%E2%9D%AF-Local-Development-Setup)
- [❯ Docker Development Setup](#%E2%9D%AF-Docker-Development-Setup)
  - [Install Docker](#Install-Docker)
  - [Build Docker image](#Build-Docker-image)
  - [Run Docker image in container and map port](#Run-Docker-image-in-container-and-map-port)
    - [Run image in detached mode](#Run-image-in-detached-mode)
    - [Run image in foreground mode](#Run-image-in-foreground-mode)
  - [Stop Docker container](#Stop-Docker-container)
    - [Detached mode](#Detached-mode)
    - [Foreground mode](#Foreground-mode)
  - [Docker environment variables](#Docker-environment-variables)
    - [project .env file](#project-env-file)
    - [run options](#run-options)
    - [environment file](#environment-file)
- [❯ Project Structure](#%E2%9D%AF-Project-Structure)
- [❯ Contribute to project](#%E2%9D%AF-Contribute-to-project)
  - [TODO](#TODO-3)
- [❯ Further Documentation](#%E2%9D%AF-Further-Documentation)
- [❯ Related Projects](#%E2%9D%AF-Related-Projects)
  - [TODO: List related projects, such as Unity, WebSpark, WordSpark, etc.](#TODO-List-related-projects-such-as-Unity-WebSpark-WordSpark-etc)
- [❯ License](#%E2%9D%AF-License)

![divider](./divider.png)

## ❯ Load into website


## ❯ Import into application or theme

### TODO

## ❯ Features of this UI kit

### TODO

## ❯ Development Overview

### TODO

## ❯ Local Development Setup

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

![divider](./divider.png)

## ❯ Docker Development Setup

### Install Docker

Before you start, make sure you have a recent version of [Docker](https://docs.docker.com/engine/installation/) installed

### Build Docker image

```shell
docker build -t <your-image-name> .
```

### Run Docker image in container and map port

The port which runs your application inside Docker container is either configured as `PORT` property in your `.env` configuration file or passed to Docker container via environment variable `PORT`. Default port is `3000`.

#### Run image in detached mode

```shell
docker run -d -p <port-on-host>:<port-inside-docker-container> <your-image-name>
```

#### Run image in foreground mode

```shell
docker run -i -t -p <port-on-host>:<port-inside-docker-container> <your-image-name>
```

### Stop Docker container

#### Detached mode

```shell
docker stop <container-id>
```

You can get a list of all running Docker container and its ids by following command

```shell
docker images
```

#### Foreground mode

Go to console and press <CTRL> + C at any time.

### Docker environment variables

There are several options to configure your app inside a Docker container

#### project .env file

You can use `.env` file in project root folder which will be copied inside Docker image. If you want to change a property inside `.env` you have to rebuild your Docker image.

#### run options

You can also change app configuration by passing environment variables via `docker run` option `-e` or `--env`.

```shell
docker run --env DB_HOST=localhost -e DB_PORT=3306
```

#### environment file

Last but not least you can pass a config file to `docker run`.

```shell
docker run --env-file ./env.list
```

`env.list` example:

```
# this is a comment
DB_TYPE=mysql
DB_HOST=localhost
DB_PORT=3306
```

![divider](./divider.png)


## ❯ Project Structure

| Name                              | Description |
| --------------------------------- | ----------- |
| **.vscode/**                      | VSCode tasks, launch configuration and some other settings |
| **dist/**                         | Compiled source files will be placed here |
| **src/**                          | Source files |
| **test**                          | Tests |
| **test/e2e/** *.test.ts           | End-2-End tests (like e2e) |
| **test/integration/** *.test.ts   | Integration tests |
| **test/unit/** *.test.ts          | Unit tests |


![divider](./divider.png)

## ❯ Contribute to project

### TODO

![divider](./divider.png)

## ❯ Further Documentation

| Name & Link                       | Description                       |
| --------------------------------- | --------------------------------- |
| [Bootstrap 4](https://getbootstrap.com/docs/4.3/getting-started/introduction/) | Build responsive, mobile-first projects on the web with the world’s most popular front-end component library. Bootstrap is an open source toolkit for developing with HTML, CSS, and JS. Quickly prototype your ideas or build your entire app with our Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful plugins built on jQuery. |
| [Font Awesome 5](https://fontawesome.com/) | Get vector icons and social logos on your website with Font Awesome, the web's most popular icon set and toolkit. |
| [StorybookJS](https://storybook.js.org/) | Storybook is an open source tool for developing UI components in isolation for React, Vue, and Angular. It makes building stunning UIs organized and efficient. |
| [Jest](https://jestjs.io/) | Jest is a delightful JavaScript Testing Framework with a focus on simplicity. |
| [Happo.io](https://happo.io/) | Cross-platform, cross-browser screenshot testing for modern user interfaces. |

![divider](./divider.png)

## ❯ Related Projects

### TODO: List related projects, such as Unity, WebSpark, WordSpark, etc.

![divider](./divider.png)

## ❯ License

[MIT](/LICENSE)
