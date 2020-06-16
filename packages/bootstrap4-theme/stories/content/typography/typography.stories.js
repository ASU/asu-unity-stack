import { document, console } from 'global';
import { storiesOf } from '@storybook/html';

const highlightColors = {
  Gold: 'gold',
  Black: 'black'
};

storiesOf('Content/Typography', module)
  .addParameters({
    happo: false,
  })

  .add('Font', () => `<div class="container-fluid"><div class="col col-sm-12 p-3"><h1>Arial bold</h1>
  <p><strong>ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>abcdefghijklmnopqrstuvwxyz<br/>1234567890.!?:;</strong></p><h1 style="font-weight:100!important;">Arial regular</h1>
  <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>abcdefghijklmnopqrstuvwxyz<br/>1234567890.!?:;</p></div></div></div>`)

  .add('Headings', () => `<div class="container-fluid"><div class="col col-sm-12 p-3"><h1>h1. Heading 1</h1><hr/>
  <h1>h1. Heading 1<br/>articles and long headlines</h1><hr/>
  <h1>h1. Heading 1 mobile</h1><hr/>
  <h2>h2. Heading 2</h2><hr/>
  <h2>h2. Heading 2 mobile</h2><hr/>
  <h3>h3. Heading 3</h3><hr/>
  <h4>h4. Heading 4</h4><hr/>
  <h5>h5. Heading 5</h5></div></div></div>`)

  .add('Highlights', () => `<p class="h1">h1. Bootstrap heading</p>
  <p class="h2">h2. Bootstrap heading</p>
  <p class="h3">h3. Bootstrap heading</p>
  <p class="h4">h4. Bootstrap heading</p>
  <p class="h5">h5. Bootstrap heading</p>
  <p class="h6">h6. Bootstrap heading</p>`)

  .add('Body copy', () => `<div class="container-fluid"><div class="col col-sm-12 p-3"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac pretium lorem. Fusce libero nulla, ornare eget mi id, auctor pharetra sem. Nulla libero erat, viverra sit amet lectus ac, venenatis consectetur arcu. Nullam sit amet ligula ullamcorper, consequat sapien vitae, ultricies leo. Nullam ligula sapien, posuere vitae quam a, consectetur elementum nibh. In hac habitasse platea dictumst. Morbi elementum ornare elementum. Donec eget vehicula tortor, ac consectetur orci. Ut non finibus mi. Maecenas et sagittis ex. Ut pulvinar sed augue vitae dictum. Aenean pellentesque a felis sit amet dapibus.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac pretium lorem. Fusce libero nulla, ornare eget mi id, auctor pharetra sem. Nulla libero erat, viverra sit amet lectus ac, venenatis consectetur arcu. Nullam sit amet ligula ullamcorper, consequat sapien vitae, ultricies leo. Nullam ligula sapien, posuere vitae quam a, consectetur elementum nibh. In hac habitasse platea dictumst. Morbi elementum ornare elementum. Donec eget vehicula tortor, ac consectetur orci. Ut non finibus mi. Maecenas et sagittis ex. Ut pulvinar sed augue vitae dictum. Aenean pellentesque a felis sit amet dapibus.</p></div></div></div>`)

  .add('Display headings', () => `<h1 class="display-1">Display 1</h1>
  <h1 class="display-2">Display 2</h1>
  <h1 class="display-3">Display 3</h1>
  <h1 class="display-4">Display 4</h1>`)

  .add('ASU Headings', () => `<h1 class="heading heading-one">Heading 1</h1>
  <h1 class="heading heading-one article">Heading 1 - Long Headlines and Article Titles</h1>
  <h2 class="heading heading-two">Heading 2</h2>
  <h3 class="heading heading-three">Heading 3</h3>
  <h4 class="heading heading-four">Heading 4</h4>
  <h5 class="heading heading-five">Heading 5</h5>`)

  .add('ASU Headings - Highlights', () => `<h1 class="heading heading-one"><span class="highlight highlight-gold highlight-heading-one">Lorem ipsum</span></h1>
  <h1 class="heading heading-one article"><span class="highlight highlight-gold highlight-heading-one">Heading 1 - Long Headlines and Article Titles</span></h1>
  <h2 class="heading heading-two"><span class="highlight highlight-black highlight-heading-two">Heading 2</span></h2>
  <h3 class="heading heading-three"><span class="highlight highlight-white">Heading 3</span></h3>
  <h4 class="heading heading-four"><span class="highlight highlight-black">Heading 4</span></h4>`)

  .add('Lead', () => `<p class="lead">
  Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
</p>`)

  .add('ASU Paragraphs', () => `
  <div class="container">
    <div class="row">
      <div class="col-sm-12 p-3">
        <h1><span class="highlight-gold">Paragraphs</span></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis semper enim. Fusce leo nisl,
        malesuada sed mattis nec, viverra mollis erat. Cras vel euismod turpis.
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Aenean sagittis tincidunt pretium. Aliquam erat volutpat. Aenean eu luctus est. Aenean a elit est.
        Donec in eleifend nulla, aliquam ultrices nisl. Nulla volutpat nisi eget libero tincidunt,
        non luctus ante efficitur.</p>
      </div>
    </div>
  </div>
  `)

  .add('Inline text elements', () => `<p>You can use the mark tag to <mark>highlight</mark> text.</p>
  <p><del>This line of text is meant to be treated as deleted text.</del></p>
  <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
  <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
  <p><u>This line of text will render as underlined</u></p>
  <p><small>This line of text is meant to be treated as fine print.</small></p>
  <p><strong>This line rendered as bold text.</strong></p>
  <p><em>This line rendered as italicized text.</em></p>`)

  .add('Abbreviations', () => `<p><abbr title="attribute">attr</abbr></p>
  <p><abbr title="HyperText Markup Language" class="initialism">HTML</abbr></p>`)

  .add('Blockquotes', () => `<blockquote class="blockquote">
  <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
</blockquote>`)

.add('Naming a source', () => `<blockquote class="blockquote">
<p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
<footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>`)

.add('Alignment - centered', () => `<blockquote class="blockquote text-center">
<p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
<footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>`)

.add('Alignment - right', () => `<blockquote class="blockquote text-right">
<p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
<footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>`)

.add('Lists - Unstyled', () => `<ul class="list-unstyled">
<li>Lorem ipsum dolor sit amet</li>
<li>Consectetur adipiscing elit</li>
<li>Integer molestie lorem at massa</li>
<li>Facilisis in pretium nisl aliquet</li>
<li>Nulla volutpat aliquam velit
  <ul>
    <li>Phasellus iaculis neque</li>
    <li>Purus sodales ultricies</li>
    <li>Vestibulum laoreet porttitor sem</li>
    <li>Ac tristique libero volutpat at</li>
  </ul>
</li>
<li>Faucibus porta lacus fringilla vel</li>
<li>Aenean sit amet erat nunc</li>
<li>Eget porttitor lorem</li>
</ul>`)

.add('Lists - Inline', () => `<ul class="list-inline">
<li class="list-inline-item">Lorem ipsum</li>
<li class="list-inline-item">Phasellus iaculis</li>
<li class="list-inline-item">Nulla volutpat</li>
</ul>`)

.add('Description list alignment', () => `<dl class="row">
<dt class="col-sm-3">Description lists</dt>
<dd class="col-sm-9">A description list is perfect for defining terms.</dd>

<dt class="col-sm-3">Euismod</dt>
<dd class="col-sm-9">
  <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
  <p>Donec id elit non mi porta gravida at eget metus.</p>
</dd>

<dt class="col-sm-3">Malesuada porta</dt>
<dd class="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>

<dt class="col-sm-3 text-truncate">Truncated term is truncated</dt>
<dd class="col-sm-9">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>

<dt class="col-sm-3">Nesting</dt>
<dd class="col-sm-9">
  <dl class="row">
    <dt class="col-sm-4">Nested definition list</dt>
    <dd class="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>
  </dl>
</dd>
</dl>`);
