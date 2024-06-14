import React from "react";

import { gaEventPropTypes, trackGAEvent } from "../../../../../../shared";
import { RfiTextInput } from "../../controls";

/**
 * @param {{ gaData: import("../../../../../../shared/services/googleAnalytics").GAEventObject}} props
 */
export const FirstName = ({ gaData }) => {
  return (
    <RfiTextInput
      label="First name"
      id="FirstName"
      name="FirstName"
      requiredIcon
      required
      onBlur={e =>
        trackGAEvent({
          ...gaData,
          section: "about me ^ first name​",
          text: e.target.value,
        })
      }
    />
  );
};

FirstName.propTypes = { gaData: gaEventPropTypes };
