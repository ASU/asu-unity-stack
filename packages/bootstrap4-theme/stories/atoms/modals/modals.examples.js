import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js';
export default createComponent('Modals', 'Atoms', 'Examples');
import { initModals as initFunc } from './modals.js';

export const ModalComponent = createStory(
  <div class="container-fluid">
    <button id="openModalButton" class="btn btn-dark">
      Show modal
    </button>

    <div id="uds-modal" class="uds-modal">
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
  </div>,
  {
    initFunc,
    omitTemplate: true,
  }
);
