import { document, console } from 'global';
import { storiesOf } from '@storybook/html';

storiesOf('Components/Breadcrumbs', module)
  .addParameters({
    happo: false,
  })

.add('Breadcrumbs', () => `
<nav aria-label="breadcrumb0">
<ol class="breadcrumb">
  <li class="breadcrumb-item"><a href="#">Home</a></li>
  <li class="breadcrumb-item"><a href="#">Second Nav Item</a></li>
  <li class="breadcrumb-item active" aria-current="page">Current Page</li>
</ol>
</nav>`)

/*
.add('Accessible breadcrumbs', () => `
<nav aria-label="breadcrumb">
<ol class="breadcrumb">
  <li class="breadcrumb-item active" aria-current="page">Home</li>
</ol>
</nav>

<nav aria-label="breadcrumb1">
<ol class="breadcrumb">
  <li class="breadcrumb-item"><a href="#">Home</a></li>
  <li class="breadcrumb-item active" aria-current="page">Library</li>
</ol>
</nav>

<nav aria-label="breadcrumb2">
<ol class="breadcrumb">
  <li class="breadcrumb-item"><a href="#">Home</a></li>
  <li class="breadcrumb-item"><a href="#">Library</a></li>
  <li class="breadcrumb-item active" aria-current="page">Data</li>
</ol>
</nav>`)
*/

; // close
