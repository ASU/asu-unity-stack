import React from "react";

import { trackGAEvent } from "../../../../../../shared";
import { RfiEmailInput } from "../../controls";

export const EmailAddress = () => {
  return (
    <RfiEmailInput
      label="Email Address"
      id="EmailAddress"
      name="EmailAddress"
      requiredIcon
      required
      onBlur={e =>
        trackGAEvent({
          section: "about me ^ email address​",
          text: e.target.value,
        })
      }
    />
  );
};
