import React, { DOMAttributes, useEffect } from "react";
import { createPortal } from "react-dom";

import { ButtonIconOnly } from "../ButtonIconOnly/ButtonIconOnly";
import { GaEventWrapper } from "../GaEventWrapper/GaEventWrapper";
import { useBaseSpecificFramework } from "../GaEventWrapper/useBaseSpecificFramework";
import classNames from "classnames";
import { ButtonProps } from "../../../types/main";

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
  trigger: (React.ReactNode & DOMAttributes<HTMLButtonElement>) | string;
  modalHeaderText?: string;
  modalBodyText?: string;
  modalButtons?: { href: string; label: string }[];
}

export const Modal: React.FC<ModalProps> = ({
  trigger,
  modalHeaderText,
  modalBodyText,
  modalButtons,
  open,
  gaData,
}) => {
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

  let triggerButton;
  if (typeof trigger === "string") {
    triggerButton = (
      <button
        autoFocus
        inert={isBootstrap ? undefined : (openState ?? false)}
        type="button"
        onClick={isReact ? handleOpen : undefined}
        id="openModalButton"
        className="btn btn-dark"
      >
        Show modal
      </button>
    );
  } else if (React.isValidElement(trigger)) {
    triggerButton = React.cloneElement(trigger as React.ReactElement, {
      onClick: isReact ? handleOpen : undefined,
      inert: isBootstrap ? undefined : (openState ?? false),
    });
  }

  if (isBootstrap) {
    return (
      <div className="container-fluid">
        {/* Disable main content on modal open */}
        <div id="main-content">{triggerButton}</div>
        <div
          id="uds-modal-backdrop"
          onClick={handleClose}
          className={classNames("uds-modal", { open: openState })}
        ></div>
        <div
          id="uds-modal"
          role="dialog"
          aria-modal="true"
          aria-label={modalHeaderText}
          className={classNames("uds-modal", "uds-modal-main", {
            open: openState,
          })}
        >
          <div className="uds-modal-container">
            <GaEventWrapper gaData={{ ...defaultGaData, ...gaData }}>
              <ButtonIconOnly
                autoFocus
                // @ts-ignore
                id="closeModalButton"
                className="uds-modal-close-btn"
                icon={["fas", "times"]}
              />
            </GaEventWrapper>
            {children}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container-fluid">
        {/* Disable main content on modal open */}
        <div id="main-content-r" inert={openState ?? undefined}>
          {triggerButton}
        </div>

        {openState &&
          createPortal(
            <ModalContent
              modalHeaderText={modalHeaderText}
              modalBodyText={modalBodyText}
              modalButtons={modalButtons}
              openState={openState}
              handleClose={() => setOpen(false)}
            />,
            document.body
          )}
      </div>
    );
  }
};

export interface ModalContentProps {
  openState?: boolean;
  handleClose?: () => void;
  modalHeaderText?: string;
  modalBodyText?: string;
  gaData?: {
    name: string;
    event: string;
    action: string;
    type: string;
    region: string;
    section: string;
    ga: string;
  };
  modalButtons?: ButtonProps[];
}

const ModalContent: React.FC<ModalContentProps> = ({
  openState,
  modalHeaderText,
  modalBodyText,
  modalButtons,
  handleClose = () => {},
  gaData,
}) => {
  return (
    <>
      <div
        id="uds-modal-backdrop"
        onClick={() => handleClose}
        className={classNames("uds-modal", { open: openState })}
      ></div>
      <div
        id="uds-modal"
        role="dialog"
        aria-modal="true"
        aria-label={modalHeaderText}
        className={classNames("uds-modal", "uds-modal-main", {
          open: openState,
        })}
      >
        <div className="uds-modal-container">
          <GaEventWrapper gaData={{ ...defaultGaData, ...gaData }}>
            <ButtonIconOnly
              autoFocus
              // @ts-ignore
              id="closeModalButtonR"
              onClick={handleClose}
              className="uds-modal-close-btn"
              icon={["fas", "times"]}
            />
          </GaEventWrapper>
          {modalBodyText && <p>{modalBodyText}</p>}
          {modalButtons &&
            modalButtons.map((buttonProps, index) => (
              <button key={index} {...buttonProps} />
            ))}
        </div>
      </div>
    </>
  );
};
