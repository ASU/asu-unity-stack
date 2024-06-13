import React from "react";

import { trackGAEvent } from "../../../../../../shared";
import { RfiTextInput } from "../../controls";

export const FirstName = () => {
  return (
    <RfiTextInput
      label="First name"
      id="FirstName"
      name="FirstName"
      requiredIcon
      required
      onBlur={e =>
        trackGAEvent({
          section: "about me ^ first name​",
          text: e.target.value,
        })
      }
    />
  );
};
