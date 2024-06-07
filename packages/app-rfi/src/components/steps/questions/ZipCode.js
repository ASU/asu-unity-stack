import React, { useEffect, useState } from "react";

import { trackGAEvent } from "../../../../../../shared";
import {
  CAMPUS_OPTIONS_DEFAULT,
  GA_EVENT_DEFAULT,
  KEY,
} from "../../../core/utils/constants";
import { useRfiContext } from "../../../core/utils/rfiContext";
import { RfiPhone, RfiTextInput } from "../../controls";

export const ZipCode = () => {
  const [required, setRequired] = useState(false);
  const {
    programOfInterest,
    formik: { values },
  } = useRfiContext();

  // Term options
  useEffect(() => {
    setRequired(values.Campus !== KEY.ONLINE);
  }, [values.Campus]);

  return (
    <RfiTextInput
      label="Postal code"
      id="ZipCode"
      name="ZipCode"
      requiredIcon={required}
      required={required}
      onBlur={e =>
        trackGAEvent({
          section: "about me ^ zip code​",
          text: e.target.value,
        })
      }
    />
  );
};
