import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
import endorsedLogo from './asu_universitytechoffice_horiz_rgb_white_150ppi.png';
import innovationLockup from './200420-GlobalFooter-No1InnovationLockup.png'

storiesOf('Components/Global Footer', module)
  .addParameters({
    happo: false,
  })

  .add('Global elements only', () => `
  <footer role="contentinfo">

    <div class="wrapper" id="wrapper-footer-innovation">
      <div class="container" id="footer-innovation">
        <div class="row">
          <div class="col">
            <div class="d-flex footer-innovation-links">
              <img src=${innovationLockup} alt="Number one in the U.S. for innovation. #1 ASU, #2 Stanford, #3 MIT. - U.S. News and World Report, 5 years, 2016-2020">
              <nav class="nav" aria-label="University Services">
                <a class="nav-link" href="https://www.asu.edu/map/">Maps and Locations</a>
                <a class="nav-link" href="https://www.asu.edu/asujobs">Jobs</a>
                <a class="nav-link" href="https://isearch.asu.edu/">Directory</a>
                <a class="nav-link" href="https://www.asu.edu/contactasu/">Contact ASU</a>
                <a class="nav-link" href="https://my.asu.edu/">My ASU</a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="wrapper" id="wrapper-footer-colophon">
      <div class="container" id="footer-colophon">
        <div class="row">
          <div class="col">
            <nav class="nav colophon" aria-label="University Legal and Compliance">
              <a class="nav-link" href="https://www.asu.edu/copyright/">Copyright and Trademark</a>
              <a class="nav-link" href="https://www.asu.edu/accessibility/">Accessibility</a>
              <a class="nav-link" href="https://www.asu.edu/privacy/">Privacy</a>
              <a class="nav-link" href="https://www.asu.edu/tou/">Terms of Use</a>
              <a class="nav-link" href="https://www.asu.edu/emergency/">Emergency</a>
            </nav>
          </div>
        </div>
      </div>
    </div>

  </footer>

  `)

  .add('Zero columns', () => `
  <footer role="contentinfo">
    <div class="wrapper" id="wrapper-endorsed-footer">
      <div class="container" id="endorsed-footer">
        <div class="row">

          <div class="col-md" id="endorsed-logo">
            <img src=${endorsedLogo} alt="ASU University Technology Office Arizona State University."/>
          </div>

          <div class="col-md" id="social-media">
            <nav class="nav" aria-label="Social Media">
              <a class="nav-link" href="#"><span title="Facebook Social Media Icon" class="fab fa-facebook-square"></span></a>
              <a class="nav-link" href="#"><span title="Twitter Social Media Icon" class="fab fa-twitter-square"></span></a>
              <a class="nav-link" href="#"><span title="LinkedIn Social Media Icon" class="fab fa-linkedin"></span></a>
              <a class="nav-link" href="#"><span title="Instagram Social Media Icon" class="fab fa-instagram-square"></span></a>
              <a class="nav-link" href="#"><span title="YouTube Social Media Icon" class="fab fa-youtube-square"></span></a>
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
              <img src=${innovationLockup} alt="Number one in the U.S. for innovation. #1 ASU, #2 Stanford, #3 MIT. - U.S. News and World Report, 5 years, 2016-2020">
              <nav class="nav" aria-label="University Services">
                <a class="nav-link" href="https://www.asu.edu/map/">Maps and Locations</a>
                <a class="nav-link" href="https://www.asu.edu/asujobs">Jobs</a>
                <a class="nav-link" href="https://isearch.asu.edu/">Directory</a>
                <a class="nav-link" href="https://www.asu.edu/contactasu/">Contact ASU</a>
                <a class="nav-link" href="https://my.asu.edu/">My ASU</a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="wrapper" id="wrapper-footer-colophon">
      <div class="container" id="footer-colophon">
        <div class="row">
          <div class="col">
            <nav class="nav colophon" aria-label="University Legal and Compliance">
              <a class="nav-link" href="https://www.asu.edu/copyright/">Copyright and Trademark</a>
              <a class="nav-link" href="https://www.asu.edu/accessibility/">Accessibility</a>
              <a class="nav-link" href="https://www.asu.edu/privacy/">Privacy</a>
              <a class="nav-link" href="https://www.asu.edu/tou/">Terms of Use</a>
              <a class="nav-link" href="https://www.asu.edu/emergency/">Emergency</a>
            </nav>
          </div>
        </div>
      </div>
    </div>

  </footer>
  `)

  .add('One column', () => `
  <footer role="contentinfo">
    <div class="wrapper" id="wrapper-endorsed-footer">
      <div class="container" id="endorsed-footer">
        <div class="row">

          <div class="col-md" id="endorsed-logo">
            <img src=${endorsedLogo} alt="ASU University Technology Office Arizona State University."/>
          </div>

          <div class="col-md" id="social-media">
            <nav class="nav" aria-label="Social Media">
              <a class="nav-link" href="#"><span title="Facebook Social Media Icon" class="fab fa-facebook-square"></span></a>
              <a class="nav-link" href="#"><span title="Twitter Social Media Icon" class="fab fa-twitter-square"></span></a>
              <a class="nav-link" href="#"><span title="LinkedIn Social Media Icon" class="fab fa-linkedin"></span></a>
              <a class="nav-link" href="#"><span title="Instagram Social Media Icon" class="fab fa-instagram-square"></span></a>
              <a class="nav-link" href="#"><span title="YouTube Social Media Icon" class="fab fa-youtube-square"></span></a>
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
              <img src=${innovationLockup} alt="Number one in the U.S. for innovation. #1 ASU, #2 Stanford, #3 MIT. - U.S. News and World Report, 5 years, 2016-2020">
              <nav class="nav" aria-label="University Services">
                <a class="nav-link" href="https://www.asu.edu/map/">Maps and Locations</a>
                <a class="nav-link" href="https://www.asu.edu/asujobs">Jobs</a>
                <a class="nav-link" href="https://isearch.asu.edu/">Directory</a>
                <a class="nav-link" href="https://www.asu.edu/contactasu/">Contact ASU</a>
                <a class="nav-link" href="https://my.asu.edu/">My ASU</a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="wrapper" id="wrapper-footer-colophon">
      <div class="container" id="footer-colophon">
        <div class="row">
          <div class="col">
            <nav class="nav colophon" aria-label="University Legal and Compliance">
              <a class="nav-link" href="https://www.asu.edu/copyright/">Copyright and Trademark</a>
              <a class="nav-link" href="https://www.asu.edu/accessibility/">Accessibility</a>
              <a class="nav-link" href="https://www.asu.edu/privacy/">Privacy</a>
              <a class="nav-link" href="https://www.asu.edu/tou/">Terms of Use</a>
              <a class="nav-link" href="https://www.asu.edu/emergency/">Emergency</a>
            </nav>
          </div>
        </div>
      </div>
    </div>

  </footer>
  `)

  .add('One column. No logo / social', () => `
  <footer role="contentinfo">

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
              <img src=${innovationLockup} alt="Number one in the U.S. for innovation. #1 ASU, #2 Stanford, #3 MIT. - U.S. News and World Report, 5 years, 2016-2020">
              <nav class="nav" aria-label="University Services">
                <a class="nav-link" href="https://www.asu.edu/map/">Maps and Locations</a>
                <a class="nav-link" href="https://www.asu.edu/asujobs">Jobs</a>
                <a class="nav-link" href="https://isearch.asu.edu/">Directory</a>
                <a class="nav-link" href="https://www.asu.edu/contactasu/">Contact ASU</a>
                <a class="nav-link" href="https://my.asu.edu/">My ASU</a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="wrapper" id="wrapper-footer-colophon">
      <div class="container" id="footer-colophon">
        <div class="row">
          <div class="col">
            <nav class="nav colophon" aria-label="University Legal and Compliance">
              <a class="nav-link" href="https://www.asu.edu/copyright/">Copyright and Trademark</a>
              <a class="nav-link" href="https://www.asu.edu/accessibility/">Accessibility</a>
              <a class="nav-link" href="https://www.asu.edu/privacy/">Privacy</a>
              <a class="nav-link" href="https://www.asu.edu/tou/">Terms of Use</a>
              <a class="nav-link" href="https://www.asu.edu/emergency/">Emergency</a>
            </nav>
          </div>
        </div>
      </div>
    </div>

  </footer>
  `)

  .add('Two columns', () => `
  <footer role="contentinfo">
    <div class="wrapper" id="wrapper-endorsed-footer">
      <div class="container" id="endorsed-footer">
        <div class="row">

          <div class="col-md" id="endorsed-logo">
            <img src=${endorsedLogo} alt="ASU University Technology Office Arizona State University."/>
          </div>

          <div class="col-md" id="social-media">
            <nav class="nav" aria-label="Social Media">
              <a class="nav-link" href="#"><span title="Facebook Social Media Icon" class="fab fa-facebook-square"></span></a>
              <a class="nav-link" href="#"><span title="Twitter Social Media Icon" class="fab fa-twitter-square"></span></a>
              <a class="nav-link" href="#"><span title="LinkedIn Social Media Icon" class="fab fa-linkedin"></span></a>
              <a class="nav-link" href="#"><span title="Instagram Social Media Icon" class="fab fa-instagram-square"></span></a>
              <a class="nav-link" href="#"><span title="YouTube Social Media Icon" class="fab fa-youtube-square"></span></a>
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
            <h5 id="columnTwoHeader" class="no-control">Section Header Title</h5>
            <h5 class="control" aria-hidden="true">
              <a data-toggle="collapse" href="#columnTwo" role="button">
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
              <img src=${innovationLockup} alt="Number one in the U.S. for innovation. #1 ASU, #2 Stanford, #3 MIT. - U.S. News and World Report, 5 years, 2016-2020">
              <nav class="nav" aria-label="University Services">
                <a class="nav-link" href="https://www.asu.edu/map/">Maps and Locations</a>
                <a class="nav-link" href="https://www.asu.edu/asujobs">Jobs</a>
                <a class="nav-link" href="https://isearch.asu.edu/">Directory</a>
                <a class="nav-link" href="https://www.asu.edu/contactasu/">Contact ASU</a>
                <a class="nav-link" href="https://my.asu.edu/">My ASU</a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="wrapper" id="wrapper-footer-colophon">
      <div class="container" id="footer-colophon">
        <div class="row">
          <div class="col">
            <nav class="nav colophon" aria-label="University Legal and Compliance">
              <a class="nav-link" href="https://www.asu.edu/copyright/">Copyright and Trademark</a>
              <a class="nav-link" href="https://www.asu.edu/accessibility/">Accessibility</a>
              <a class="nav-link" href="https://www.asu.edu/privacy/">Privacy</a>
              <a class="nav-link" href="https://www.asu.edu/tou/">Terms of Use</a>
              <a class="nav-link" href="https://www.asu.edu/emergency/">Emergency</a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </footer>
  `)

  .add('Three columns', () => `
  <footer role="contentinfo">
    <div class="wrapper" id="wrapper-endorsed-footer">
      <div class="container" id="endorsed-footer">
        <div class="row">

          <div class="col-md" id="endorsed-logo">
            <img src=${endorsedLogo} alt="ASU University Technology Office Arizona State University."/>
          </div>

          <div class="col-md" id="social-media">
            <nav class="nav" aria-label="Social Media">
              <a class="nav-link" href="#"><span title="Facebook Social Media Icon" class="fab fa-facebook-square"></span></a>
              <a class="nav-link" href="#"><span title="Twitter Social Media Icon" class="fab fa-twitter-square"></span></a>
              <a class="nav-link" href="#"><span title="LinkedIn Social Media Icon" class="fab fa-linkedin"></span></a>
              <a class="nav-link" href="#"><span title="Instagram Social Media Icon" class="fab fa-instagram-square"></span></a>
              <a class="nav-link" href="#"><span title="YouTube Social Media Icon" class="fab fa-youtube-square"></span></a>
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
            <h5 id="columnTwoHeader" class="no-control">Section Header Title</h5>
            <h5 class="control" aria-hidden="true">
              <a data-toggle="collapse" href="#columnTwo" role="button">
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
            <h5 id="columnThreeHeader" class="no-control">Section Header Title</h5>
            <h5 class="control" aria-hidden="true">
              <a data-toggle="collapse" href="#columnThree" role="button">
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
              <img src=${innovationLockup} alt="Number one in the U.S. for innovation. #1 ASU, #2 Stanford, #3 MIT. - U.S. News and World Report, 5 years, 2016-2020">
              <nav class="nav" aria-label="University Services">
                <a class="nav-link" href="https://www.asu.edu/map/">Maps and Locations</a>
                <a class="nav-link" href="https://www.asu.edu/asujobs">Jobs</a>
                <a class="nav-link" href="https://isearch.asu.edu/">Directory</a>
                <a class="nav-link" href="https://www.asu.edu/contactasu/">Contact ASU</a>
                <a class="nav-link" href="https://my.asu.edu/">My ASU</a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="wrapper" id="wrapper-footer-colophon">
      <div class="container" id="footer-colophon">
        <div class="row">
          <div class="col">
            <nav class="nav colophon" aria-label="University Legal and Compliance">
              <a class="nav-link" href="https://www.asu.edu/copyright/">Copyright and Trademark</a>
              <a class="nav-link" href="https://www.asu.edu/accessibility/">Accessibility</a>
              <a class="nav-link" href="https://www.asu.edu/privacy/">Privacy</a>
              <a class="nav-link" href="https://www.asu.edu/tou/">Terms of Use</a>
              <a class="nav-link" href="https://www.asu.edu/emergency/">Emergency</a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </footer>
  `)

  .add('Four columns', () => `
  <footer role="contentinfo">
    <div class="wrapper" id="wrapper-endorsed-footer">
      <div class="container" id="endorsed-footer">
        <div class="row">

          <div class="col-md" id="endorsed-logo">
            <img src=${endorsedLogo} alt="ASU University Technology Office Arizona State University."/>
          </div>

          <div class="col-md" id="social-media">
            <nav class="nav" aria-label="Social Media">
              <a class="nav-link" href="#"><span title="Facebook Social Media Icon" class="fab fa-facebook-square"></span></a>
              <a class="nav-link" href="#"><span title="Twitter Social Media Icon" class="fab fa-twitter-square"></span></a>
              <a class="nav-link" href="#"><span title="LinkedIn Social Media Icon" class="fab fa-linkedin"></span></a>
              <a class="nav-link" href="#"><span title="Instagram Social Media Icon" class="fab fa-instagram-square"></span></a>
              <a class="nav-link" href="#"><span title="YouTube Social Media Icon" class="fab fa-youtube-square"></span></a>
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
            <h5 id="columnTwoHeader" class="no-control">Section Header Title</h5>
            <h5 class="control" aria-hidden="true">
              <a data-toggle="collapse" href="#columnTwo" role="button">
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
            <h5 id="columnThreeHeader" class="no-control">Section Header Title</h5>
            <h5 class="control" aria-hidden="true">
              <a data-toggle="collapse" href="#columnThree" role="button">
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
            <h5 id="columnFourHeader" class="no-control">Section Header Title</h5>
            <h5 class="control" aria-hidden="true">
              <a data-toggle="collapse" href="#columnFour" role="button">
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
              <img src=${innovationLockup} alt="Number one in the U.S. for innovation. #1 ASU, #2 Stanford, #3 MIT. - U.S. News and World Report, 5 years, 2016-2020">
              <nav class="nav" aria-label="University Services">
                <a class="nav-link" href="https://www.asu.edu/map/">Maps and Locations</a>
                <a class="nav-link" href="https://www.asu.edu/asujobs">Jobs</a>
                <a class="nav-link" href="https://isearch.asu.edu/">Directory</a>
                <a class="nav-link" href="https://www.asu.edu/contactasu/">Contact ASU</a>
                <a class="nav-link" href="https://my.asu.edu/">My ASU</a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="wrapper" id="wrapper-footer-colophon">
      <div class="container" id="footer-colophon">
        <div class="row">
          <div class="col">
            <nav class="nav colophon" aria-label="University Legal and Compliance">
              <a class="nav-link" href="https://www.asu.edu/copyright/">Copyright and Trademark</a>
              <a class="nav-link" href="https://www.asu.edu/accessibility/">Accessibility</a>
              <a class="nav-link" href="https://www.asu.edu/privacy/">Privacy</a>
              <a class="nav-link" href="https://www.asu.edu/tou/">Terms of Use</a>
              <a class="nav-link" href="https://www.asu.edu/emergency/">Emergency</a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </footer>
  `)

  .add('Five columns!', () => `
  <footer role="contentinfo">
    <div class="wrapper" id="wrapper-endorsed-footer">
      <div class="container" id="endorsed-footer">
        <div class="row">

          <div class="col-md" id="endorsed-logo">
            <img src=${endorsedLogo} alt="ASU University Technology Office Arizona State University."/>
          </div>

          <div class="col-md" id="social-media">
            <nav class="nav" aria-label="Social Media">
              <a class="nav-link" href="#"><span title="Facebook Social Media Icon" class="fab fa-facebook-square"></span></a>
              <a class="nav-link" href="#"><span title="Twitter Social Media Icon" class="fab fa-twitter-square"></span></a>
              <a class="nav-link" href="#"><span title="LinkedIn Social Media Icon" class="fab fa-linkedin"></span></a>
              <a class="nav-link" href="#"><span title="Instagram Social Media Icon" class="fab fa-instagram-square"></span></a>
              <a class="nav-link" href="#"><span title="YouTube Social Media Icon" class="fab fa-youtube-square"></span></a>
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
            <h5 id="columnTwoHeader" class="no-control">Section Header Title</h5>
            <h5 class="control" aria-hidden="true">
              <a data-toggle="collapse" href="#columnTwo" role="button">
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
            <h5 id="columnThreeHeader" class="no-control">Section Header Title</h5>
            <h5 class="control" aria-hidden="true">
              <a data-toggle="collapse" href="#columnThree" role="button">
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
            <h5 id="columnFourHeader" class="no-control">Section Header Title</h5>
            <h5 class="control" aria-hidden="true">
              <a data-toggle="collapse" href="#columnFour" role="button">
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
            <h5 id="columnFiveHeader" class="no-control">Section Header Title</h5>
            <h5 class="control" aria-hidden="true">
              <a data-toggle="collapse" href="#columnFive" role="button">
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

        </div>
      </div>
    </div>

    <div class="wrapper" id="wrapper-footer-innovation">
      <div class="container" id="footer-innovation">
        <div class="row">
          <div class="col">
            <div class="d-flex footer-innovation-links">
              <img src=${innovationLockup} alt="Number one in the U.S. for innovation. #1 ASU, #2 Stanford, #3 MIT. - U.S. News and World Report, 5 years, 2016-2020">
              <nav class="nav" aria-label="University Services">
                <a class="nav-link" href="https://www.asu.edu/map/">Maps and Locations</a>
                <a class="nav-link" href="https://www.asu.edu/asujobs">Jobs</a>
                <a class="nav-link" href="https://isearch.asu.edu/">Directory</a>
                <a class="nav-link" href="https://www.asu.edu/contactasu/">Contact ASU</a>
                <a class="nav-link" href="https://my.asu.edu/">My ASU</a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="wrapper" id="wrapper-footer-colophon">
      <div class="container" id="footer-colophon">
        <div class="row">
          <div class="col">
            <nav class="nav colophon" aria-label="University Legal and Compliance">
              <a class="nav-link" href="https://www.asu.edu/copyright/">Copyright and Trademark</a>
              <a class="nav-link" href="https://www.asu.edu/accessibility/">Accessibility</a>
              <a class="nav-link" href="https://www.asu.edu/privacy/">Privacy</a>
              <a class="nav-link" href="https://www.asu.edu/tou/">Terms of Use</a>
              <a class="nav-link" href="https://www.asu.edu/emergency/">Emergency</a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </footer>
  `)

  .add('The Zen Master & The Hot Dog Vendor', () => `
  <footer role="contentinfo">
    <div class="wrapper" id="wrapper-endorsed-footer">
      <div class="container" id="endorsed-footer">
        <div class="row">

          <div class="col-md" id="endorsed-logo">
            <img src=${endorsedLogo} alt="ASU University Technology Office Arizona State University."/>
          </div>

          <div class="col-md" id="social-media">
            <nav class="nav" aria-label="Social Media">
              <a class="nav-link" href="#"><span title="Facebook Social Media Icon" class="fab fa-facebook-square"></span></a>
              <a class="nav-link" href="#"><span title="Twitter Social Media Icon" class="fab fa-twitter-square"></span></a>
              <a class="nav-link" href="#"><span title="LinkedIn Social Media Icon" class="fab fa-linkedin"></span></a>
              <a class="nav-link" href="#"><span title="Instagram Social Media Icon" class="fab fa-instagram-square"></span></a>
              <a class="nav-link" href="#"><span title="YouTube Social Media Icon" class="fab fa-youtube-square"></span></a>
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
            <h5 id="columnTwoHeader" class="no-control">Section Header Title</h5>
            <h5 class="control" aria-hidden="true">
              <a data-toggle="collapse" href="#columnTwo" role="button">
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
            <h5 id="columnThreeHeader" class="no-control">Section Header Title</h5>
            <h5 class="control" aria-hidden="true">
              <a data-toggle="collapse" href="#columnThree" role="button">
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
            <h5 id="columnFourHeader" class="no-control">Section Header Title</h5>
            <h5 class="control" aria-hidden="true">
              <a data-toggle="collapse" href="#columnFour" role="button">
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
            <h5 id="columnFiveHeader" class="no-control">Section Header Title</h5>
            <h5 class="control" aria-hidden="true">
              <a data-toggle="collapse" href="#columnFive" role="button">
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
            <h5 id="columnSixHeader" class="no-control">The Zen Master and the Hot Dog Vendor</h5>
            <h5 class="control" aria-hidden="true">
              <a data-toggle="collapse" href="#columnSix" role="button">
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
              <img src=${innovationLockup} alt="Number one in the U.S. for innovation. #1 ASU, #2 Stanford, #3 MIT. - U.S. News and World Report, 5 years, 2016-2020">
              <nav class="nav" aria-label="University Services">
                <a class="nav-link" href="https://www.asu.edu/map/">Maps and Locations</a>
                <a class="nav-link" href="https://www.asu.edu/asujobs">Jobs</a>
                <a class="nav-link" href="https://isearch.asu.edu/">Directory</a>
                <a class="nav-link" href="https://www.asu.edu/contactasu/">Contact ASU</a>
                <a class="nav-link" href="https://my.asu.edu/">My ASU</a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="wrapper" id="wrapper-footer-colophon">
      <div class="container" id="footer-colophon">
        <div class="row">
          <div class="col">
            <nav class="nav colophon" aria-label="University Legal and Compliance">
              <a class="nav-link" href="https://www.asu.edu/copyright/">Copyright and Trademark</a>
              <a class="nav-link" href="https://www.asu.edu/accessibility/">Accessibility</a>
              <a class="nav-link" href="https://www.asu.edu/privacy/">Privacy</a>
              <a class="nav-link" href="https://www.asu.edu/tou/">Terms of Use</a>
              <a class="nav-link" href="https://www.asu.edu/emergency/">Emergency</a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </footer>
  `)

