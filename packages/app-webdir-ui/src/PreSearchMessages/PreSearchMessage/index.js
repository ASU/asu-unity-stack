import React from "react";
import { QuickLinks } from "../../QuickLinks";
import { PreSearchMessageTemplate } from "./index.styles";
import PropTypes from "prop-types";

const PreSearchDynamicMsg = ({ titleText, descText, contactText, signInLink }) => {
  const renderDescText = () => {
    if (signInLink) {
      return (
        <p>
          {descText}
          <a href={signInLink}>logging into the site</a>.
        </p>
      );
    }
    return <p>{descText}</p>;
  };

  return (
    <PreSearchMessageTemplate>
      <div className="message-content">
        <h2>{titleText}</h2>
        <div>
          {renderDescText()}
          <div className="assistance-area">
            <span className="intro-highlight">Need assistance?</span> <br />
            <a href="https://www.asu.edu/about/contact">{contactText}</a>
          </div>
        </div>
      </div>
      <QuickLinks />
    </PreSearchMessageTemplate>
  );
};

PreSearchDynamicMsg.propTypes = {
  titleText: PropTypes.string,
  descText: PropTypes.string,
  contactText: PropTypes.string,
  signInLink: PropTypes.string,
};

export { PreSearchDynamicMsg };
