import React from "react";

import { trackGAEvent } from "../core/services/googleAnalytics";
import { ResultCardTemplate } from "./index.styles";
import { resultCardType } from "./models";

const ResultCard = ({ ...props }) => {
  function sendEvent() {
    trackGAEvent({
      event: "link",
      action: "click",
      name: "onclick",
      type: "internal link",
      section: props.GASource,
      text: `${props.name} | ${props.area}`,
    });
  }
  const desc =
    props.description.length > 150
      ? `${props.description.slice(0, 150)}...`
      : props.description;
  return (
    <ResultCardTemplate
      className={`uds-results-card ${props.fill ? "fill" : ""}`}
    >
      <div>
        <div className="cookie-trail">{props.cookieTrail.join(" › ")}</div>
        <a
          onClick={sendEvent}
          href={props.link}
        >{`${props.name} | ${props.area}`}</a>
        <div className="description">{desc}</div>
      </div>
    </ResultCardTemplate>
  );
};

ResultCard.propTypes = resultCardType;

export { ResultCard };
