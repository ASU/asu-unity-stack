# Contributing Guide

These are the guidelines for contributing to the asu-brand package, which is managed via the asu-unity-stack Github mono-repository. For complete details on contributing to the ASU Unity Stack, read these [instructions](../../CONTRIBUTING.md).


### Creating an issue

Before doing any development on the asu-brand package, it's important to first:

1. Create an issue ticket at https://github.com/ASU/asu-unity-stack/issues, with the desired changes to be made.
2. Tag issue with 'asu-brand' tag
3. Assign to the maintainer of this package, who will review the request for approval and coordinate next steps

### Running Tests

Running the test suite.

```bash
# from the asu-brand project root
yarn test
```

### Guidelines

1. Should work for React >16.8
2. Use React functional components over class components
3. Update Jest testing snapshots if changing the look of a component
4. Add new Jest test(s) if adding new functionality
5. Follow recommended React style guidelines configured by eslint. To run linting:
```bash
# from asu-brand package root
yarn lint
```
