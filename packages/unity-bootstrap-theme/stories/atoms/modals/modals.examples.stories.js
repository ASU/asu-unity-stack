import { createComponent, createStory } from "../../../helpers/wrapper.js";
import { initModals as initFunc } from "./modals.js";
export default {
  ...createComponent("Modals", "Atoms", "Examples"),
  parameters: {
    uds:{
      template: {
        include: ["x"]
      }
    }
  },
};

export const ModalComponent = createStory(
  <div className="container-fluid">
    <button id="openModalButton" className="btn btn-dark">
      Show modal
    </button>

    <div id="uds-modal" className="uds-modal">
      <div className="uds-modal-container">
        <button
          id="closeModalButton"
          className="uds-modal-close-btn"
          data-ga-name="onclick"
          data-ga-event="modal"
          data-ga-action="close"
          data-ga-type="click"
          data-ga-region="main content"
          data-ga-section="modal name/title"
          data-ga="close cross"
        >
          <i className="fas fa-times fa-stack-1x"></i>
          <span className="visually-hidden">Close</span>
        </button>
        <h1>Content</h1>
      </div>
    </div>
  </div>,
  {
    initFunc,
  }
);
