import { document, console } from 'global';
import { storiesOf } from '@storybook/html';

storiesOf('Components/Global Header', module)
  .addParameters({
    happo: false,
  })

  .add('Global Header', () => `

<nav class="navbar navbar-expand-lg navbar-light static-top">
  <div class="container">

    <a class="navbar-brand" href="#">
      <img src="assets/img/arizona-state-university-logo-vertical.png" alt="ASU Logo Vertical" />
    </a>

    <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="d-flex flex-column align-items-start w-100">
      <div class="title">
        <span>Ira A. Fulton Schools of Engineering</span><br>
        <h1>School of Computing, Informatics, and Decisions Systems Engineering</h1>
      </div>
      <div class="collapse navbar-collapse w-100 justify-content-between" id="navbarResponsive">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              <i class="fas fa-home"></i>
              <span class="sr-only">(Home)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
        <form class="form-inline">
          <a class="btn btn-sm btn-primary">CTA Action 1</a>
          <a class="btn btn-sm btn-secondary">CTA Action 2</a>
        </form>
      </div>
    </div>

  </div>
</nav>
  `)
