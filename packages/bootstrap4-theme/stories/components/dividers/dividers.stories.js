import { document, console } from 'global';
import { storiesOf } from '@storybook/html';

storiesOf('Components/Dividers', module)
  .addParameters({
    happo: false,
  })

.add('Horizontal Rules', () => `
<div class="container">
  <h2><span class="highlight-gold">Horizontal Rules</span></h2>
  <h4><span class="highlight-black">Margin-width content divider</span></h4>
  <hr class="content-divider" />
  <hr class="copy-divider" />
</div>`)
