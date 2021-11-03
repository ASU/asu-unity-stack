# ASU RFI Component

The ASU RFI Component is a React-powered Request for Information form. It is
intended to be implemented by a CMS module/plugin/extension that must provide a
local endpoint at (TODO ADD PATH OR PROP?) to recieve the component's
submission payload and add the host's source ID (which serves as an API key and
identifier) to the payload, and then send it off to the RFI submissions service
which processes and routes the submissions to Undergrad, Grad, and ASUOnline
middleware destinations so that the RFI request ultimately lands in the
appropriate Salesforce destination.

## Installation and Requirements

If you use the ASU RFI component through Webspark 2 or another CMS that has
implemented the component, all of the below will have been done for you.
Simply enable the module/extension/plugin. You will still need to supply a
Source ID.

If you are a developer integrating the RFI component into your CMS or app,
read on:

React and React-DOM are required as peer dependencies. Install with:
`yarn add react react-dom`

@asu-design-system/bootstrap4-theme is required as a peer dependency in your
project. Install the latest version with the following command:
`yarn add @asu-design-system/bootstrap4-theme@dev`

Make sure to have included [FontAwesome](https://fontawesome.com/) in your
project to allow icons to be shown:
`yarn add @asu-design-system/components-core@dev`

Additionally, Google Tag Manager (GTM) and a dataLayer should be provided by
the site launching the RFI component so Google Analytics data can be properly
included as hidden field data in submissions. See the Header Guide on
<https://unity.web.asu.edu> for details about GTM options to fit your ASU site.

You must have a Source ID configured in your host site in order to successfully
send RFI submissions to the RFI submissions service.

RECOMMENDED: See /example/rfi.html for a complete, HTML + vanilla Javascript
example of incorporating the RFI component into an HTML page and launching it.
Includes example and description of the props to use to configure the
RFI form. It should work if you open the file in your browser, allowing you
to get to know the RFI component.

See the the [Unity Storybook for the RFI component](https://unity.web.asu.edu/@asu-design-system/app-rfi/index.html?path=/story/uds-asurfi--rfi-default)
for example configurations to match various use-cases.

## Requesting a Source ID
TODO - details to come

## ASU RFI component architectural overview:
* Top level app: src/components/AsuRfi/AsuRfi.js
* ... which invokes the main form which defines the form steps: src/components/steps/RfiMainForm.js
* ... which instantiates the RfiStepper component wherein the Formik component is defined: src/components/stepper/RfiStepper.js
* ... which calls the various step forms with their independent validation schemas: src/components/steps/*.js
* ... field input components live in src/components/controls
* Final submission handler is invoked in RfiMainForm.js. TODO: make separate function in its own file for the submission.
* Custom form input components live in src/components/controls/*.js and are styled using the styled-components library.

This pattern is based on example code found at https://codesandbox.io/s/mlc2o

Developer note: When adding new form-custom-control field input types, don't
forget to register them in controls/index.js. You'll be scratching your head
until you do.

## Documentation to consult when developing with the RFI component
* [Formik](https://jaredpalmer.com/formik/docs/tutorial)
* [Yup](https://github.com/jquense/yup)
* [React Formik Multistep Form example which inspired our architecture](https://codesandbox.io/s/mlc2o)
* [React Datepicker](https://reactdatepicker.com/)
* [React-Phone-Input-2](https://github.com/bl00mber/react-phone-input-2)
* [Reactstrap](https://github.com/reactstrap/reactstrap)
* [Reactstrap components](https://reactstrap.github.io/components/alerts/)

## Services consulted by the RFI Component
* ASU Degree Search REST API (currently proxied through Cloudflare worker for CORS permissions) for main degree data:
** findAllDegrees: <https://degreesearch-proxy.apps.asu.edu/degreesearch/?cert=false&program=undergrad&method=findAllDegrees&fields=Descr100,Degree,CollegeAcadOrg,AcadPlanType,AcadPlan,AcadProg,CampusStringArray,SubPln,planCatDescr,EmailAddr,accelerateDegrees,concurrentDegrees,globalExp,careerData,AsuCareerOpp&init=false>
** findDegreeByAcadPlan: <https://degreesearch-proxy.apps.asu.edu/degreesearch/?method=findDegreeByAcadPlan&acadPlan=LAACTMS&fields=Descr100,Degree,CollegeAcadOrg,AcadPlanType,AcadPlan,AcadProg,CampusStringArray,SubPln,planCatDescr,applyInfo,graduateAllApplyDates&init=false>
** findDegreeByCollege: <https://degreesearch-proxy.apps.asu.edu/degreesearch/?method=findDegreeByCollege&fields=AcadPlan&program=undergrad&cert=false&collegeOrg=CBA&init=false>
* Data Potluck for Countries and States data:
** <https://api.myasuplat-dpl.asu.edu/api/codeset/countries?include=states>
** [DPL docs](https://api.myasuplat-dpl.asu.edu)
* ASUOnline Leads API 3.3 Programs for online programs data:
** <https://asuonline.asu.edu/lead-submissions-v3.3/programs>
** <https://asuonline.asu.edu/lead-submissions-v3.3/programs?category=undergraduate&progcode=UGBA>
** [See documentation for more examples](https://docs.google.com/document/d/1kdIiuipSmbnrcT9gUkeHzCQujwtCdY680ueYhcLaIUw/edit).

## Component props documentation

You can find a full list of props into the [docs/README.props.md](docs/README.props.md)
