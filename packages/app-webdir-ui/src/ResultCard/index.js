import React from "react";
import { useSearchParams } from "react-router-dom";

import { trackGAEvent } from "../core/services/googleAnalytics";
import { ResultCardTemplate } from "./index.styles";
import { resultCardType } from "./models";

const ResultCard = ({ ...props }) => {
  const [searchParams, ,] = useSearchParams();

  function sendClick() {
    const query = searchParams.get("q");
    const tab = searchParams.get("search-tabs");
    let tags;
    if (props.fill) {
      tags = ["promoted-result"];
    } else if (tab === "all" && !searchParams.get("url_host")) {
      tags = ["all-asu-search"];
    } else if (tab === "web_sites") {
      tags = ["local-search", searchParams.get("url_host")];
    } else if (tab === "all" && searchParams.get("url_host")) {
      tags = ["all-asu-search", searchParams.get("url_host")];
    }

    if (props.localSection === true) {
      tags.push("local-results");
    } else if (props.localSection === false) {
      tags.push("all-asu-results");
    }

    try {
      props.logClick(query, props.id, props.requestId, tags, props);
    } catch (e) {
      console.error(e);
    }
  }

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
        {props.cookieTrail.filter(n => n).length ? (
          <div className="cookie-trail">{props.cookieTrail.join(" › ")}</div>
        ) : null}
        <a
          onClick={() => {
            sendClick();
            sendEvent();
          }}
          href={props.link}
        >{`${props.name} | ${props.area}`}</a>
        <div className="description">{desc}</div>
      </div>
    </ResultCardTemplate>
  );
};

ResultCard.propTypes = resultCardType;

export { ResultCard };
