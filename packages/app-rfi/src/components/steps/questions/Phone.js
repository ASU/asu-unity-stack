import React from "react";

import { trackGAEvent } from "../../../../../../shared";
import { RfiPhone } from "../../controls";

export const Phone = () => {
  return (
    <RfiPhone
      label="Phone"
      id="Phone"
      name="Phone"
      requiredIcon
      required
      onBlur={e =>
        trackGAEvent({
          section: "about me ^ phone number​",
          text: e.target.value,
        })
      }
    />
  );
};
