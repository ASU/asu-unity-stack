import React from "react";

import { gaEventPropTypes, trackGAEvent } from "../../../../../../shared";
import { RfiSelect } from "../../controls";

const veteranStatusOptions = [
  { key: "1", value: "None", text: "None" },
  { key: "2", value: "Active Duty", text: "Active Duty" },
  { key: "3", value: "National Guard", text: "National Guard" },
  { key: "4", value: "Veteran", text: "Veteran" },
  { key: "5", value: "Armed forces reserve", text: "Armed forces reserve" },
  { key: "6", value: "Spouse/Dependent", text: "Spouse/Dependent" },
];

/**
 * @param {{ gaData: import("../../../../../../shared/services/googleAnalytics").GAEventObject}} props
 */
export const MilitaryStatus = ({ gaData }) => {
  const label = "Military/veteran status";
  const name = "MilitaryStatus";
  return (
    <RfiSelect
      label={label}
      id={name}
      name={name}
      options={veteranStatusOptions}
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

/*
  TODO: Field will be replaced in the near future
  We became aware of the need to revert this field in ERFI-148 2024-07-08

  return (
    <RfiRadioGroup
      label="Have you served in the U.S. Military or are you a military dependent?"
      id="MilitaryStatus"
      name="MilitaryStatus"
      options={[
        { key: "0", text: "Yes", value: "Yes" },
        { key: "1", text: "No", value: "No" },
      ]}
    />
  );
*/

MilitaryStatus.propTypes = { gaData: gaEventPropTypes };
