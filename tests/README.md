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
