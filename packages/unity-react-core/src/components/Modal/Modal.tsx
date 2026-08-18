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
  /**
   * Modal open/closed state
   */
  open?: boolean;
  /**
   * React useState custom setter
   */
  setOpen?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
  gaData?: {
    name: string;
    event: string;
    action: string;
    type: string;
    region: string;
    section: string;
    ga: string;
  };
  /**
   * Custom JSX to replace the default open modal button
   */
  openModalInput?: JSX.Element;
  /**
   * Style class for the default open modal button
   */
  openModalButtonClassName?: string;
  /**
   * Display text for the default open modal button
   */
  openModalButtonText?: string;
  /**
   * JSX for the content displayed within the modal
   */
  children?: JSX.Element;
}

export const Modal: React.FC<ModalProps> = ({
  children,
  open,
  setOpen,
  openModalInput,
  openModalButtonClassName,
  openModalButtonText,
  gaData,
}) => {
  const { isReact, isBootstrap } = useBaseSpecificFramework();
  const [defaultOpenState, defaultSetOpen] = React.useState(open ?? false);

  const handleSetOpen = (e: boolean) => {
    if (setOpen) {
      setOpen(e); // custom set open prop
    } else {
      defaultSetOpen(e); // default set open function
    }
  };

  const getOpenState = () => {
    if (setOpen) {
      return open; // custom open state value
    } else {
      return defaultOpenState; // default open state value
    }
  };

  const handleOpen = () => {
    handleSetOpen(true);
  };

  const handleClose = () => {
    handleSetOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.key === "Escape") handleSetOpen(false); // Close on Esc key
    };

    if (getOpenState()) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [getOpenState(), handleSetOpen]);

  useEffect(() => {
    if (!getOpenState()) {
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
  }, [getOpenState()]);

  let modalHeaderText = "Modal"; // default aria-label value

  if (children && children.props && children.props.children) {
    for (let i = 0; i < children.props.children.length; i++) {
      if (children.props.children[i].type === "h1") {
        if (
          children.props.children[i].props &&
          children.props.children[i].props.children &&
          typeof children.props.children[i].props.children === "string"
        ) {
          modalHeaderText = children.props.children[i].props.children;
        }
      }
    }
  }

  if (isBootstrap) {
    return (
      <div className="container-fluid">
        {/* Disable main content on modal open */}
        <div>
          {openModalInput ? (
            openModalInput
          ) : (
            <button
              autoFocus
              inert={isBootstrap ? undefined : getOpenState() ?? false}
              type="button"
              onClick={isReact ? handleOpen : undefined}
              id="openModalButton"
              className={`btn ${openModalButtonClassName ?? "btn-dark"}`}
            >
              {openModalButtonText ?? ""}
            </button>
          )}
        </div>
        <div
          id="uds-modal-backdrop"
          onClick={handleClose}
          className={classNames("uds-modal", { open: getOpenState() })}
        ></div>
        <div
          id="uds-modal"
          role="dialog"
          aria-modal="true"
          aria-label={modalHeaderText}
          className={classNames("uds-modal", "uds-modal-main", {
            open: getOpenState(),
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
        <div inert={getOpenState() ?? undefined}>
          {openModalInput ? (
            openModalInput
          ) : (
            <button
              autoFocus
              inert={getOpenState() ?? undefined}
              type="button"
              onClick={isReact ? handleOpen : undefined}
              className={`btn ${openModalButtonClassName ?? "btn-dark"}`}
            >
              {openModalButtonText ?? ""}
            </button>
          )}
        </div>

        {getOpenState() && (
          <>
            <div
              id="uds-modal-backdrop"
              onClick={handleClose}
              className={classNames("uds-modal", { open: getOpenState() })}
            ></div>
            <div
              id="uds-modal"
              role="dialog"
              aria-modal="true"
              aria-label={modalHeaderText}
              className={classNames("uds-modal", "uds-modal-main", {
                open: getOpenState(),
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
                {children}
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
};
