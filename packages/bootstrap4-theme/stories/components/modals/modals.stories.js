import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js';
export default createComponent('Modals');
import { initModals } from './modals.js';

export const ModalComponent = createStory(
  <div class="container-fluid">
    <button id="openModalButton" class="btn btn-dark">
      Show modal
    </button>

    <div id="uds-modal" class="uds-modal">
      <div class="uds-modal-container">
        <button id="closeModalButton" class="uds-modal-close-btn">
          <i class="fas fa-times fa-stack-1x"></i>
          <span class="sr-only">Close</span>
        </button>
        <h1>Content</h1>
      </div>
    </div>
  </div>,
  initModals,
  true
);
