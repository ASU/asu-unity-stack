import React from "react";

import { gaEventPropTypes, trackGAEvent } from "../../../../../../shared";
import { PII_VALUE } from "../../../core/utils/constants";
import { RfiTextInput } from "../../controls";

/**
 * @param {{ gaData: import("../../../../../../shared/services/googleAnalytics").GAEventObject}} props
 */
export const FirstName = ({ gaData }) => {
  const label = "First name";
  const name = "FirstName";

  return (
    <RfiTextInput
      label={label}
      id={name}
      name={name}
      requiredIcon
      required
      onBlur={e =>
        trackGAEvent({
          ...gaData,
          type: label,
          text: PII_VALUE,
        })
      }
    />
  );
};

FirstName.propTypes = { gaData: gaEventPropTypes };
