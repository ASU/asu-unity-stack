import { document, console } from 'global';
import { storiesOf } from '@storybook/html';

storiesOf('Examples', module)
  .addParameters({
    happo: false,
  })

  .add('Story 1', () => `<h3>Paste your html content here to be rendered in Storybook</h3>`)

  .add('Story 2', () => `<p>You can write as many stories as you need for a given feature, including the variations of a given feature--light vs. dark, etc.</p>`);
