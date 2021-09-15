# ASU Degree Pages

ASU Web Standards-based implementation of the Degree page component

## Dependencies

1. [React](https://reactjs.org/)
2. [Font Awesome](https://fontawesome.com/)
    - [CDN link](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/js/all.min.js)
3. [ASU bootstrap4-theme](https://unity.web.asu.edu/@asu-design-system/bootstrap4-theme)
    - [CDN link](https://unity.web.asu.edu/bootstrap4-theme/dist/css/bootstrap-asu.css)

In order to use ASU Web Standards 2.0 you must install the
ASU Design System Bootstrap 4 theme
```yarn add @asu-design-system/bootstrap4-theme```
or in some other manner provide the styles required.

## CLI Commands

``` bash
# add app-degree-pages
yarn add @asu-design-system/app-degree-pages

# run storybook
yarn storybook

# build for production with minification
yarn build

# run tests
yarn test

```

## How to install

1. Make sure you are set up to use the private npm registry at registry.web.asu.edu.
<br/>See instructures in the 'How to use private package registry' here: [README.md](../../README.md)
2. ```yarn add @asu-design-system/app-degree-pages```

## Use as a JS module in React app
### ListingPage component

You can find an extended example of how to set `ListingPage` props [here](/packages/app-degree-pages/src/components/ListingPage/index.stories.js)

```JS
  import { ListingPage } from '@asu-design-system/app-degree-pages'

  const ListingPageApp = ({
    actionUrls,
    hero,
    introContent,
    programList,
    hasFilters,
    hasSearchBar,
  }) => {
  return (
        <ListingPage
          actionUrls={actionUrls}
          hero={hero}
          introContent={introContent}
          programList={programList}
          hasSearchBar={hasSearchBar}
          hasFilters={hasFilters}
      />
    )
  };
```
### ProgramDetailPage component

You can find an extended example of how to set `ProgramDetailPage` props [here](/packages/app-degree-pages/src/components/ProgramDetailPage/index.stories.js)

```JS
 import { ProgramDetailPage } from '@asu-design-system/app-degree-pages'

 const ProgramDetailPageApp = ({
    dataSource,
    anchorMenu,
    introContent,
    hero,
    atAGlance,
    applicationRequirements,
    changeMajorRequirements,
    affordingCollege,
    flexibleDegreeOptions,
    careerOutlook,
    exampleCareers,
    globalOpportunity,
    programContactInfo,
    attendOnline,
    nextSteps,
  }) => (
    <ProgramDetailPage
      dataSource={dataSource}
      anchorMenu={anchorMenu}
      introContent={introContent}
      hero={hero}
      atAGlance={atAGlance}
      applicationRequirements={applicationRequirements}
      changeMajorRequirements={changeMajorRequirements}
      affordingCollege={affordingCollege}
      flexibleDegreeOptions={flexibleDegreeOptions}
      careerOutlook={careerOutlook}
      exampleCareers={exampleCareers}
      globalOpportunity={globalOpportunity}
      programContactInfo={programContactInfo}
      attendOnline={attendOnline}
      nextSteps={nextSteps}
    />
  );
```

## Use on static HTML page

### ListingPage component

You can find an extended example of how to set `ListingPage` props [here](/packages/app-degree-pages/examples/listing-page.html)

```HTML

    <!-- FONTAWESOME loaded from CDN 'kit' URL -->
    <script
      src="https://kit.fontawesome.com/35fb12a3a9.js"
      crossorigin="anonymous"
    ></script>

    <link
      rel="stylesheet"
      href="https://unity.web.asu.edu/bootstrap4-theme/dist/css/bootstrap-asu.css"
    />

    <!-- *************************************************************** -->
    <!-- Load React. -->
    <script
      src="https://unpkg.com/react@17/umd/react.production.min.js"
      crossorigin
    ></script>
    <script
      src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"
      crossorigin
    ></script>
    <!-- *************************************************************** -->
    <!-- include bundled scripts from packages -->
    <script src="../dist/vendor.production.js"></script>
    <script src="../dist/degreePages.production.js"></script>

    <div id="degreePageContainer"></div>

    <script>
      AsuDegreePages.initListingPage({
        targetSelector: "#degreePageContainer",
        props: { /** See ee file examples/listing-page.html */ }
      });
    </script>
```
### ProgramDetailPage component

You can find an extended example of how to set `ProgramDetailPage` props [here](/packages/app-degree-pages/examples/program-detail-page.html)

```HTML

    <!-- FONTAWESOME loaded from CDN 'kit' URL -->
    <script
      src="https://kit.fontawesome.com/35fb12a3a9.js"
      crossorigin="anonymous"
    ></script>

    <link
      rel="stylesheet"
      href="https://unity.web.asu.edu/bootstrap4-theme/dist/css/bootstrap-asu.css"
    />

    <!-- *************************************************************** -->
    <!-- Load React. -->
    <script
      src="https://unpkg.com/react@17/umd/react.production.min.js"
      crossorigin
    ></script>
    <script
      src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"
      crossorigin
    ></script>
    <!-- *************************************************************** -->
    <!-- include bundled scripts from packages -->
    <script src="../dist/vendor.production.js"></script>
    <script src="../dist/degreePages.production.js"></script>

    <div id="degreePageContainer"></div>

    <script>
      AsuDegreePages.initProgramDetailPage({
        targetSelector: "#degreePageContainer",
        props: { /** See ee file examples/program-detail-page.htmll */ }
      });
    </script>

```
## DegreePage properties
### ListingPage component

You can find the full list of props types into the file [listing-page-types.js here](/packages/app-degree-pages/src/core/models/listing-page-types.js)

```JS
  /**
  * @typedef {{
  *  actionUrls?: ActionUrlProps
  *  hero?: import("@asu-design-system/components-core/src/components").HeroProps
  *  introContent?: IntroContentProps
  *  hasSearchBar?: boolean
  *  hasFilters?: boolean
  *  programList: GridListProps
  * }} ListingPageProps
  */
```
### ProgramDetailPage component
You can find the full list of props types into the file [program-detail-types.js here](/packages/app-degree-pages/src/core/models/program-detail-typesjs)

```JS
/**
 *  @typedef {{
 *   hide?: boolean
 *  }} HideProp
 *
 *  @typedef {{
 *  dataSource: import("./listing-page-types").ProgramDetailDataSource | string
 *  anchorMenu?: AnchorMenuProps
 *  hero?: HideProp & import("@asu-design-system/components-core/src/components").HeroProps
 *  introContent?: IntroContentProps
 *  programDescription?: ProgramDescriptionProps
 *  requiredCoursesProps?: RequiredCoursesProps
 *  atAGlance?: HideProp & AtAGlanceProps
 *  applicationRequirements?: HideProp
 *  changeMajorRequirements?: HideProp
 *  nextSteps?: HideProp & NextStepsProps
 *  affordingCollege?: HideProp
 *  flexibleDegreeOptions?: HideProp
 *  careerOutlook?: CareerOutlookProps
 *  exampleCareers?: HideProp
 *  globalOpportunity?: HideProp & GlobalOpportunityProps
 *  attendOnline?: HideProp &  AttendOnlineProps
 *  programContactInfo?: {
 *      departmentUrl: string
 *      emailUrl: string
 *  }
 * }} ProgramDetailPageProps
 */
```
### Examples

The folder [packages/app-degree-pages/examples](/packages/app-degree-pages/examples)
<br/>contains examples to use the component on static HTML page

#### Examples - quick links

- [Listing page](/packages/app-degree-pages/examples/listing-page.html)
- [Program Detail Page](/packages/app-degree-pages/examples/program-detail-page.html)

#### Examples - run and test

If you want to test the examples files you need to install an application server <br />
and run it into the folder `/packages/app-degree-pages/examples`. <br />
For example, if you want to use the `npm` package `lite-server` follow these steps:

- run `npm -g i lite-server`.
<br/>MAC users may need to use `sudo npm -g i lite-server`
- run `cd packages/app-degree-pages`
- run `lite-server`
- open the broweser to the url `http://localhost:3000/examples/degree-page.html`
  <br />(port number may be different)

# References

- [React](https://reactjs.org/)
- [Add React to a Website](https://reactjs.org/docs/add-react-to-a-website.html)
- [Jest APIs](https://jestjs.io/docs/api)
  - [Jest Fetch Mock](https://www.npmjs.com/package/jest-fetch-mock)
  - [Fix the "not wrapped in act(...)" warning](https://kentcdodds.com/blog/fix-the-not-wrapped-in-act-warning)
  - [Mocking React Components with Jest](https://thoughtbot.com/blog/mocking-react-components-with-jest)
  - [How to Test React Hooks (The Async Ones)](https://medium.com/flatiron-labs/testing-async-react-hooks-6a4d0ce2654c)
  - [Checking children passed to a mock React component](https://prog.world/checking-children-passed-to-a-mock-react-component/)
  - [Mocking `document` in jest](https://newbedev.com/mocking-document-in-jest)
  - [ISSUE with replaceall-is-not-a-function](https://stackoverflow.com/questions/65295584/jest-typeerror-replaceall-is-not-a-function)
  -[Common mistakes with React Testing Library](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
- [Type Checking JavaScript Files](https://www.typescriptlang.org/docs/handbook/type-checking-javascript-files.html)
  - [JSDoc Reference](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html)
- [Getting Started with JSDoc 3](https://jsdoc.app/about-getting-started.html)
  - [JSDoc @template: Generics](https://github.com/microsoft/TypeScript/issues/27387)
