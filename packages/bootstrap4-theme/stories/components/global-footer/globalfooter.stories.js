import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
import endorsedLogo from './asu_universitytechoffice_horiz_rgb_white_150ppi.png';
import innovationLockup from './200420-GlobalFooter-No1InnovationLockup.png'

storiesOf('Components/Global Footer', module)
  .addParameters({
    happo: false,
  })

  .add('KitchenSink', () => `
    <div class="wrapper" id="wrapper-endorsed-footer">
      <div class="container" id="endorsed-footer">
        <div class="row">

          <div class="col-md" id="endorsed-logo">
            <img src=${endorsedLogo} title="Endorsed Logo, Arizona State University" alt="Endorsed Logo, Arizona State University"/>
          </div>

          <div class="col-md" id="social-media">
            <ul>
              <li><a href="#" title="Title"><i class="fab fa-facebook-square"></i></a></li>
              <li><a href="#" title="Title"><i class="fab fa-twitter-square"></i></a></li>
              <li><a href="#" title="Title"><i class="fab fa-linkedin"></i></a></li>
              <li><a href="#" title="Title"><i class="fab fa-instagram"></i></a></li>
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
            <h5>Complete Name of College, School or Unit Title Should Go Here</h5>
            <p class="contact-link"><a href="#">Contact Us</a></p>
            <p class="contribute-button"><a href="#" class="btn btn-small btn-gold">Contribute</a></p>
          </div>

          <div class="col-lg flex-footer">
            <h5>Section Header Title</h5>
            <ul>
              <li><a href="#" title="link">Biological and Health Systems Computing</a></li>
              <li><a href="#" title="link">Informatics and Decision Systems Electrical</a></li>
              <li><a href="#" title="link">Computer and Energy Matter</a></li>
              <li><a href="#" title="link">Transport and Energy Sustainability and the Built Environment</a></li>
              <li><a href="#" title="link">The Polytechnic School</a></li>
            </ul>
          </div>

          <div class="col-lg flex-footer">
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

          <div class="col-lg flex-footer">
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

          <div class="col-lg flex-footer">
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

          <div class="col-lg flex-footer">
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

    <div class="wrapper" id="wrapper-footer-innovation">
      <div class="container" id="footer-innovation">
        <div class="row">
          <div class="col">
            <div class="d-flex lockup">
              <img class="order-lg-2" src=${innovationLockup} title="Arizona State University Innovation Badge" alt="Arizona State University is Number 1 in innovation">
              <div class="footer-innovation-links d-flex order-lg-1">
                <a href="#">Maps and Locations</a>
                <a href="#">Jobs</a>
                <a href="#">Directory</a>
                <a href="#">Contact ASU</a>
                <a href="#">My ASU</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="wrapper" id="wrapper-footer-colophon">
      <div class="container" id="footer-colophon">
        <div class="row">
          <div class="col">
            <div class="d-flex colophon">
              <a href="#">Copyright and Trademark</a>
              <a href="#">Accessibility</a>
              <a href="#">Privacy</a>
              <a href="#">Terms of Use</a>
              <a href="#">Emergency</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  `)

  .add('3 Column Footer', () => `
    <div class="wrapper" id="wrapper-endorsed-footer">
      <div class="container" id="endorsed-footer">
        <div class="row">

          <div class="col-md" id="endorsed-logo">
            <img src=${endorsedLogo} title="Endorsed Logo, Arizona State University" alt="Endorsed Logo, Arizona State University"/>
          </div>

          <div class="col-md" id="social-media">
            <ul class="nav">
              <li class="nav-item"><a class="nav-link" href="#" title="Title"><i class="fab fa-facebook-square"></i></a></li>
              <li class="nav-item"><a class="nav-link" href="#" title="Title"><i class="fab fa-twitter-square"></i></a></li>
              <li class="nav-item"><a class="nav-link" href="#" title="Title"><i class="fab fa-linkedin"></i></a></li>
              <li class="nav-item"><a class="nav-link" href="#" title="Title"><i class="fab fa-instagram"></i></a></li>
              <li class="nav-item"><a class="nav-link" href="#" title="Title"><i class="fab fa-youtube-square"></i></a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>

    <div class="wrapper" id="wrapper-footer-columns">
      <div class="container" id="footer-columns">
        <div class="row">

          <div class="col-md" id="info-column">
            <h5>Complete Name of College, School or Unit Title Should Go Here</h5>
            <p class="contact-link"><a href="#">Contact Us</a></p>
            <p class="contribute-button"><a href="#" class="btn btn-small btn-gold">Contribute</a></p>
          </div>

          <div class="col-md flex-footer">
            <h5 class="no-control">Section Header Title</h5>
            <h5 id="columnTwoHeader">
              <a data-toggle="collapse" href="#columnTwo" role="button" aria-expanded="false" aria-controls="#columnTwo">
                Section Header Control
              </a>
            </h5>
            <ul id="columnTwo" class="collapse" aria-labelledby="columnTwoHeader">
              <li><a href="#" title="link">Biological and Health Systems Computing</a></li>
              <li><a href="#" title="link">Informatics and Decision Systems Electrical</a></li>
              <li><a href="#" title="link">Computer and Energy Matter</a></li>
              <li><a href="#" title="link">Transport and Energy Sustainability and the Built Environment</a></li>
              <li><a href="#" title="link">The Polytechnic School</a></li>
            </ul>
          </div>

          <div class="col-md flex-footer">
            <h5 class="no-control">Section Header Title</h5>
            <h5 id="columnThreeHeader">
              <a data-toggle="collapse" href="#columnThree" role="button" aria-expanded="false" aria-controls="#columnThree">
                Section Header Control
              </a>
            </h5>
            <ul id="columnThree" class="collapse" aria-labelledby="columnThreeHeader">
              <li><a href="#" title="link">Biological and Health Systems Computing</a></li>
              <li><a href="#" title="link">Informatics and Decision Systems Electrical</a></li>
              <li><a href="#" title="link">Computer and Energy Matter</a></li>
              <li><a href="#" title="link">Transport and Energy Sustainability and the Built Environment</a></li>
              <li><a href="#" title="link">The Polytechnic School</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>

    <div class="wrapper" id="wrapper-footer-innovation">
      <div class="container" id="footer-innovation">
        <div class="row">
          <div class="col">
            <div class="d-flex lockup">
              <img class="order-lg-2" src=${innovationLockup} title="Arizona State University Innovation Badge" alt="Arizona State University is Number 1 in innovation">
              <div class="footer-innovation-links d-flex order-lg-1">
                <a href="#">Maps and Locations</a>
                <a href="#">Jobs</a>
                <a href="#">Directory</a>
                <a href="#">Contact ASU</a>
                <a href="#">My ASU</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="wrapper" id="wrapper-footer-colophon">
      <div class="container" id="footer-colophon">
        <div class="row">
          <div class="col">
            <div class="d-flex colophon">
              <a href="#">Copyright and Trademark</a>
              <a href="#">Accessibility</a>
              <a href="#">Privacy</a>
              <a href="#">Terms of Use</a>
              <a href="#">Emergency</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  `)
