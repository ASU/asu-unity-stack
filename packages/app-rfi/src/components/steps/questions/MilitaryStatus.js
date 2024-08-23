import React from "react";

import { gaEventPropTypes, trackGAEvent } from "../../../../../../shared";
import { RfiRadioGroup } from "../../controls";

/**
 * The form handler requires known values
 * - "None"
 * - "Active Duty"
 * - "National Guard"
 * - "Veteran"
 * - "Armed forces reserve"
 * - "Spouse/Dependent"
 */

const militaryOptions = [
  { key: "0", text: "Yes", value: "Active Duty" },
  { key: "1", text: "No", value: "None" },
];

/**
 * @param {{ gaData: import("../../../../../../shared/services/googleAnalytics").GAEventObject}} props
 */
export const MilitaryStatus = ({ gaData }) => {
  const label =
    "Have you served in the U.S. Military or are you a military dependent?";
  const name = "MilitaryStatus";

  return (
    <RfiRadioGroup
      label={label}
      id={name}
      name={name}
      options={militaryOptions}
      onBlur={e =>
        trackGAEvent({
          ...gaData,
          event: "select",
          type: label,
          text: e.target.value,
        })
      }
    />
  );
};

MilitaryStatus.propTypes = { gaData: gaEventPropTypes };
