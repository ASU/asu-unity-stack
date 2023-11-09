import React from "react";
import { useSearchParams } from "react-router-dom";

import { trackGAEvent } from "../../../../shared";
import { ResultCardTemplate } from "./index.styles";
import { resultCardType } from "./models";

/**
 * React component for displaying a search result card.
 *
 * @param {Object} props - The props for configuring the result card.
 * @param {string} props.id - The ID of the result.
 * @param {string} props.name - The name of the result.
 * @param {string} props.area - The area of the result.
 * @param {string} props.description - The description of the result.
 * @param {string[]} props.cookieTrail - An array representing the cookie trail of the result.
 * @param {string} props.link - The link associated with the result.
 * @param {boolean} [props.fill=false] - Whether to fill in missing data in the card.
 * @param {function} props.logClick - A function to log clicks on result card elements.
 * @param {string} props.GASource - The Google Analytics source for tracking events.
 * @param {string} props.requestId - The request ID associated with the query.
 * @param {boolean|null} [props.localSection=null] - The local section information.
 * @returns {JSX.Element} The ResultCard component.
 */

const ResultCard = ({ ...props }) => {
  const [searchParams, ,] = useSearchParams();

  function sendClick() {
    const query = searchParams.get("q");
    const tab = searchParams.get("search-tabs");
    let tags;
    if (props.fill) {
      tags = ["promoted-result", "all-asu-search"];
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
        <a
          onClick={() => {
            sendClick();
            sendEvent();
          }}
          href={props.link}
        >{`${props.name} | ${props.area}`}</a>
        {props.cookieTrail.filter(n => n).length ? (
          <div className="cookie-trail">{props.cookieTrail.join(" › ")}</div>
        ) : null}
        <div className="description">{desc}</div>
      </div>
    </ResultCardTemplate>
  );
};

ResultCard.propTypes = resultCardType;

export { ResultCard };
