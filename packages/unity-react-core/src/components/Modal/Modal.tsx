import React, { useEffect } from "react";

import { ButtonIconOnly } from "../ButtonIconOnly/ButtonIconOnly";
import { GaEventWrapper } from "../GaEventWrapper/GaEventWrapper";
import { useBaseSpecificFramework } from "../GaEventWrapper/useBaseSpecificFramework";
import classNames from "classnames";

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

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.key === "Escape") setOpen(false); // Close on Esc key
    };

    if (openState) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [openState, setOpen]);

  useEffect(() => {
    if (!openState) {
      let openModalButton = document.getElementById("openModalButtonR");
      setTimeout(() => {
        if (openModalButton) {
          // Wait for dom to update before setting focus
          openModalButton?.focus();
        }
      }, 200);
      return;
    }

    // Disable navigation to everything accept for the modal content
    // Source: https://stackoverflow.com/questions/4195616/how-to-set-the-focus-on-a-javascript-modal-window
    const focusableElements =
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const modal = document.getElementsByClassName("uds-modal-container")[0];
    const firstFocusableElement = modal?.querySelectorAll(focusableElements)[0];
    const focusableContent = modal?.querySelectorAll(focusableElements);
    const lastFocusableElement = focusableContent
      ? focusableContent[focusableContent?.length - 1]
      : undefined;

    const handleTabKey = (e: KeyboardEvent) => {
      let isTabPressed = e.key === "Tab"; // || e.keyCode === 9;

      if (!isTabPressed) {
        return;
      }

      if (e.shiftKey) {
        // if shift key pressed for shift + tab combination
        if (document.activeElement === firstFocusableElement) {
          (lastFocusableElement as HTMLElement)?.focus(); // add focus for the last focusable element
          e.preventDefault();
        }
      } else {
        // if tab key is pressed
        if (document.activeElement === lastFocusableElement) {
          // if focused has reached to last focusable element then focus first focusable element after pressing tab
          (firstFocusableElement as HTMLElement)?.focus(); // add focus for the first focusable element
          e.preventDefault();
        }
      }
    };

    if (lastFocusableElement && firstFocusableElement) {
      document.addEventListener("keydown", handleTabKey);
      setTimeout(() => {
        if (firstFocusableElement) {
          // Wait for dom to update before setting focus
          (firstFocusableElement as HTMLElement)?.focus();
        }
      }, 200);
      return () => document.removeEventListener("keydown", handleTabKey);
    }
  }, [openState]);

  const modalTitle = "Content";

  if (isBootstrap) {
    return (
      <div className="container-fluid">
        {/* Disable main content on modal open */}
        <div id="main-content">
          <button
            autoFocus
            inert={isBootstrap ? undefined : openState ?? false}
            type="button"
            // data-bs-toggle={isBootstrap && "modal"}
            // data-bs-target={isBootstrap && "#uds-modal"}
            onClick={isReact ? handleOpen : undefined}
            id="openModalButton"
            className="btn btn-dark"
          >
            Show modal
          </button>
        </div>
        <div
          id="uds-modal"
          role="dialog"
          aria-modal="true"
          aria-label={modalTitle}
          className={classNames("uds-modal", { open: openState })}
        >
          <div className="uds-modal-container">
            <GaEventWrapper gaData={{ ...defaultGaData, ...gaData }}>
              <ButtonIconOnly
                autoFocus
                // @ts-ignore
                id="closeModalButton"
                // onClick={isReact ? handleClose : undefined}
                // data-bs-dismiss={isBootstrap && "modal"}
                className="uds-modal-close-btn"
                icon={["fas", "times"]}
              />
            </GaEventWrapper>
            <h1>{modalTitle}</h1>
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
      </div>
    );
  } else {
    return (
      <div className="container-fluid">
        {/* Disable main content on modal open */}
        <div id="main-content-r" inert={openState ?? undefined}>
          <button
            autoFocus
            inert={openState ?? undefined}
            type="button"
            // data-bs-toggle={isBootstrap && "modal"}
            // data-bs-target={isBootstrap && "#uds-modal"}
            onClick={isReact ? handleOpen : undefined}
            id="openModalButtonR"
            className="btn btn-dark"
          >
            Show modal
          </button>
        </div>

        {openState && (
          <div
            id="uds-modal"
            role="dialog"
            aria-modal="true"
            aria-label={modalTitle}
            className={classNames("uds-modal", { open: openState })}
          >
            <div className="uds-modal-container">
              <GaEventWrapper gaData={{ ...defaultGaData, ...gaData }}>
                <ButtonIconOnly
                  autoFocus
                  // @ts-ignore
                  id="closeModalButtonR"
                  onClick={handleClose}
                  // data-bs-dismiss={isBootstrap && "modal"}
                  className="uds-modal-close-btn"
                  icon={["fas", "times"]}
                />
              </GaEventWrapper>
              <h1>{modalTitle}</h1>
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
  }
};
