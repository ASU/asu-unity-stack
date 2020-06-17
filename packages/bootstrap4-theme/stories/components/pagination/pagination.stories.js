import { document, console } from 'global';
import { storiesOf } from '@storybook/html';

storiesOf('Components/Pagination', module)
  .addParameters({
    happo: false,
  })

.add('Example', () => `
<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Prev</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
`)
.add('Example with icons', () => `
<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link page-link-icon" href="#">Prev</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link page-link-icon" href="#">Next</a></li>
  </ul>
</nav>
`)
.add('Example with only icons', () => `
<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
`)

.add('Disabled and active states', () => `
<nav aria-label="...">
  <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link page-link-icon" href="#" tabindex="-1" aria-disabled="true">Prev</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active" aria-current="page">
      <a class="page-link" href="#">2
      <span class="sr-only">(current)</span></a>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link page-link-icon" href="#">Next</a>
    </li>
  </ul>
</nav>
`)

.add('Large numbers', () => `
<nav aria-label="...">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link page-link-icon" href="#" tabindex="-1" aria-disabled="true">Prev</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">11</a></li>
    <li class="page-item active" aria-current="page">
      <a class="page-link" href="#">12
      <span class="sr-only">(current)</span></a>
    </li>
    <li class="page-item"><a class="page-link" href="#">13</a></li>
    <li class="page-item"><span class="page-link">...</span></li>
    <li class="page-item"><a class="page-link" href="#">44</a></li>
    <li class="page-item"><a class="page-link" href="#">45</a></li>
    <li class="page-item"><a class="page-link" href="#">46</a></li>
    <li class="page-item">
      <a class="page-link page-link-icon" href="#">Next</a>
    </li>
  </ul>
</nav>
`)
/*
.add('Sizing', () => `
<nav aria-label="...">
  <ul class="pagination pagination-lg">
    <li class="page-item active" aria-current="page">
      <span class="page-link">
        1
        <span class="sr-only">(current)</span>
      </span>
    </li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
  </ul>
</nav>
<hr>
<nav aria-label="...">
  <ul class="pagination pagination-sm">
    <li class="page-item active" aria-current="page">
      <span class="page-link">
        1
        <span class="sr-only">(current)</span>
      </span>
    </li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
  </ul>
</nav>
`)
*/
.add('Alignment', () => `
<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Prev</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
<hr>
<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-end">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Prev</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
`)

; //close
