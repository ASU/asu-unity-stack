import { storiesOf } from '@storybook/html';

storiesOf('Overview', module)
  .addParameters({
    happo: false,
    readme: {
      sidebar: `
# ASU Web Standards Bootstrap 4 Theme

This styleguide demonstrates all the available components, markup, and styles that are available in this CMS agnostic implementation of the ASU Web Standards set forth by the [ASU Marketing Hub](https://brandguide.asu.edu/).

For more information on how these styles are created and how to use them, head on over to the [project GitHub repository](https://github.com/gios-asu/asu-web-standards-bootstrap4/). If you have any questions, [post an issue](https://github.com/gios-asu/asu-web-standards-bootstrap4/issues).
`,
    },
  })
  .add(
    'Read Me',
    () => '<div>Watch here for live rendered UI components.</div><div>Don\'t forget to view the Accessibility Results and Readme Docs in the service panel below.</div>'
  );
