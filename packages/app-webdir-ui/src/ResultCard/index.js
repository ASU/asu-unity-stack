import React from "react";

import { ResultCardTemplate } from "./index.styles";
import { resultCardType } from "./models";

const ResultCard = ({ ...props }) => {
  const desc =
    props.description.length > 150
      ? `${props.description.slice(0, 150)}...`
      : props.description;
  return (
    <ResultCardTemplate
      className={`uds-results-card uds-content-align ${props.size} ${
        props.fill ? "fill" : ""
      }`}
    >
      <div>
        <div className="cookie-trail">{props.cookieTrail.join(" › ")}</div>
        <a href={props.link}>{`${props.name} | ${props.area}`}</a>
        <div className="description">{desc}</div>
      </div>
    </ResultCardTemplate>
  );
};

ResultCard.propTypes = resultCardType;

export { ResultCard };
