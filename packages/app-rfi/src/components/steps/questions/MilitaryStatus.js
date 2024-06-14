import React from "react";

import { gaEventPropTypes } from "../../../../../../shared";
import { RfiRadioGroup } from "../../controls";

/**
 * @param {{ gaData: import("../../../../../../shared/services/googleAnalytics").GAEventObject}} props
 */
export const MilitaryStatus = ({ gaData }) => {
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
};

MilitaryStatus.propTypes = { gaData: gaEventPropTypes };
