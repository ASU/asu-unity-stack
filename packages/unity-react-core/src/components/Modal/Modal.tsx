import React, { useEffect } from "react";

import { ButtonIconOnly } from "../ButtonIconOnly/ButtonIconOnly";
import { GaEventWrapper } from "../GaEventWrapper/GaEventWrapper";
import { useBaseSpecificFramework } from "../GaEventWrapper/useBaseSpecificFramework";
import classNames from "classnames";
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
  open?: boolean;
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

export const Modal: React.FC<ModalProps> = ({ open, gaData }) => {
  const { isReact, isBootstrap } = useBaseSpecificFramework();
  const [openState, setOpen] = React.useState(open);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="container-fluid">
      <button
        type="button"
        // data-bs-toggle={isBootstrap && "modal"}
        // data-bs-target={isBootstrap && "#uds-modal"}
        onClick={isReact && handleOpen}
        id="openModalButton"
        className="btn btn-dark"
      >
        Show modal
      </button>

      {(openState || isBootstrap) && (
        <div
          id="uds-modal"
          className={classNames("uds-modal", { open: openState })}
        >
          <div className="uds-modal-container">
            <GaEventWrapper gaData={{ ...defaultGaData, ...gaData }}>
              <ButtonIconOnly
                // @ts-ignore
                id="closeModalButton"
                onClick={isReact && handleClose}
                // data-bs-dismiss={isBootstrap && "modal"}
                className="uds-modal-close-btn"
                icon={["fas", "times"]}
              />
            </GaEventWrapper>
            <h1>Content</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod incididuntåç ut labore et dolore magna aliqua eiusmod
              tempo.
            </p>
            <button type="button" className="btn btn-primary">
              button
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
