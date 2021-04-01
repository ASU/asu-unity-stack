/* eslint-disable react/no-danger */
import { css, cx } from "@emotion/css";

const Footer = props => {
  return (
    <div
      class={css`
        #innovation-footer {
          position: relative;
          left: 0;
          right: 0;
        }
        #innovation-bar {
          padding: 1.8em 0px;
          background-color: #ffc627;
          font-family: Arial, sans-serif;
        }
        #innovation-bar img {
          height: auto;
          margin-top: -1.8em;
          max-width: 447px;
          width: 100%;
        }
        #innovation-bar a {
          font-size: 16px;
          font-weight: bold;
          border-bottom: 0;
          color: #000;
          text-decoration: none;
        }
        #innovation-bar .innovation-status {
          text-align: left;
          width: 78%;
          display: inline-block;
          margin-bottom: 0.7em;
          margin-top: 0.7em;
        }
        .innovation-image {
          float: right;
          text-align: right;
          float: right;
        }
        #innovation-footer ul li {
          display: inline;
          white-space: nowrap;
        }
        #innovation-footer #innovation-bar ul {
          display: inline-block;
          margin: 0;
          padding-bottom: 0;
          padding-top: 0em;
          padding-left: 15px;
          padding-right: 15px;
        }
        #innovation-bar .innovation-top {
          margin: 0 auto;
          width: 1170px;
        }
        #innovation-footer .footer-menu .nav ul {
          margin: 0 auto;
          width: 1170px;
        }
        #innovation-bar .innovation-top .innovation-status {
          width: 61%;
        }
        #innovation-footer .footer-menu {
          font-size: 16px;
          font-family: Arial, Helvetica, sans-serif;
          line-height: 1.44;
          font-weight: 200;
          padding: 0px;
          background-color: #e5e5e5;
          color: #2a2a2a;
        }
        #innovation-footer .footer-menu a:hover {
          color: #8c1d40;
          text-decoration: underline;
          transition: none;
        }
        #innovation-footer .footer-menu ul {
          padding-bottom: 0.6em;
          padding-top: 0.6em;
        }
        #innovation-footer .footer-menu ul li {
          padding-bottom: 0;
          float: left;
        }
        #innovation-footer .footer-menu ul li a {
          font-size: 16px;
        }
        #innovation-footer .footer-menu ul li a {
          font-family: Arial, sans-serif;
          color: #333;
          font-weight: 400;
          font-size: 16px;
          margin-right: 30px;
          text-decoration: none;
          border-bottom: none;
          transition: none;
        }
        #innovation-footer .footer-menu a:hover {
          color: #8c1d40;
          text-decoration: underline;
          transition: none;
        }
        #innovation-footer .footer-menu a:focus {
          background-color: #000;
          box-shadow: -0.15em 0 0 #000, 0.15em 0 0 #000;
          color: #fff;
          outline: 0;
        }
        #innovation-footer .footer-menu .nav ul {
          width: 1170px;
        }
        #innovation-footer ul::before,
        #innovation-footer ul::after,
        .footer #innovation-footer ol::before,
        .footer #innovation-footer ol::after {
          display: table;
        }
        #innovation-footer ul::after,
        #innovation-footer ol::after {
          clear: both;
          content: " ";
          display: table;
        }
        #innovation-footer ul > li > a,
        #innovation-footer ol > li > a {
          position: relative;
        }
        #innovation-footer .footer-menu ul {
          display: block;
          list-style: none;
          margin: 0 auto;
          padding-bottom: 0.9em;
          padding-top: 0.9em;
        }
        #innovation-footer .footer-menu ul li {
          float: left;
          padding-bottom: 0;
        }
        #innovation-footer .footer-menu ul.default {
          padding-left: 15px;
        }
        #innovation-footer .footer-menu ul.default li a {
          margin-right: 25px;
        }
        #innovation-footer a {
          transition: none;
        }
        #innovation-footer a:hover {
          transition: none;
        }
        #innovation-footer #innovation-bar ul.default li a {
          margin-right: 25px;
        }
        #innovation-bar a:hover {
          text-decoration: underline;
        }
        #innovation-bar a:focus {
          background-color: #000;
          box-shadow: -0.15em 0 0 #000, 0.15em 0 0 #000;
          color: #fff;
          outline: 0;
        }
        #innovation-bar .innovation-image a:focus {
          background-color: transparent;
          box-shadow: none;
        }
        #innovation-bar .innovation-image a:focus img {
          background-color: transparent;
          border: 1px solid #000;
          box-shadow: none;
        }
        .nav {
          display: block;
          margin-bottom: 0;
          padding-left: 0;
          list-style: none;
        }
        .nav::after {
          clear: both;
        }
        .nav::before,
        .nav::after {
          content: " ";
          display: table;
        }
        @media screen and (max-width: 1200px) {
          body #innovation-bar .innovation-top .innovation-status {
            width: 52%;
            padding-right: 0;
          }
          .innovation-image {
            width: 48%;
          }
          #innovation-bar .innovation-status {
            padding-right: 20px;
          }
          #innovation-bar .innovation-top,
          #innovation-footer .footer-menu .nav ul {
            width: auto;
          }
        }
        @media screen and (max-width: 992px) {
          #innovation-bar {
            padding: 1.3em 0px;
          }
          #innovation-bar img {
            max-width: 100%;
          }
          #innovation-bar .innovation-top {
            width: 100%;
            display: flex;
            flex-direction: column;
          }
          #innovation-footer #innovation-bar ul {
            text-align: center;
            width: auto;
          }
          #innovation-footer .footer-menu {
            text-align: center;
            width: 100%;
            padding: 0;
            background-color: #e5e5e5;
            text-align: left;
            padding-bottom: 0.7em;
            padding-top: 0.7em;
          }
          #innovation-footer .footer-menu ul li {
            float: none;
          }
          #innovation-bar .innovation-status {
            order: 2;
            width: 100% !important;
          }
          .innovation-image {
            border-bottom: 0;
            float: left;
            order: 1;
            width: 100%;
          }
          #innovation-footer .footer-menu ul {
            display: block;
          }
          body #innovation-footer .footer-menu ul.default {
            text-align: left;
            display: grid;
            text-align: left;
            grid-template-rows: 1fr 1fr 1fr;
            grid-auto-flow: column;
            justify-items: start;
            width: auto;
            padding: 0 2rem;
          }
          #innovation-footer #innovation-bar ul.default li a {
            margin-right: 0px;
          }
          .nav.colophon {
            margin-bottom: 0;
            padding-left: 0;
            list-style: none;
          }
          .mb-left {
            display: block;
            float: left;
          }
          .mb-right {
            display: block;
            float: right;
          }
          #innovation-footer #innovation-bar ul {
            display: grid;
            text-align: left;
            grid-template-rows: 1fr 1fr 1fr;
            grid-auto-flow: column;
            justify-items: start;
            width: auto;
            padding: 0 2rem;
          }
          #innovation-footer .footer-link:nth-child(n + 4) {
            display: grid;
            justify-self: end;
          }
          #innovation-footer ul li.footer-link {
            display: grid;
            margin-right: 0;
            padding: 0.5rem 0;
            white-space: inherit;
          }
          #innovation-footer ul::before {
            content: inherit;
          }
          #innovation-footer .footer-menu ul.default {
            display: grid;
            text-align: left;
            grid-template-rows: 1fr 1fr 1fr;
            grid-auto-flow: column;
            justify-items: start;
            width: auto;
            padding: 0 2rem;
          }
          body #innovation-footer .footer-menu ul.default li a {
            margin-right: 0px;
          }
          #innovation-footer .footer-menu ul li.footer-link {
            display: grid;
            margin-right: 0;
            padding: 0;
          }
          #innovation-footer .footer-menu ul li a {
            margin-right: 0px;
            font-size: 15px;
          }
          #innovation-footer ul li.footer-link {
            display: grid;
            margin-right: 0;
            padding: 0.5rem 0;
            white-space: inherit;
          }
          #innovation-bar .innovation-top {
            width: 100%;
            display: flex;
            flex-direction: column;
            margin: 0 auto;
          }
          #innovation-footer .footer-menu .nav ul {
            margin: 0px;
            width: auto;
          }
        }
      `}
    >
      <div id="innovation-footer">
        <div id="innovation-bar">
          <div class="innovation-top">
            <div class="innovation-status">
              <nav aria-label="University Services">
                <ul class="default">
                  <li class="footer-link">
                    <a href="https://www.asu.edu/maps">Maps and Locations</a>
                  </li>
                  <li class="footer-link">
                    <a href="https://www.asu.edu/asujobs">Jobs</a>
                  </li>
                  <li class="footer-link">
                    <a href="https://isearch.asu.edu">Directory</a>
                  </li>
                  <li class="footer-link">
                    <a href="https://www.asu.edu/contactasu/">Contact ASU</a>
                  </li>
                  <li class="footer-link">
                    <a href="https://my.asu.edu/">My ASU</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="innovation-image">
              <a href="https://www.asu.edu/rankings">
                <img
                  alt="#1 in the U.S. for innovation. U.S. News &amp; World Report, 5 years, 2016-2020"
                  src="https://www-dev.asu.edu/asuthemes/5.0/assets/Number-1-in-the-us-for-innovation@2x.png"
                />
              </a>
            </div>
          </div>
        </div>
        <div class="footer-menu">
          <nav
            aria-label="University Legal and Compliance"
            class="nav colophon"
          >
            <ul class="default">
              <li class="footer-link">
                <a href="https://www.asu.edu/copyright/">
                  Copyright and Trademark
                </a>
              </li>
              <li class="footer-link">
                <a href="https://www.asu.edu/accessibility/">Accessibility</a>
              </li>
              <li class="footer-link">
                <a href="https://www.asu.edu/privacy/">Privacy</a>
              </li>
              <li class="footer-link">
                <a href="https://www.asu.edu/tou/">Terms of Use</a>
              </li>
              <li class="footer-link">
                <a href="https://www.asu.edu/emergency/">Emergency</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export { Footer };
