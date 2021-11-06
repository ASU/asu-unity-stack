// TODO: THIS COMPONENT IS CURRENTLY DEFERRED

/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
// @ts-check
import { sanitizeDangerousMarkup } from "@asu-ke/components-core";
import { createPopper } from "@popperjs/core";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Tooltip = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1070;
  display: block;
  max-width: 276px;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  display: none;

  &[data-width-auto="true"] {
    max-width: none;
  }

  &[data-show="true"] {
    display: block;
  }

  & .popover-header {
    padding: 0.5rem 1rem;
    margin-bottom: 0;
    font-size: 1rem;
    background-color: #f0f0f0;
    border-bottom: 1px solid #d8d8d8;
    border-top-left-radius: calc(0.3rem - 1px);
    border-top-right-radius: calc(0.3rem - 1px);
  }

  & .popover-body {
    padding: 1rem 1rem;
    color: #212529;
  }

  #arrow,
  #arrow::before {
    position: absolute;
    width: 8px;
    height: 8px;
    background: inherit;
  }

  #arrow {
    visibility: hidden;
  }

  #arrow::before {
    visibility: visible;
    content: "";
    transform: rotate(45deg);
  }

  &[data-popper-placement^="top"] > #arrow {
    bottom: -4px;
  }

  &[data-popper-placement^="bottom"] > #arrow {
    top: -4px;
  }

  &[data-popper-placement^="left"] > #arrow {
    right: -4px;
  }

  &[data-popper-placement^="right"] > #arrow {
    left: -4px;
  }
`;

/**
 * @param {{
 *    popover: {
 *      title: string
 *      body: string | (() => Promise)
 *      withAuto: boolean
 *    }
 * }} props
 * @returns {JSX.Element}
 */
// eslint-disable-next-line no-unused-vars
const DeferredInfoButtonIcon = ({
  popover = { title: "", body: "", withAuto: false },
}) => {
  const [popoverBody, setBody] = useState("");
  const [dataShow, setDataShow] = useState(false);
  const target = useRef(null);
  const tooltip = useRef(null);
  const popperInstance = useRef(null);

  useEffect(() => {
    popperInstance.current = createPopper(target.current, tooltip.current, {
      placement: "right",
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 8],
          },
        },
      ],
    });
  }, []);

  function show() {
    const { body } = popover;

    if (typeof body === "string") {
      setBody(body);
    } else {
      body()
        .then(res => res.text())
        .then(text => setBody(text));
    }

    setDataShow(true);
    popperInstance.current.setOptions({
      placement: "top",
      modifiers: [{ name: "eventListeners", enabled: true }],
    });

    popperInstance.current.update();
  }

  function hide() {
    setDataShow(false);
    // Disable the event listeners
    popperInstance.current.setOptions({
      modifiers: [{ name: "eventListeners", enabled: false }],
    });
  }

  return (
    <>
      <Tooltip
        ref={tooltip}
        id="tooltip"
        role="tooltip"
        data-show={dataShow}
        data-width-auto={popover.withAuto}
      >
        <h3 className="popover-header">{popover.title}</h3>
        <div id="arrow" data-popper-arrow className="popover-arrow" />
        <div
          className="popover-body"
          dangerouslySetInnerHTML={sanitizeDangerousMarkup(popoverBody)}
        />
      </Tooltip>

      <span
        id="popcorn"
        role="button"
        tabIndex={0}
        onMouseEnter={show}
        onFocus={show}
        onMouseLeave={hide}
        onBlur={hide}
        ref={target}
      >
        <i
          className="fas fa-info-circle"
          style={{
            color: "#747474",
          }}
          aria-hidden="true"
        />
      </span>
    </>
  );
};

// TODO: THIS COMPONENT IS CURRENTLY DEFERRED
/* TODO: the component below is just a place holder
     once the InfoIcon component is back in scope,
     rename DeferredInfoButtonIcon to InfoButtonIcon
     and remove `const InfoButtonIcon = _ => <span />;`
 */
const InfoButtonIcon = _ => <span />;
export { InfoButtonIcon };
