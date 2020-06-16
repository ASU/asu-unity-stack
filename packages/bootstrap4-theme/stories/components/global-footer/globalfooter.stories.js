import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
import endorsedLogo from './asu_universitytechoffice_horiz_rgb_white_150ppi.png';
import innovationLockup from './200420-GlobalFooter-No1InnovationLockup.png'

storiesOf('Components/Global Footer', module)
  .addParameters({
    happo: false,
  })

  .add('Global elements only', () => `
    <div class="wrapper" id="wrapper-footer-innovation">
      <div class="container" id="footer-innovation">
        <div class="row">
          <div class="col">
            <div class="d-flex footer-innovation-links">
              <img class="order-md-2" src=${innovationLockup} title="Arizona State University Innovation Badge" alt="Arizona State University is Number 1 in innovation">
              <ul class="nav order-md-1">
                <li class="nav-item"><a class="nav-link" href="#">Maps and Locations</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Jobs</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Directory</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Contact ASU</a></li>
                <li class="nav-item"><a class="nav-link" href="#">My ASU</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="wrapper" id="wrapper-footer-colophon">
      <div class="container" id="footer-colophon">
        <div class="row">
          <div class="col">
            <ul class="nav colophon">
              <li class="nav-item"><a class="nav-link" href="#">Copyright and Trademark</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Accessibility</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Privacy</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Terms of Use</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Emergency</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  `)

  .add('Zero columns', () => `
    <div class="wrapper" id="wrapper-endorsed-footer">
      <div class="container" id="endorsed-footer">
        <div class="row">

          <div class="col-md" id="endorsed-logo">
            <img src=${endorsedLogo} title="Endorsed Logo, Arizona State University" alt="Endorsed Logo, Arizona State University"/>
          </div>

          <div class="col-md" id="social-media">
            <ul class="nav">
              <li class="nav-item"><a class="nav-link" href="#" title="Title"><span title="Facebook Social Media Icon" class="fab fa-facebook-square"></span></a></li>
              <li class="nav-item"><a class="nav-link" href="#" title="Title"><span title="Twitter Social Media Icon" class="fab fa-twitter-square"></span></a></li>
              <li class="nav-item"><a class="nav-link" href="#" title="Title"><span title="LinkedIn Social Media Icon" class="fab fa-linkedin"></span></a></li>
              <li class="nav-item"><a class="nav-link" href="#" title="Title"><span title="Instagram Social Media Icon" class="fab fa-instagram-square"></span></a></li>
              <li class="nav-item"><a class="nav-link" href="#" title="Title"><span title="YouTube Social Media Icon" class="fab fa-youtube-square"></span></a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>

    <div class="wrapper" id="wrapper-footer-innovation">
      <div class="container" id="footer-innovation">
        <div class="row">
          <div class="col">
            <div class="d-flex footer-innovation-links">
              <img class="order-md-2" src=${innovationLockup} title="Arizona State University Innovation Badge" alt="Arizona State University is Number 1 in innovation">
              <ul class="nav order-md-1">
                <li class="nav-item"><a class="nav-link" href="#">Maps and Locations</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Jobs</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Directory</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Contact ASU</a></li>
                <li class="nav-item"><a class="nav-link" href="#">My ASU</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="wrapper" id="wrapper-footer-colophon">
      <div class="container" id="footer-colophon">
        <div class="row">
          <div class="col">
            <ul class="nav colophon">
              <li class="nav-item"><a class="nav-link" href="#">Copyright and Trademark</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Accessibility</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Privacy</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Terms of Use</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Emergency</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  `)

  .add('One column', () => `
    <div class="wrapper" id="wrapper-endorsed-footer">
      <div class="container" id="endorsed-footer">
        <div class="row">

          <div class="col-md" id="endorsed-logo">
            <img src=${endorsedLogo} title="Endorsed Logo, Arizona State University" alt="Endorsed Logo, Arizona State University"/>
          </div>

          <div class="col-md" id="social-media">
            <ul class="nav">
              <li class="nav-item"><a class="nav-link" href="#" title="Title"><span title="Facebook Social Media Icon" class="fab fa-facebook-square"></span></a></li>
              <li class="nav-item"><a class="nav-link" href="#" title="Title"><span title="Twitter Social Media Icon" class="fab fa-twitter-square"></span></a></li>
              <li class="nav-item"><a class="nav-link" href="#" title="Title"><span title="LinkedIn Social Media Icon" class="fab fa-linkedin"></span></a></li>
              <li class="nav-item"><a class="nav-link" href="#" title="Title"><span title="Instagram Social Media Icon" class="fab fa-instagram-square"></span></a></li>
              <li class="nav-item"><a class="nav-link" href="#" title="Title"><span title="YouTube Social Media Icon" class="fab fa-youtube-square"></span></a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>

    <div class="wrapper" id="wrapper-footer-columns">
      <div class="container" id="footer-columns">
        <div class="row">

          <div class="col-md-3" id="info-column">
            <h5>Complete Name of College, School or Unit Title Should Go Here</h5>
            <p class="contact-link"><a href="#">Contact Us</a></p>
            <p class="contribute-button"><a href="#" class="btn btn-small btn-gold">Contribute</a></p>
          </div>

        </div>
      </div>
    </div>

    <div class="wrapper" id="wrapper-footer-innovation">
      <div class="container" id="footer-innovation">
        <div class="row">
          <div class="col">
            <div class="d-flex footer-innovation-links">
              <img class="order-md-2" src=${innovationLockup} title="Arizona State University Innovation Badge" alt="Arizona State University is Number 1 in innovation">
              <ul class="nav order-md-1">
                <li class="nav-item"><a class="nav-link" href="#">Maps and Locations</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Jobs</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Directory</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Contact ASU</a></li>
                <li class="nav-item"><a class="nav-link" href="#">My ASU</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="wrapper" id="wrapper-footer-colophon">
      <div class="container" id="footer-colophon">
        <div class="row">
          <div class="col">
            <ul class="nav colophon">
              <li class="nav-item"><a class="nav-link" href="#">Copyright and Trademark</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Accessibility</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Privacy</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Terms of Use</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Emergency</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  `)

  .add('One column. No logo / social', () => `

    <div class="wrapper" id="wrapper-footer-columns">
      <div class="container" id="footer-columns">
        <div class="row">

          <div class="col-md-3" id="info-column">
            <h5>Complete Name of College, School or Unit Title Should Go Here</h5>
            <p class="contact-link"><a href="#">Contact Us</a></p>
            <p class="contribute-button"><a href="#" class="btn btn-small btn-gold">Contribute</a></p>
          </div>

        </div>
      </div>
    </div>

    <div class="wrapper" id="wrapper-footer-innovation">
      <div class="container" id="footer-innovation">
        <div class="row">
          <div class="col">
            <div class="d-flex footer-innovation-links">
              <img class="order-md-2" src=${innovationLockup} title="Arizona State University Innovation Badge" alt="Arizona State University is Number 1 in innovation">
              <ul class="nav order-md-1">
                <li class="nav-item"><a class="nav-link" href="#">Maps and Locations</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Jobs</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Directory</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Contact ASU</a></li>
                <li class="nav-item"><a class="nav-link" href="#">My ASU</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="wrapper" id="wrapper-footer-colophon">
      <div class="container" id="footer-colophon">
        <div class="row">
          <div class="col">
            <ul class="nav colophon">
              <li class="nav-item"><a class="nav-link" href="#">Copyright and Trademark</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Accessibility</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Privacy</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Terms of Use</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Emergency</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  `)

  .add('Two columns', () => `
    <div class="wrapper" id="wrapper-endorsed-footer">
      <div class="container" id="endorsed-footer">
        <div class="row">

          <div class="col-md" id="endorsed-logo">
            <img src=${endorsedLogo} title="Endorsed Logo, Arizona State University" alt="Endorsed Logo, Arizona State University"/>
          </div>

          <div class="col-md" id="social-media">
            <ul class="nav">
              <li class="nav-item"><a class="nav-link" href="#" title="Title"><span title="Facebook Social Media Icon" class="fab fa-facebook-square"></span></a></li>
              <li class="nav-item"><a class="nav-link" href="#" title="Title"><span title="Twitter Social Media Icon" class="fab fa-twitter-square"></span></a></li>
              <li class="nav-item"><a class="nav-link" href="#" title="Title"><span title="LinkedIn Social Media Icon" class="fab fa-linkedin"></span></a></li>
              <li class="nav-item"><a class="nav-link" href="#" title="Title"><span title="Instagram Social Media Icon" class="fab fa-instagram-square"></span></a></li>
              <li class="nav-item"><a class="nav-link" href="#" title="Title"><span title="YouTube Social Media Icon" class="fab fa-youtube-square"></span></a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>

    <div class="wrapper" id="wrapper-footer-columns">
      <div class="container" id="footer-columns">
        <div class="row">

          <div class="col-md-3" id="info-column">
            <h5>Complete Name of College, School or Unit Title Should Go Here</h5>
            <p class="contact-link"><a href="#">Contact Us</a></p>
            <p class="contribute-button"><a href="#" class="btn btn-small btn-gold">Contribute</a></p>
          </div>

          <div class="col-md flex-footer">
            <h5 class="no-control">Section Header Title</h5>
            <h5 id="columnTwoHeader" class="control">
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

        </div>
      </div>
    </div>

    <div class="wrapper" id="wrapper-footer-innovation">
      <div class="container" id="footer-innovation">
        <div class="row">
          <div class="col">
            <div class="d-flex footer-innovation-links">
              <img class="order-md-2" src=${innovationLockup} title="Arizona State University Innovation Badge" alt="Arizona State University is Number 1 in innovation">
              <ul class="nav order-md-1">
                <li class="nav-item"><a class="nav-link" href="#">Maps and Locations</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Jobs</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Directory</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Contact ASU</a></li>
                <li class="nav-item"><a class="nav-link" href="#">My ASU</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="wrapper" id="wrapper-footer-colophon">
      <div class="container" id="footer-colophon">
        <div class="row">
          <div class="col">
            <ul class="nav colophon">
              <li class="nav-item"><a class="nav-link" href="#">Copyright and Trademark</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Accessibility</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Privacy</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Terms of Use</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Emergency</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  `)

  .add('Three columns', () => `
    <div class="wrapper" id="wrapper-endorsed-footer">
      <div class="container" id="endorsed-footer">
        <div class="row">

          <div class="col-md" id="endorsed-logo">
            <img src=${endorsedLogo} title="Endorsed Logo, Arizona State University" alt="Endorsed Logo, Arizona State University"/>
          </div>

          <div class="col-md" id="social-media">
            <ul class="nav">
              <li class="nav-item"><a class="nav-link" href="#" title="Title"><span title="Facebook Social Media Icon" class="fab fa-facebook-square"></span></a></li>
              <li class="nav-item"><a class="nav-link" href="#" title="Title"><span title="Twitter Social Media Icon" class="fab fa-twitter-square"></span></a></li>
              <li class="nav-item"><a class="nav-link" href="#" title="Title"><span title="LinkedIn Social Media Icon" class="fab fa-linkedin"></span></a></li>
              <li class="nav-item"><a class="nav-link" href="#" title="Title"><span title="Instagram Social Media Icon" class="fab fa-instagram-square"></span></a></li>
              <li class="nav-item"><a class="nav-link" href="#" title="Title"><span title="YouTube Social Media Icon" class="fab fa-youtube-square"></span></a></li>
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
            <h5 id="columnTwoHeader" class="control">
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
            <h5 id="columnThreeHeader" class="control">
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
            <div class="d-flex footer-innovation-links">
              <img class="order-md-2" src=${innovationLockup} title="Arizona State University Innovation Badge" alt="Arizona State University is Number 1 in innovation">
              <ul class="nav order-md-1">
                <li class="nav-item"><a class="nav-link" href="#">Maps and Locations</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Jobs</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Directory</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Contact ASU</a></li>
                <li class="nav-item"><a class="nav-link" href="#">My ASU</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="wrapper" id="wrapper-footer-colophon">
      <div class="container" id="footer-colophon">
        <div class="row">
          <div class="col">
            <ul class="nav colophon">
              <li class="nav-item"><a class="nav-link" href="#">Copyright and Trademark</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Accessibility</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Privacy</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Terms of Use</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Emergency</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  `)

  .add('Four columns', () => `
    <div class="wrapper" id="wrapper-endorsed-footer">
      <div class="container" id="endorsed-footer">
        <div class="row">

          <div class="col-md" id="endorsed-logo">
            <img src=${endorsedLogo} title="Endorsed Logo, Arizona State University" alt="Endorsed Logo, Arizona State University"/>
          </div>

          <div class="col-md" id="social-media">
            <ul class="nav">
              <li class="nav-item"><a class="nav-link" href="#" title="Title"><span title="Facebook Social Media Icon" class="fab fa-facebook-square"></span></a></li>
              <li class="nav-item"><a class="nav-link" href="#" title="Title"><span title="Twitter Social Media Icon" class="fab fa-twitter-square"></span></a></li>
              <li class="nav-item"><a class="nav-link" href="#" title="Title"><span title="LinkedIn Social Media Icon" class="fab fa-linkedin"></span></a></li>
              <li class="nav-item"><a class="nav-link" href="#" title="Title"><span title="Instagram Social Media Icon" class="fab fa-instagram-square"></span></a></li>
              <li class="nav-item"><a class="nav-link" href="#" title="Title"><span title="YouTube Social Media Icon" class="fab fa-youtube-square"></span></a></li>
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
            <h5 id="columnTwoHeader" class="control">
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
            <h5 id="columnThreeHeader" class="control">
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

          <div class="col-md flex-footer">
            <h5 class="no-control">Section Header Title</h5>
            <h5 id="columnFourHeader" class="control">
              <a data-toggle="collapse" href="#columnFour" role="button" aria-expanded="false" aria-controls="#columnFour">
                Section Header Control
              </a>
            </h5>
            <ul id="columnFour" class="collapse" aria-labelledby="columnFourHeader">
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
            <div class="d-flex footer-innovation-links">
              <img class="order-md-2" src=${innovationLockup} title="Arizona State University Innovation Badge" alt="Arizona State University is Number 1 in innovation">
              <ul class="nav order-md-1">
                <li class="nav-item"><a class="nav-link" href="#">Maps and Locations</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Jobs</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Directory</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Contact ASU</a></li>
                <li class="nav-item"><a class="nav-link" href="#">My ASU</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="wrapper" id="wrapper-footer-colophon">
      <div class="container" id="footer-colophon">
        <div class="row">
          <div class="col">
            <ul class="nav colophon">
              <li class="nav-item"><a class="nav-link" href="#">Copyright and Trademark</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Accessibility</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Privacy</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Terms of Use</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Emergency</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  `)

  .add('The Zen Master & The Hot Dog Vendor', () => `
    <div class="wrapper" id="wrapper-endorsed-footer">
      <div class="container" id="endorsed-footer">
        <div class="row">

          <div class="col-md" id="endorsed-logo">
            <img src=${endorsedLogo} title="Endorsed Logo, Arizona State University" alt="Endorsed Logo, Arizona State University"/>
          </div>

          <div class="col-md" id="social-media">
            <ul class="nav">
              <li class="nav-item"><a class="nav-link" href="#" title="Title"><span title="Facebook Social Media Icon" class="fab fa-facebook-square"></span></a></li>
              <li class="nav-item"><a class="nav-link" href="#" title="Title"><span title="Twitter Social Media Icon" class="fab fa-twitter-square"></span></a></li>
              <li class="nav-item"><a class="nav-link" href="#" title="Title"><span title="LinkedIn Social Media Icon" class="fab fa-linkedin"></span></a></li>
              <li class="nav-item"><a class="nav-link" href="#" title="Title"><span title="Instagram Social Media Icon" class="fab fa-instagram-square"></span></a></li>
              <li class="nav-item"><a class="nav-link" href="#" title="Title"><span title="YouTube Social Media Icon" class="fab fa-youtube-square"></span></a></li>
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
            <h5 id="columnTwoHeader" class="control">
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
            <h5 id="columnThreeHeader" class="control">
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

          <div class="col-md flex-footer">
            <h5 class="no-control">Section Header Title</h5>
            <h5 id="columnFourHeader" class="control">
              <a data-toggle="collapse" href="#columnFour" role="button" aria-expanded="false" aria-controls="#columnFour">
                Section Header Control
              </a>
            </h5>
            <ul id="columnFour" class="collapse" aria-labelledby="columnFourHeader">
              <li><a href="#" title="link">Biological and Health Systems Computing</a></li>
              <li><a href="#" title="link">Informatics and Decision Systems Electrical</a></li>
              <li><a href="#" title="link">Computer and Energy Matter</a></li>
              <li><a href="#" title="link">Transport and Energy Sustainability and the Built Environment</a></li>
              <li><a href="#" title="link">The Polytechnic School</a></li>
            </ul>
          </div>

          <div class="col-md flex-footer">
            <h5 class="no-control">Section Header Title</h5>
            <h5 id="columnFiveHeader" class="control">
              <a data-toggle="collapse" href="#columnFive" role="button" aria-expanded="false" aria-controls="#columnFive">
                Section Header Control
              </a>
            </h5>
            <ul id="columnFive" class="collapse" aria-labelledby="columnFiveHeader">
              <li><a href="#" title="link">Biological and Health Systems Computing</a></li>
              <li><a href="#" title="link">Informatics and Decision Systems Electrical</a></li>
              <li><a href="#" title="link">Computer and Energy Matter</a></li>
              <li><a href="#" title="link">Transport and Energy Sustainability and the Built Environment</a></li>
              <li><a href="#" title="link">The Polytechnic School</a></li>
            </ul>
          </div>

          <div class="col-md flex-footer">
            <h5 class="no-control">The Zen Master and the Hot Dog Vendor</h5>
            <h5 id="columnSixHeader" class="control">
              <a data-toggle="collapse" href="#columnSix" role="button" aria-expanded="false" aria-controls="#columnSix">
                The Zen Master and the Hot Dog Vendor
              </a>
            </h5>
            <ul id="columnSix" class="collapse" aria-labelledby="columnSixHeader">
              <li><a href="#" title="link">A Zen master visiting</a></li>
              <li><a href="#" title="link">New York City</a></li>
              <li><a href="#" title="link">Goes up to a hot dog vendor and says</a></li>
              <li><a href="#" title="link">Make me one with everything</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>

    <div class="wrapper" id="wrapper-footer-innovation">
      <div class="container" id="footer-innovation">
        <div class="row">
          <div class="col">
            <div class="d-flex footer-innovation-links">
              <img class="order-md-2" src=${innovationLockup} title="Arizona State University Innovation Badge" alt="Arizona State University is Number 1 in innovation">
              <ul class="nav order-md-1">
                <li class="nav-item"><a class="nav-link" href="#">Maps and Locations</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Jobs</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Directory</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Contact ASU</a></li>
                <li class="nav-item"><a class="nav-link" href="#">My ASU</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="wrapper" id="wrapper-footer-colophon">
      <div class="container" id="footer-colophon">
        <div class="row">
          <div class="col">
            <ul class="nav colophon">
              <li class="nav-item"><a class="nav-link" href="#">Copyright and Trademark</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Accessibility</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Privacy</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Terms of Use</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Emergency</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  `)

