import React, { useEffect, useState } from "react";

import { gaEventPropTypes, trackGAEvent } from "../../../../../../shared";
import { fetchCountries } from "../../../core/utils/fetchCountries";
import { useRfiContext } from "../../../core/utils/rfiContext";
import { RfiSelect } from "../../controls";

// Options
function getCountryOptions(resultsArrayOfObjects) {
  let i = 1;
  // TODO Resolve eslint error when dust settles. Not hurting anything for now.
  // eslint-disable-next-line no-return-assign
  const results = resultsArrayOfObjects.map(co => ({
    key: (i += 1).toString(),
    value: co.countryCodeTwoChar,
    text: co.description,
  }));
  return results;
}

// Component

/**
 * @param {{ gaData: import("../../../../../../shared/services/googleAnalytics").GAEventObject}} props
 */
export const Country = ({ gaData }) => {
  const label = "Country of citizenship";
  const name = "CitizenshipCountry";

  const { dataSourceCountriesStates } = useRfiContext();
  const [countryOptions, setCountries] = useState([
    {
      key: "1",
      value: "error",
      text: "Load failed. Please try again in 5 minutes.",
    },
  ]);

  // Countries
  useEffect(() => {
    // Fetch country options.
    fetchCountries(dataSourceCountriesStates, getCountryOptions).then(data => {
      // Set state on countryOptions.
      setCountries(data);
    });
  }, []); // Run only once

  return (
    <RfiSelect
      label={label}
      id={name}
      name={name}
      options={countryOptions}
      onBlur={e =>
        trackGAEvent({
          ...gaData,
          event: "select",
          type: label,
          text: e.target.selectedOptions[0].innerText,
        })
      }
    />
  );
};

Country.propTypes = { gaData: gaEventPropTypes };
