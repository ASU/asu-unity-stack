import React, { useEffect, useState } from "react";

import { trackGAEvent } from "../../../../../../shared";
import { KEY } from "../../../core/utils/constants";
import { useRfiContext } from "../../../core/utils/rfiContext";
import { RfiTextInput } from "../../controls";

export const ZipCode = () => {
  const [required, setRequired] = useState(false);
  const {
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
