import React, { useEffect, useState } from "react";

import { trackGAEvent } from "../../../../../../shared";
import {
  CAMPUS_OPTIONS_DEFAULT,
  GA_EVENT_DEFAULT,
  KEY,
} from "../../../core/utils/constants";
import { useRfiContext } from "../../../core/utils/rfiContext";
import { RfiEmailInput, RfiSelect } from "../../controls";

export const EmailAddress = () => {
  const {
    programOfInterest,
    formik: { values },
  } = useRfiContext();

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
