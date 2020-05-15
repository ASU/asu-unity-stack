import { storiesOf } from '@storybook/html';

storiesOf('Overview', module)
  .addParameters({
    happo: false,
    readme: {
      sidebar: `

`,
    },
  })
  .add(
    'Read Me',
    () => `<h1>ASU Web Standards Bootstrap 4 Theme</h1>

<p>This Storybook site demonstrates all the available components, markup, and styles that are available in this CMS-agnostic implementation of the ASU Web Standards set forth by the <a href="https://brandguide.asu.edu/">ASU Marketing Hub</a>. This is not the replacement for a proper style guide website that documents the theme for end-users and web developers. That is coming soon! This is an example of the live development environment used by the theme maintainers to scan the theme for Accessibility issues and to test and validate proposed changes to the Web Standards styles.</p>

<p>For more information on how these styles are created and how to use them, head on over to the <a href="https://github.com/gios-asu/asu-web-standards-bootstrap4/">project GitHub repository</a>. If you have any questions, <a href="https://github.com/gios-asu/asu-web-standards-bootstrap4/issues">post an issue</a>.</p>

<p>Don\'t forget to view the Accessibility Test Results in the service panel to the right or below!</p>`
  );
