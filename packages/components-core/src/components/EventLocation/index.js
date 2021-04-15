import PropTypes from "prop-types";
import React from "react";

const addressFormat = (address1, address2, city, state, zip) => (
  <address>
    {address1 && address1}
    {address1 && address2 && ` ${address2}`}
    {(address1 || address2) && city && `, ${city}`}
    {(address1 || address2 || city) && state && `, ${state}`}
    {zip && ` ${zip}`}
  </address>
);

export const EventLocation = ({
  title,
  address1,
  address2,
  city,
  state,
  zip,
  link,
}) => {
  if (link) {
    return (
      <>
        {title && <span>{title}</span>}
        <br />
        <i>Link start</i>
        {addressFormat(address1, address2, city, state, zip)}
        <i>Link end</i>
      </>
    );
  }

  return (
    <>
      {title && <div>{title}</div>}
      {addressFormat(address1, address2, city, state, zip)}
    </>
  );
};

EventLocation.propTypes = {
  /**
   * Title
   */
  title: PropTypes.string,
  /**
   * Address line 1
   */
  address1: PropTypes.string,
  /**
   * Address line 2
   */
  address2: PropTypes.string,
  /**
   * City
   */
  city: PropTypes.string,
  /**
   * State
   */
  state: PropTypes.string,
  /**
   * Zip
   */
  zip: PropTypes.string,
  /**
   * Link
   */
  link: PropTypes.string,
};

EventLocation.defaultProps = {
  title: null,
  address1: null,
  address2: null,
  city: null,
  state: null,
  zip: null,
  link: null,
};
