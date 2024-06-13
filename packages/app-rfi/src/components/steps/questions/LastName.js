import React from "react";

import { trackGAEvent } from "../../../../../../shared";
import { RfiTextInput } from "../../controls";

export const LastName = () => {
  return (
    <RfiTextInput
      label="Last name"
      id="LastName"
      name="LastName"
      requiredIcon
      required
      onBlur={e =>
        trackGAEvent({
          section: "about me ^ last name​",
          text: e.target.value,
        })
      }
    />
  );
};
