import React from "react";

import { gaEventPropTypes, trackGAEvent } from "@asu/shared";
import { PII_VALUE } from "../../../core/utils/constants";
import { RfiTextInput } from "../../controls";

/**
 * @param {{ gaData: import("@asu/shared").GAEventObject}} props
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
