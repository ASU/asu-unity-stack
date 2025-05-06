import React from "react";

import { defaultDecorator } from "../../../../../shared/components/Layout";

export default {
  title: "Atoms/Modals/Templates",
  decorators: [ defaultDecorator ],
  parameters: {
    initFunc: {
      disable: false,
    },
    header: {
      forced: true,
    },
    footer: {
      forced: true,
    },
  },
  args: {open: true},
  argTypes: {
    open: {
      name: "Open",
      control: { type: "boolean" },
    },
  },
};

export const ModalComponent = ({open}) => <>
      <p style={{minHeight: "30vh"}}>
        { open ? "Modal is open on page load" : "Modal was not triggered to open" }
      </p>
      <div id="uds-modal" className={`uds-modal ${open ? "open" : ""}`}>
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
            <i className="fas fa-times"></i>
            <span className="visually-hidden">Close</span>
          </button>
          <h1>Content</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod incididuntåç ut labore et dolore magna aliqua eiusmod tempo.
          </p>
          <button className="btn btn-primary">button</button>
        </div>
      </div>
    </>;
