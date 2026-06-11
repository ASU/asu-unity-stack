import React from "react";

import { gaEventPropTypes, trackGAEvent } from "@asu/shared";
import { PII_VALUE } from "../../../core/utils/constants";
import { RfiPhone } from "../../controls";

/**
 * @param {{ gaData: import("@asu/shared").GAEventObject}} props
 */
export const Phone = ({ gaData }) => {
  const label = "Phone";
  const name = "Phone";

  return (
    <RfiPhone
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

Phone.propTypes = { gaData: gaEventPropTypes };
Phone.gaName = "phone";
