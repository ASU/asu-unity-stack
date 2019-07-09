import { storiesOf } from '@storybook/html';

storiesOf('Overview', module)
  .addParameters({
    happo: false,
    readme: {
      sidebar: `
# ASU Web Standards Bootstrap Theme

This styleguide demonstrates all the available components, markup, and styles that are available in this CMS agnostic implementation by the [Julie Ann Wrigley Global Institute of Sustainability](https://sustainability.asu.edu/) of the ASU Web Standards set forth by the [ASU Marketing Hub](https://brandguide.asu.edu/).

For more information on how these styles are created and how to use them, head on over to the [gios-asu/ASU-Web-Standards-Bootstrap github repository](https://github.com/gios-asu/ASU-Web-Standards-Bootstrap/). If you have any questions, [post an issue](https://github.com/gios-asu/ASU-Web-Standards-Bootstrap/issues).
`,
    },
  })
  .add(
    'Read Me',
    () => '<div>Watch here for live rendered UI components.</div>'
  );
