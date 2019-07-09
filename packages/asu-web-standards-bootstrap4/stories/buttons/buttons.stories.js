import { document, console } from 'global';
import { storiesOf } from '@storybook/html';

import ButtonsReadme from './buttons.readme.md'

storiesOf('Buttons', module)
  .addParameters({
    happo: false,
    readme: {
      sidebar: ButtonsReadme,
    },
  })
  .add('Types', () => `<div>
  <a class="btn btn-default" href="#" role="button">Link</a>
  <button class="btn btn-default" type="submit">Button</button>
  <input class="btn btn-default" type="button" value="Input">
  <input class="btn btn-default" type="submit" value="Submit">
</div>`);

storiesOf('Buttons/Alternatives', module)
  .addParameters({ happo: false })
  .add('default', () => `<button type="button" class="btn btn-default">btn-default</button>`)
  .add('primary', () => `<button type="button" class="btn btn-primary">btn-primary</button>`)
  .add('secondary', () => `<button type="button" class="btn btn-secondary">btn-secondary</button>`)
  .add('gold', () => `<button type="button" class="btn btn-gold">btn-gold</button>`)
  .add('blue', () => `<button type="button" class="btn btn-blue">btn-blue</button>`)
  .add('success', () => `<button type="button" class="btn btn-success">btn-success</button>`)
  .add('info', () => `<button type="button" class="btn btn-info">btn-info</button>`)
  .add('warning', () => `<button type="button" class="btn btn-warning">btn-warning</button>`)
  .add('danger', () => `<button type="button" class="btn btn-danger">btn-danger</button>`)
  .add('link', () => `<button type="button" class="btn btn-link">btn-link</button>`);

storiesOf('Buttons/Button Blocks', module)
  .addParameters({ happo: false })
  .add('default', () => `<button type="button" class="btn btn-primary btn-lg btn-block">Block level button</button>`);

storiesOf('Buttons/Button Sizes', module)
  .addParameters({ happo: false })
  .add('Default', () => `<p><button type="button" class="btn btn-primary">Default Size Button</button><button type="button" class="btn btn-default">Default Button</button></p>`)
  .add('Large', () => `<p><button type="button" class="btn btn-primary btn-lg">Large Button</button><button type="button" class="btn btn-default btn-lg">Large Button</button></p>`)
  .add('Small', () => `<p><button type="button" class="btn btn-primary btn-sm">Small Button</button><button type="button" class="btn btn-default btn-sm">Small Button</button></p>`)
  .add('XSmall', () => `<p><button type="button" class="btn btn-primary btn-xs">XS Button</button><button type="button" class="btn btn-default btn-xs">XS Button</button></p>`);
