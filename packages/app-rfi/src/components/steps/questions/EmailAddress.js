import React from "react";

import { gaEventPropTypes, trackGAEvent } from "../../../../../../shared";
import { RfiEmailInput } from "../../controls";
import { PII_VALUE } from "../../../core/utils/constants";

/**
 * @param {{ gaData: import("../../../../../../shared/services/googleAnalytics").GAEventObject}} props
 */
export const EmailAddress = ({ gaData }) => {
  const label = "Email Address";
  const name = "EmailAddress";

  return (
    <RfiEmailInput
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

EmailAddress.propTypes = { gaData: gaEventPropTypes };
