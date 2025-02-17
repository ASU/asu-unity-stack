import React, { useEffect } from "react";

import { ButtonIconOnly } from "../ButtonIconOnly/ButtonIconOnly";
import { GaEventWrapper } from "../GaEventWrapper/GaEventWrapper";
/**
 *
 * TODO: Should we be using bootstrap's built in modal functionality?
 */

const defaultGaData = {
  name: "onclick",
  event: "modal",
  action: "close",
  type: "click",
  region: "main content",
  section: "modal name/title",
  ga: "close cross",
};

export interface ModalProps {
  gaData?: {
    name: string;
    event: string;
    action: string;
    type: string;
    region: string;
    section: string;
    ga: string;
  };
}

export const Modal: React.FC<ModalProps> = ({ gaData }) => {
  useEffect(() => {
    document
      ?.getElementById("openModalButton")
      .addEventListener("click", function () {
        document.getElementById("uds-modal").classList.add("open");
      });

    document
      ?.getElementById("closeModalButton")
      .addEventListener("click", function () {
        document.getElementById("uds-modal").classList.remove("open");
      });
  });

  return (
    <div className="container-fluid">
      <button
        onClick={() => {
          document.getElementById("uds-modal").classList.add("open");
        }}
        id="openModalButton"
        className="btn btn-dark"
      >
        Show modal
      </button>

      <div id="uds-modal" className="uds-modal">
        <div className="uds-modal-container">
          <GaEventWrapper gaData={{ ...defaultGaData, ...gaData }}>
            <ButtonIconOnly
              // @ts-ignore
              id="closeModalButton"
              className="uds-modal-close-btn"
              icon={["fas", "times"]}
            />
          </GaEventWrapper>
          <h1>Content</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod incididuntåç ut labore et dolore magna aliqua eiusmod tempo.
          </p>
          <button className="btn btn-primary">button</button>
        </div>
      </div>
    </div>
  );
};
