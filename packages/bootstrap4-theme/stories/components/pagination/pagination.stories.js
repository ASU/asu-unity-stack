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


.add('Disabled and active states', () => `
<nav aria-label="...">
  <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link page-link-icon" href="#" tabindex="-1" aria-disabled="true">Prev</a>
    </li>
    <li class="page-item active" aria-current="page">
      <a class="page-link" href="#">1
      <span class="sr-only">(current)</span></a>
    </li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
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
      <a class="page-link" href="#">First</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">Prev</a>
    </li>
    <li class="page-item"><span class="page-link">...</span></li>
    <li class="page-item"><a class="page-link" href="#">40</a></li>
    <li class="page-item active" aria-current="page">
      <a class="page-link" href="#">41
      <span class="sr-only">(current)</span></a>
    </li>
    <li class="page-item"><a class="page-link" href="#">42</a></li>
    <li class="page-item"><span class="page-link">...</span></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">Last</a>
    </li>
  </ul>
</nav>
`)

.add('Borders', () => `
<nav aria-label="...">
  <ul class="pagination justify-content-center border p-2">
    <li class="page-item">
      <a class="page-link" href="#">First</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">Prev</a>
    </li>
    <li class="page-item"><span class="page-link">...</span></li>
    <li class="page-item"><a class="page-link" href="#">40</a></li>
    <li class="page-item active" aria-current="page">
      <a class="page-link" href="#">41
      <span class="sr-only">(current)</span></a>
    </li>
    <li class="page-item"><a class="page-link" href="#">42</a></li>
    <li class="page-item"><span class="page-link">...</span></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">Last</a>
    </li>
  </ul>
</nav>
`)

.add('Gray 2 Background', () => `
<nav aria-label="...">
  <ul class="pagination justify-content-center uds-bg-gray pt-2 pb-2">
    <li class="page-item">
      <a class="page-link" href="#">First</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">Prev</a>
    </li>
    <li class="page-item"><span class="page-link">...</span></li>
    <li class="page-item"><a class="page-link" href="#">40</a></li>
    <li class="page-item active" aria-current="page">
      <a class="page-link" href="#">41
      <span class="sr-only">(current)</span></a>
    </li>
    <li class="page-item"><a class="page-link" href="#">42</a></li>
    <li class="page-item"><span class="page-link">...</span></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">Last</a>
    </li>
  </ul>
</nav>
`)

.add('Gray 7 Background', () => `
<nav aria-label="...">
  <ul class="pagination justify-content-center uds-bg-dark pt-2 pb-2">
    <li class="page-item">
      <a class="page-link" href="#">First</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">Prev</a>
    </li>
    <li class="page-item"><span class="page-link">...</span></li>
    <li class="page-item"><a class="page-link" href="#">40</a></li>
    <li class="page-item active" aria-current="page">
      <a class="page-link" href="#">41
      <span class="sr-only">(current)</span></a>
    </li>
    <li class="page-item"><a class="page-link" href="#">42</a></li>
    <li class="page-item"><span class="page-link">...</span></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">Last</a>
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
    <li class="page-item">
      <a class="page-link" href="#">Prev</a>
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
    <li class="page-item">
      <a class="page-link" href="#">Prev</a>
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
