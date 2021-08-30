import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js';
export default createComponent('Tooltips');
import { initTooltip } from './tooltips.js';

export const WhiteBackground = createStory(
  <div class="uds-tooltip-bg-white">
    <div class="uds-tooltip-container">
      <button
        tabindex="0"
        class="uds-tooltip uds-tooltip-white"
        aria-describedby="tooltip-desc-1"
      >
        <span class="fa-stack">
          <i class="fas fa-circle fa-stack-2x"></i>
          <i class="fas fa-info fa-stack-1x"></i>
        </span>
        <span class="uds-tooltip-visually-hidden">Notifications</span>
      </button>
      <div role="tooltip" class="uds-tooltip-description" id="tooltip-desc-1">
        <span class="uds-tooltip-heading">Lorem ipsum dolor sit amet</span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sediqua. Ut
        enim ad mitrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </div>
    </div>
  </div>,
  initTooltip
);

export const BaseGrayBackground = createStory(
  <div class="uds-tooltip-bg-base-gray">
    <div class="uds-tooltip-container">
      <button
        tabindex="0"
        class="uds-tooltip uds-tooltip-gray-1"
        aria-describedby="tooltip-desc-2"
      >
        <span class="fa-stack">
          <i class="fas fa-circle fa-stack-2x"></i>
          <i class="fas fa-info fa-stack-1x"></i>
        </span>
        <span class="uds-tooltip-visually-hidden">Notifications</span>
      </button>
      <div role="tooltip" class="uds-tooltip-description" id="tooltip-desc-2">
        <span class="uds-tooltip-heading">Lorem ipsum dolor sit amet</span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sediqua. Ut
        enim ad mitrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </div>
    </div>
  </div>,
  initTooltip
);

export const GrayBackground = createStory(
  <div class="uds-tooltip-bg-gray">
    <div class="uds-tooltip-container">
      <button
        tabindex="0"
        class="uds-tooltip uds-tooltip-gray"
        aria-describedby="tooltip-desc-3"
      >
        <span class="fa-stack">
          <i class="fas fa-circle fa-stack-2x"></i>
          <i class="fas fa-info fa-stack-1x"></i>
        </span>
        <span class="uds-tooltip-visually-hidden">Notifications</span>
      </button>
      <div role="tooltip" class="uds-tooltip-description" id="tooltip-desc-3">
        <span class="uds-tooltip-heading">Lorem ipsum dolor sit amet</span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sediqua. Ut
        enim ad mitrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </div>
    </div>
  </div>,
  initTooltip
);

export const DarkBackground = createStory(
  <div class="uds-tooltip-bg-dark">
    <div class="uds-tooltip-container">
      <button
        tabindex="0"
        class="uds-tooltip uds-tooltip-dark"
        aria-describedby="tooltip-desc-4"
      >
        <span class="fa-stack">
          <i class="fas fa-circle fa-stack-2x"></i>
          <i class="fas fa-info fa-stack-1x"></i>
        </span>
        <span class="uds-tooltip-visually-hidden">Notifications</span>
      </button>
      <div role="tooltip" class="uds-tooltip-description" id="tooltip-desc-4">
        <span class="uds-tooltip-heading">Lorem ipsum dolor sit amet</span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sediqua. Ut
        enim ad mitrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </div>
    </div>
  </div>,
  initTooltip

);
