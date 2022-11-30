import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js';

const extraOptions = {
  open: {
    name: 'Open',
    control: { type: 'boolean' },
    defaultValue: true,
  },
};

export default createComponent('Modals', 'Atoms', 'Templates', extraOptions);
import { initModals as initFunc } from './modals.js';

export const ModalComponent = createStory(
  (args) => {
    return (
      <div id="uds-modal" class={`uds-modal ${args.open ? 'open' : ''}`}>
        <div class="uds-modal-container">
          <button
            id="closeModalButton"
            class="uds-modal-close-btn"
            data-ga-name="onclick"
            data-ga-event="modal"
            data-ga-action="close"
            data-ga-type="click"
            data-ga-region="main content"
            data-ga-section="modal name/title"
            data-ga="close cross"
          >
            <i class="fas fa-times fa-stack-1x"></i>
            <span class="sr-only">Close</span>
          </button>
          <h1>Content</h1>
        </div>
      </div>
    );
  },
  {
    initFunc,
    omitTemplate: true,
  }
);
