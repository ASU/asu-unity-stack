import { document, console } from 'global';
import { storiesOf } from '@storybook/html';

storiesOf('Components/Global Footer', module)
  .addParameters({
    happo: false,
  })

  .add('KitchenSink', () => `
    <div class="wrapper" id="wrapper-endorsed-footer">
      <div class="container" id="endorsed-footer">
        <div class="row">

          <div class="col-md" id="endorsed-logo">
            <img src="http://placehold.jp/940x240.png?title={Endorsed Logo}" title="Endorsed Logo, Arizona State University">
          </div>

          <div class="col-md" id="social-media">
            <ul class="align-middle">
              <li><a href="#" title="Title"><i class="fab fa-facebook-square"></i></a></li>
              <li><a href="#" title="Title"><i class="fab fa-twitter-square"></i></a></li>
              <li><a href="#" title="Title"><i class="fab fa-linkedin"></i></a></li>
              <li><a href="#" title="Title"><i class="fab fa-instagram-square"></i></a></li>
              <li><a href="#" title="Title"><i class="fab fa-youtube-square"></i></a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>

    <div class="wrapper" id="wrapper-footer-columns">
      <div class="container" id="footer-columns">
        <div class="row">

          <div class="col-md" id="info-column">
            <h5>School of Computing, Informatics, and Decision Systems Engineering</h5>
            <p><a href="#">Contact Us</a></p>
            <p><a class="btn btn-small btn-gold">Contribute</a></p>
          </div>

          <div class="col flex-footer">
            <h5>Section Header Title</h5>
            <ul>
              <li><a href="#" title="link">Biological and Health Systems Computing</a></li>
              <li><a href="#" title="link">Informatics and Decision Systems Electrical</a></li>
              <li><a href="#" title="link">Computer and Energy Matter</a></li>
              <li><a href="#" title="link">Transport and Energy Sustainability and the Built Environment</a></li>
              <li><a href="#" title="link">The Polytechnic School</a></li>
            </ul>
          </div>

          <div class="col flex-footer">
            <h5>Menu Title Goes Here</h5>
            <ul>
              <li><a href="#" title="link">Student Organization</a></li>
              <li><a href="#" title="link">Inner Circle Newsletter</a></li>
              <li><a href="#" title="link">Parent Information</a></li>
              <li><a href="#" title="link">Visit Campus</a></li>
              <li><a href="#" title="link">K-12 Outreach</a></li>
              <li><a href="#" title="link">Hire Our Graduates</a></li>
              <li><a href="#" title="link">Hire an Intern</a></li>
            </ul>
          </div>

          <div class="col flex-footer">
            <h5>Menu Title Goes Here</h5>
            <ul>
              <li><a href="#" title="link">Student Organization</a></li>
              <li><a href="#" title="link">Inner Circle Newsletter</a></li>
              <li><a href="#" title="link">Parent Information</a></li>
              <li><a href="#" title="link">Visit Campus</a></li>
              <li><a href="#" title="link">K-12 Outreach</a></li>
              <li><a href="#" title="link">Hire Our Graduates</a></li>
              <li><a href="#" title="link">Hire an Intern</a></li>
            </ul>
          </div>

          <div class="col flex-footer">
            <h5>Menu Title Goes Here</h5>
            <ul>
              <li><a href="#" title="link">Student Organization</a></li>
              <li><a href="#" title="link">Inner Circle Newsletter</a></li>
              <li><a href="#" title="link">Parent Information</a></li>
              <li><a href="#" title="link">Visit Campus</a></li>
              <li><a href="#" title="link">K-12 Outreach</a></li>
              <li><a href="#" title="link">Hire Our Graduates</a></li>
              <li><a href="#" title="link">Hire an Intern</a></li>
            </ul>
          </div>

          <div class="col flex-footer">
            <h5>Menu Title Goes Here</h5>
            <ul>
              <li><a href="#" title="link">Student Organization</a></li>
              <li><a href="#" title="link">Inner Circle Newsletter</a></li>
              <li><a href="#" title="link">Parent Information</a></li>
              <li><a href="#" title="link">Visit Campus</a></li>
              <li><a href="#" title="link">K-12 Outreach</a></li>
              <li><a href="#" title="link">Hire Our Graduates</a></li>
              <li><a href="#" title="link">Hire an Intern</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>

  `)

  .add('Story 2', () => `<p>You can write as many stories as you need for a given feature, including the variations of a given feature--light vs. dark, etc.</p>`);
