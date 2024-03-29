import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js';
export default createComponent('Alerts', 'Atoms', 'Examples');
import { googleAnalytics as initFunc } from '../../../src/js/googleAnalytics.js';

export const AlertsComponent = createStory(
  <div>
    <div class="alert alert-warning alert-dismissable" role="alert">
      <div class="alert-icon">
        <span title="Alert" class="fa fa-icon fa-bell"></span>
      </div>
      <div class="alert-content">
        Warning (orange): This is a warning alert to alert, confirm or notify.
        It is built using{' '}
        <a href="https://getbootstrap.com/docs/4.0/components/alerts">
          the Bootstrap 4 .alert-warning class
        </a>
        .
      </div>
      <div class="alert-close">
        <button
          type="button"
          class="btn btn-circle btn-circle-alt-black close"
          data-dismiss="alert"
          aria-label="Close"
          data-ga="close cross"
          data-ga-name="onclick"
          data-ga-event="modal"
          data-ga-action="close"
          data-ga-type="click"
          data-ga-region="main content"
          data-ga-section="Warning (orange): This is a warning alert to alert, confirm or notify.
          It is built using the Bootstrap 4 .alert-warning class"
        >
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>

    <div class="alert alert-success alert-dismissable" role="alert">
      <div class="alert-icon">
        <span title="Success" class="fa fa-icon fa-check-circle"></span>
      </div>
      <div class="alert-content">
        Success (green): This is a success alert to confirm or notify. It is
        built using{' '}
        <a href="https://getbootstrap.com/docs/4.0/components/alerts">
          the Bootstrap 4 .alert-success class
        </a>
        .
      </div>
      <div class="alert-close">
        <button
          type="button"
          class="btn btn-circle btn-circle-alt-black close"
          data-dismiss="alert"
          aria-label="Close"
          data-ga="close cross"
          data-ga-name="onclick"
          data-ga-event="modal"
          data-ga-action="close"
          data-ga-type="click"
          data-ga-region="main content"
          data-ga-section="Success (green): This is a success alert to confirm or notify. It is
          built using the Bootstrap 4 .alert-success class"
        >
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>

    <div class="alert alert-info" role="alert">
      <div class="alert-icon">
        <span title="Information" class="fa fa-icon fa-info-circle"></span>
      </div>
      <div class="alert-content">
        <p>
          Information (blue): This is a info alert to confirm or notify. It is
          built using{' '}
          <a href="https://getbootstrap.com/docs/4.0/components/alerts">
            the Bootstrap 4 .alert-info class
          </a>
        </p>
        <p>
          Creating a dismissable alert box requires the inclusion of the{' '}
          <code>alert-dismissable</code> class along with the{' '}
          <code>data-dismiss="alert"</code> attribute on the close button. Alert
          messages do not necessarily have to be dismissable.
        </p>
      </div>
    </div>

    <div class="alert alert-danger" role="alert">
      <div class="alert-icon">
        <span title="Error" class="fa fa-icon fa-exclamation-triangle"></span>
      </div>
      <div class="alert-content">
        Error (red): This is a danger alert used specifically for errors. It is
        built using{' '}
        <a href="https://getbootstrap.com/docs/4.0/components/alerts">
          the Bootstrap 4 .alert-danger class
        </a>
        .
      </div>
      <div class="alert-close">
        <button
          type="button"
          class="btn btn-circle btn-circle-alt-black close"
          aria-label="Close"
          data-dismiss="alert"
          data-ga="close cross"
          data-ga-name="onclick"
          data-ga-event="modal"
          data-ga-action="close"
          data-ga-type="click"
          data-ga-region="main content"
          data-ga-section="Error (red): This is a danger alert used specifically for errors. It is
          built using the Bootstrap 4 .alert-danger class"
        >
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>
  </div>,
  { initFunc }
);
AlertsComponent.args = {
  template: 1,
};
