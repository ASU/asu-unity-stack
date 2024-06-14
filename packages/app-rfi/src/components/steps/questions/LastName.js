import React from "react";

import { gaEventPropTypes, trackGAEvent } from "../../../../../../shared";
import { RfiTextInput } from "../../controls";

/**
 * @param {{ gaData: import("../../../../../../shared/services/googleAnalytics").GAEventObject}} props
 */
export const LastName = ({ gaData }) => {
  return (
    <RfiTextInput
      label="Last name"
      id="LastName"
      name="LastName"
      requiredIcon
      required
      onBlur={e =>
        trackGAEvent({
          ...gaData,
          section: "about me ^ last name​",
          text: e.target.value,
        })
      }
    />
  );
};

LastName.propTypes = { gaData: gaEventPropTypes };
