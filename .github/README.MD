```YAML
name: development-workflow
on:
  push:
    branches: ["develop"]

jobs:
  run-yarn-build:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      packages: write

    steps:
      - name: Checkout repo
        uses: actions/checkout@v2
        with:
          persist-credentials: false

      - name: Setup node to install packages from npm
        uses: actions/setup-node@v2
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
        with:
          node-version: "12.x"
          registry-url: "https://registry.web.asu.edu/"

      - name: Get yarn cache directory path
        id: yarn-cache-dir-path
        run: echo "::set-output name=dir::$(yarn cache dir)"

      - name: Yarn cache
        uses: actions/cache@v2
        id: yarn-cache # use this to check for `cache-hit` (`steps.yarn-cache.outputs.cache-hit != 'true'`)
        with:
          path: ${{ steps.yarn-cache-dir-path.outputs.dir }}
          key: ${{ runner.os }}-yarn-${{ hashFiles('**/yarn.lock') }}
          restore-keys: |
            ${{ runner.os }}-yarn-

      - name: Install and build
        run: |
          yarn install
          yarn build
      - name: Run tests
        run: |
          echo 'Tests temporarily disabled'
          echo 'Could run yarn lint here'
          echo 'Or yarn test:e2e or yarn percy, once tests are ready'

      - name: Prebuild storybook build
        run: |
          yarn deploy-storybook --dry-run

      - name: Copy and compile nunjucks templates
        run: |
          yarn gulp

      - name: Setup node for publishing to Github packages
        uses: actions/setup-node@v2
        with:
          node-version: "12.x"
          registry-url: "https://npm.pkg.github.com"

      - name: Yarn publish packages
        env:
          NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          GITHUB_TOKEN: ${{ secrets.ASU_DEV_STACK_GHP }}
        run: |
          yarn publish-packages

      - name: Publish to Github Pages
        run: |
          yarn deploy-storybook --existing-output-dir=build
```

The above code should be very close to a working build pipeline. Some things to note:

- Every Github repo automatically generates a GITHUB_TOKEN environment variable. This token can be used to authenticate with Github in a workflow file to perform some actions, but it has limited scope. During the first step, the checkout step, the Github token is also automatically used to authenticate. However, [the docs for semantic-release](https://github.com/semantic-release/semantic-release/blob/master/docs/usage/ci-configuration.md#authentication) state that only a personal access token for authentication is supported. It was discovered that even if you specify a personal access token for this step, Github Actions caches the first credentials used to authenticate and reuses them on on subsequent steps that require authentication. Therefore, we must use the persist-credentials flag during the first step to solve this.

- Github Packages requires that packages be scoped and that the package's package.json name property be the scoped name in the format of @owner/packageName. For publishing to Verdaccio, we currently have our packages scoped to @asu-design-systems, but for publishing to Github packages, the scope must match the owner (or org, in this case) name, ex. @asu. Ex. the component-footer package.json file will have a name property that contains "@asu/component-footer"

- The publishConfig in each package's package.json file must point to the npm registry in Github packages, "https://npm.pkg.github.com"

```
  "publishConfig": {
      "registry": "https://npm.pkg.github.com"
  }
```

- Each package must have a repository property that contains the URL to the repo, trailed by `.git`. ex.

```
  "repository": {
    "type": "git",
    "url": "https://github.com/asu/asu-unity-stack.git",
    "directory": "packages/component-footer"
  }
```

- The current Jenkinsfile is broken up into seperate stages. Assuming Jenkins is similar to GHA, each stage operates on a separate runner. Therefore, the packages installed from one stage are not persisted to another stage. However, the current GHA workflow is a single job. This caused issues with the Husky/Commitizen tools, which are installed as part of 'yarn install'. When semantic release attempts to create a commit with a tagged version, Husky/Commitizen attempt to trigger the interactive commit prompts. This can be solved by replacing the root package.json "prepare" script with the following - `"prepare": "is-ci || husky install"`, which will instruct husky to stand down during CI. If it is determined that breakign the GHA workflow into separate jobs makes sense, this becomes unnecessary as it should behave similarly to existing Jenkins pipeline.
