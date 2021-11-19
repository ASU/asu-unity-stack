# Testing Documentation
The ASU Unity stack is managed as a Lerna monorepo with multiple individually maintained packages. As such there are 2 levels of testing which need to be addressed by any package residing in this repo.

The test runner currently used for all packages is Jest, and an example Jest config can be found under the examples/example-package directory.

## ❯ Package-level testing requirements

During the build/test CI process, packages are first tested individually. It does this by Lerna running the 'yarn test' command at the root of every package.

Included with each package should be a Jest testing suite which includes unit and/or functional testing for each delivered component. The requirements for testing are below.

### Unit testing

Jest component snapshot testing is an example of unit testing (https://jestjs.io/docs/en/snapshot-testing). At a mininum every visual component should have at least 1 snapshot test. For an example React snapshot test see the [example](../examples/example-package/src/components/Example/Example.test.js)

Unit testing for utility functions (non-visual) is recommended.

### Functional testing

This type of testing is required for components which facilitate user interaction. For example, a dropdown list component might have a test which checks that the list actually drops down when clicked. For testing interaction with React components, see this documentation: https://github.com/testing-library/react-testing-library

At a minimum every interactive component should have 1 functional test.

## ❯ End to End Testing requirements

End to end testing tests our components in an integrated web environment. This gives us confidence that our components work together gracefully and lets us test the packaged production modules on a static HTML page. The process is detailed below.

After the individual tests are run:

1. Lerna runs 'yarn build' at the root of each package.
2. The process spins up a local testing server, which is configured to serve a page with all of the built components included. The server config and templates reside in the root 'server' directory.
3. Jest runs the test suite located under the root 'tests' directory. By using Puppeteer to manipulate the page, it runs a series of visual and behavioral tests (detailed more below).

Each package needs to be wired into the global testing setup when it becomes part of the monorepo, and it should be done after setting up the individual package testing. The Unity team will communicate and coordinate these steps as part of the package intake process. See contrib documentation for details on [contributing a package](../CONTRIBUTING.md).

### End to End Testing details

The end to end tests are currently configured in the following order:

1. Snapshot the entire page - visual regression test snapshot is saved under 'tests/__image_snapshots__' directory and compared to previous render
2. Run behavioral test section for each package - each section contains tests where Puppeteer interacts with components from a package
3. Automated accessibility testing of entire page - uses the axe-core library to test the page under the WCAG AA guidelines

## Visual Regression Testing
### Percy setup

In order for a package to be included in visual regression testing, the package must have `@percy-io/percy-storybook` and `@percy/cli` dependencies installed.

The package must also have a subdirectory in the `.storybook` directory named `percy`, that has a `main.js`, instructing Percy how to locate the stories that will be used for testing, and the necessary files(dependending on the package) for storybook to build the stories correctly. These files will likely be a near exact copy of the `.storybook/` config folder of that package. The default setup is to have Percy look for files named `*.percy.js`. These files will be placed inside the `test` folder on that package.

The reason for doing the above is that Percy, by default, creates a test for Safari, Firefox and Chrome(this is configurable). It also creates a test for each width and height defined in the `.percy.yml` file. Take this number of tests multiplied by the number of stories to be tested and the result is a large number that will quickly eat up the number of tests we are allowed, even on higher tier plans. The idea is that by decoupling the Percy tests from the regular storybook stories, we can minimize the number of tests that need created. This will allow us to create “kitchen sink” tests to further reduce the quantity of tests.

The process of running visual regression testing with Percy is as follows:

1. Jenkins CI/CD build/process is triggered.
2. Jenkins env will have a PERCY_TOKEN env variable (Located in Percy account)
3. Jenkins “Test” step (specified in Jenkinsfile) will run `yarn percy`, which, at the root of the project, corresponds to `lerna run percy`. Each package to be tested will also need a corresponding `percy` command be scripted in the respective package.json file.
4. The `percy` script in `package.json` should resemble `"percy": "build-storybook -c ./.storybook/percy -o ./percy-storybook && percy storybook ./percy-storybook"`
    1. In this command, we are building a storybook static site from the components which have a named `percy.js` storybook file defined in their directory. The build output is being set as percy-storybook (so as not to override the storybook that is generated from regular builds named storybook-static)
    2. The second part of the script, `percy storybook`, takes the built storybook output and uploads it to the percy account.
5. Once storybook upload to Percy is complete, user can log in to storybook and view visual differences between components, request changes to components, leave comments on components, etc.
