import React, { useEffect, useState } from "react";

import { trackGAEvent } from "../../../../../../shared";
import {
  CAMPUS_OPTIONS_DEFAULT,
  GA_EVENT_DEFAULT,
  KEY,
} from "../../../core/utils/constants";
import { useRfiContext } from "../../../core/utils/rfiContext";
import { RfiTextInput } from "../../controls";

export const FirstName = () => {
  const {
    programOfInterest,
    formik: { values },
  } = useRfiContext();

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
