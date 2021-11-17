# ASU Degree Pages

ASU Web Standards-based implementation of the Degree page component

## Architecture details

### Document reference

[ux-doc-link]:https://xd.adobe.com/view/03081953-57ea-498f-a7f1-771c92c4dbed-565b/?fullscreen

You can find the UX document [here][ux-doc-link]
### All possible degree page sections


<table>
<tr>
<td>

```HTML
- Global header
- Hero
- Intro content
- Next steps
- Dedicated RFI
- Degree listing
- Areas of study
```
</td>
<td>

```HTML
- Program rankings
- Program facilities
- Location(s)
- Faculty
- Testimonials
- Global opportunities
```

</td>
</tr>

<tr>
<td>

```HTML
- Portfolio/student work
- Alumni/student feature
- Customize your experience
- At a glance
- Application requirements
- Contact information
```

</td>
<td>

```HTML
- Change of major reqs.
- Flexible degree options
- Affording college/Fin aid
- Attend online
- Career outlook
- Example careers
```

</td>
</tr>
</table>







### Degree listing page template
Degree listing pages are used for the actual degree browsing module where users can view a list of filterable degrees in either a table or grid view. Please note that the degree listing module is just one of severa l sections required for this template.

<table style="border:0px;">
  <tr>
    <td style="width:50%; vertical-align: top">
 <img src="./docs/assets/listing-page-structure-left.png" />
    </td>
    <td style="width:50%; vertical-align: top">
 <img src="./docs/assets/listing-page-structure-right.png" />
    </td>
  </tr>
</table>


### Notes:

Units can decide to use or not use the degree listing table column
for college/school. Some colleges may display the different subunits . If they are all the same the college may want to turn this column off.

### Program detail page template

Program detail pages are used for individual degrees or programs. It contains information relevant to each respective degree.This template can be used for all types of program detail pages, whether it's an undergrad degree, grad degree, or certificate/minor. However, each have certain requirements. See the notes section below.

<table style="border:0px;">
  <tr>
    <td style="width:50%; vertical-align: top">
 <img src="./docs/assets/detail-page-structure-top.png" />
    </td>
  </tr>
  <tr>
    <td style="width:50%; vertical-align: top">
 <img src="./docs/assets/detail-page-structure-bottom.png" />
    </td>
  </tr>
</table>

<table><tr><td>
 <img src="./docs/assets/notes.png" >
</td></tr></table>

<span>
  <br/>
</span>

Check out the [UX document][ux-doc-link] for more UI spec details.

## Component views
 The `Degree Component` has 2 types of views:

 - Listing Page view
 - Detail Page view


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
### DetailPage component
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
 * }} DetailPageProps
 */
```

## Component props documentation

You can find a full list of props into the [docs/README.props.md](docs/README.props.md)

<table><tr><td>
<a href = "docs/README.props.md">
<img
  style ="border: 1px solid black;"
  width = "300px"
  src="../../docs/assets/readme-props-preview.png" />
</a>
</td></tr></table>

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

# it generates the document `docs/README.props.md`
yarn docs

# it generates full jsdoc documentation
yarn jsdoc
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
### DetailPage component

You can find an extended example of how to set `DetailPage` props [here](/packages/app-degree-pages/src/components/ProgramDetailPage/index.stories.js)

```JS
 import { DetailPage } from '@asu-design-system/app-degree-pages'

 const DetailPageApp = ({
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
    <DetailPage
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
### DetailPage component

You can find an extended example of how to set `DetailPage` props [here](/packages/app-degree-pages/examples/detail-page.html)

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
        props: { /** See ee file examples/detail-page.htmll */ }
      });
    </script>

```
### Examples

The folder [packages/app-degree-pages/examples](/packages/app-degree-pages/examples)
<br/>contains examples to use the component on static HTML page

#### Examples - quick links

- [Listing page](/packages/app-degree-pages/examples/listing-page.html)
- [Detail Page](/packages/app-degree-pages/examples/program-detail-page.html)

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

## Future improvements
All the requirements for version 1 of this component were covered, further enhancements will be implemented in the next version.

# Storybook

- [Listing page](https://unity.web.asu.edu/@asu-design-system/app-degree-pages/index.html?path=/story/program-listing-page--default)
- [Detail page](https://unity.web.asu.edu/@asu-design-system/app-degree-pages/index.html?path=/story/program-detail-page--default
)
# UX documents

- [XD Degree Template Pages model](https://xd.adobe.com/view/03081953-57ea-498f-a7f1-771c92c4dbed-565b/?fullscreen)
- [XD Degree Listing Pages](https://xd.adobe.com/view/ca5d1ca5-bdf7-40b2-9aa3-2aaa75be699a-9f0e/screen/29e8a7e8-1b04-46b3-ad22-0ebdb78eb0ca/)
- [XD Degree Detail Page](https://xd.adobe.com/view/2bfe6a52-eb92-4531-93d3-cc809c365e39-7ead/)

# Other docs

- [Web Service Fields Descriptions](https://docs.google.com/spreadsheets/d/18_0EuMOTdrJHhIFgVsl9o8QSpuCPjIF823D1B91MzgU/edit#gid=0)
- [Degree Search SEO // URLs + Descriptions](https://docs.google.com/spreadsheets/d/1xHHT8v0EqBkKTasL0HM29lJdTbPcnCPso2AHkl_BPU4/edit#gid=0)

# References

- [Font Awesome](https://fontawesome.com/)
    - [CDN link](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/js/all.min.js)
- [ASU bootstrap4-theme](https://unity.web.asu.edu/@asu-design-system/bootstrap4-theme)
    - [CDN link](https://unity.web.asu.edu/bootstrap4-theme/dist/css/bootstrap-asu.css)
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
- [Cypress docs](https://docs.cypress.io/)
  - [Cypress Jest adapter](https://github.com/phongnd39/cypress-jest-adapter)
  - [Cypress intellisense](https://github.com/cypress-io/cypress-example-todomvc#cypress-intellisense)
- [JSDoc Reference](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html)
  - [Getting Started with JSDoc 3](https://jsdoc.app/about-getting-started.html)
  - [JSDoc @template: Generics](https://github.com/microsoft/TypeScript/issues/27387)
