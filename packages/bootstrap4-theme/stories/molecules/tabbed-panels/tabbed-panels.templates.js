import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js';

const extraOptions = {
  bgColor: {
    name: 'Color',
    options: ['', 'bg-gray-1', 'bg-gray-2', 'bg-dark'],
    defaultValue: '',
    control: {
      type: 'radio',
      labels: {
        '': 'None',
        'bg-gray-1': 'bg-gray-1',
        'bg-gray-2': 'bg-gray-2',
        'bg-dark': 'bg-dark',
      },
    },
  },
};

export default createComponent(
  'Tabbed Panels',
  'Molecules',
  'Templates',
  extraOptions
);
import { initTabs as initFunc } from './tabbed-panels.js';

export const TabbedPanels = createStory(
  (args) => {
    return (
      <div class={args.bgColor}>
        <nav
          class={`uds-tabbed-panels ${
            args.bgColor === 'bg-dark' ? 'uds-tabbed-panels-dark' : ''
          }`}
        >
          <div
            class="nav nav-tabs"
            id="nav-tab"
            role="tablist"
            data-scroll-position="0"
          >
            <a
              class="nav-item nav-link active"
              id="nav-home-tab"
              data-toggle="tab"
              href="#nav-home"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              Home long tab
            </a>
            <a
              class="nav-item nav-link"
              id="nav-profile-tab"
              data-toggle="tab"
              href="#nav-profile"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              Profile long tab
            </a>
            <a
              class="nav-item nav-link"
              id="nav-contact-tab"
              data-toggle="tab"
              href="#nav-contact"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              Contact us is a long tab
            </a>
            <a
              class="nav-item nav-link"
              id="nav-another-tab"
              data-toggle="tab"
              href="#nav-another"
              role="tab"
              aria-controls="nav-another"
              aria-selected="false"
            >
              Another tab, long tab
            </a>
            <a
              class="nav-item nav-link"
              id="nav-another-2-tab"
              data-toggle="tab"
              href="#nav-another-2"
              role="tab"
              aria-controls="nav-another-2"
              aria-selected="false"
            >
              Another tab, long tab
            </a>
            <a
              class="nav-item nav-link"
              id="nav-another-3-tab"
              data-toggle="tab"
              href="#nav-another-3"
              role="tab"
              aria-controls="nav-another-3"
              aria-selected="false"
            >
              Another tab, long tab
            </a>
          </div>
          <a
            class="scroll-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-scroll="prev"
            tabIndex="-1"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="scroll-control-next"
            href="#carouselExampleControls"
            role="button"
            data-scroll="next"
            tabIndex="-1"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </nav>
        <div class="tab-content" id="nav-tabContent">
          <div
            class={`tab-pane fade show active ${
              args.bgColor === 'bg-dark' ? 'text-white' : ''
            }`}
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            This is an ordinary paragraph that is long enough to wrap to
            multiple lines so that you can see how spacing looks. At vero eos et
            accusam et justo duo dolores et ea rebu.
            <br />
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem.
          </div>
          <div
            class={`tab-pane fade ${
              args.bgColor === 'bg-dark' ? 'text-white' : ''
            }`}
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            This is an ordinary paragraph that is long enough to wrap to
            multiple lines so that you can see how spacing looks. At vero eos et
            accusam et justo duo dolores et ea rebu.
            <br />
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem.
          </div>
          <div
            class={`tab-pane fade ${
              args.bgColor === 'bg-dark' ? 'text-white' : ''
            }`}
            id="nav-contact"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
          >
            This is an ordinary paragraph that is long enough to wrap to
            multiple lines so that you can see how spacing looks. At vero eos et
            accusam et justo duo dolores et ea rebu.
            <br />
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem.
          </div>
          <div
            class={`tab-pane fade ${
              args.bgColor === 'bg-dark' ? 'text-white' : ''
            }`}
            id="nav-another"
            role="tabpanel"
            aria-labelledby="nav-another-tab"
          >
            This is an ordinary paragraph that is long enough to wrap to
            multiple lines so that you can see how spacing looks. At vero eos et
            accusam et justo duo dolores et ea rebu.
            <br />
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem.
          </div>
          <div
            class={`tab-pane fade ${
              args.bgColor === 'bg-dark' ? 'text-white' : ''
            }`}
            id="nav-another-2"
            role="tabpanel"
            aria-labelledby="nav-another-2-tab"
          >
            This is an ordinary paragraph that is long enough to wrap to
            multiple lines so that you can see how spacing looks. At vero eos et
            accusam et justo duo dolores et ea rebu.
            <br />
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem.
          </div>
          <div
            class={`tab-pane fade ${
              args.bgColor === 'bg-dark' ? 'text-white' : ''
            }`}
            id="nav-another-3"
            role="tabpanel"
            aria-labelledby="nav-another-3-tab"
          >
            This is an ordinary paragraph that is long enough to wrap to
            multiple lines so that you can see how spacing looks. At vero eos et
            accusam et justo duo dolores et ea rebu.
            <br />
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem.
          </div>
        </div>
      </div>
    );
  },
  { initFunc }
);
