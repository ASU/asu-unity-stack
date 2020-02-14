# Setting up a new Unity package Using the example package

1. Start under packages/
2. Create a folder for the new component and copy over contents of ./example.
You'll now need to update files and namespacing to reflect your new component.
Details on those steps follow.
3. Update package.json (which is used by npm and yarn):
    * Update version to 0.0.1 as a starting point.
    * Update other contents and namespacing as needed. Search for variants of
    the "example" string.
    * "main" indicates the config/manifest file for what is imported and
    exported for the component. Update contents to match desired imports. May
    not know yet, or rely on the mentioned components from
    example/src/components/, rename and update to match your needs.
    * "scripts" section of document is most likely to be consistent across
    components and thus won't need updates.
    * Urls should be the same since Unity is managed as a mono repo
    * Look for "dependencies" that can be removed because they are not used in
    this project.
    * Do the same for "devDependencies".
    * Jest section pertains to unit and functional testing. See
    Example.test.js. Jest testing outputs results to _snapshots_, and can be
    used for unit and functional testing. We're mostly using snapshot testing
    instead of clicks, but can do both.
    * esLint config (devDependency) runs with Webpack.
    * Webpack handles the cross browser packaging of the component and
    involves Babel under the hood.
4. Next, update Webpack configs in the webpack directory.
    * This entails the whole webpack directory
    * These configs tell Webpack how to run, and are not to be confused with
    the Webpack library which will be included when the project assets are
    created and installed via NPM.
    * postcss processing can be removed from the webpack configs, and added  in
    later for optimizations if appropriate. Do not, however, delete
    postcss.config.js. Simply remove references to postcss from webpack.*.js
    files.
    * Webpack.*.js
        * Entry details need to be updated
        * Outputs to dist directory (which is not committed to repo)
        * Update entry point and source directory
5. Storybook configs reside in .storybook. Review for possible namespacing
    updates.
6. Babel. Review configs in babel.config.js. Updates probably not needed.
7. Jest. Review copy of Jest file mock in: jest/_mocks_
8. Review .gitignore and .npmignore in package root.
9. When you are confident you've updated all namespacing, commit your new
component to the repo.
10. A stub component and matching story can be found in src/components/Example
in Example.jsx and Example.stories.js respectively. Note: reactstrap is included
with this component and shows how Unity CSS is applied via reactstrap.
11. You may now run
`$ yarn install`
*from the git root* (not the package root) to install libraries. Running from
root is necessary because asu-unity-stack uses Yarn Workspaces, which is
defined at the git root. Yarn Workspaces wires everything up to allow ASU
generated modules within this stack to be used where npm install wouldn't know
where to find them. asu-web-standards-bootstrap4 is an example.
12. Step into your component
`$ cd packages/<package-name>`
13. Run Storybook
`$ yarn storybook`
14. *You are now set to begin developing your component*, and can revisit files
and directories mentioned above in order to update your component and its
integrations as needed.
