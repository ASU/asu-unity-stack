import React, { useEffect, useState } from "react";

import { trackGAEvent } from "../../../../../../shared";
import {
  CAMPUS_OPTIONS_DEFAULT,
  GA_EVENT_DEFAULT,
  KEY,
} from "../../../core/utils/constants";
import { useRfiContext } from "../../../core/utils/rfiContext";
import { RfiSelect } from "../../controls";

export const Campus = () => {
  const {
    programOfInterest,
    formik: { values },
  } = useRfiContext();

  return programOfInterest !== undefined ? (
    <input type="hidden" name="Campus" value={values.Campus || KEY.NOPREF} />
  ) : (
    <RfiSelect
      label="Which applies to you?"
      id="Campus"
      name="Campus"
      options={CAMPUS_OPTIONS_DEFAULT}
      requiredIcon
      required
      onBlur={e =>
        trackGAEvent({
          ...GA_EVENT_DEFAULT,
          type: "Which applies to you?",
          text: e.target.selectedOptions[0].innerText,
        })
      }
    />
  );
};
