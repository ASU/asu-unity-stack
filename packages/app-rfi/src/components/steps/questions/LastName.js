import React from "react";

import { gaEventPropTypes, trackGAEvent } from "../../../../../../shared";
import { RfiTextInput } from "../../controls";
import { PII_VALUE } from "../../../core/utils/constants";

/**
 * @param {{ gaData: import("../../../../../../shared/services/googleAnalytics").GAEventObject}} props
 */
export const LastName = ({ gaData }) => {
  const label = "Last name";
  const name = "LastName";

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

LastName.propTypes = { gaData: gaEventPropTypes };
