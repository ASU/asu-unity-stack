import { document, console } from 'global';
import { storiesOf } from '@storybook/html';

storiesOf('Components/Accordion', module)
  .addParameters({
    happo: false,
  })

.add('Single Accordion', () => `
  <div class="container">
    <div class="row">
      <div class="col-md-4 flex-footer">

        <div class="card">
          <div class="card-header">
            <h4>
              <a data-toggle="collapse" href="#example-collapsed" role="button" aria-expanded="false" aria-controls="example-collapsed">
                Section Header Control
              </a>
            </h4>
          </div>
          <div id="example-collapsed" class="card-body">
            <h4>This is a quaternary headline</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
            <h5>This is a level five headline. There's a fancy word for that too.</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
          </div>
        <div>

      </div>
    </div>
  </div>
`)
