// @ts-check
import { useFormikContext } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";

import { trackGAEvent } from "../../../../../../shared";
import { useRfiContext } from "../../../core/utils/rfiContext";
import {
  RfiTextInput,
  RfiDateInput,
  RfiTextArea,
  RfiSelect,
  RfiRadioGroup,
} from "../../controls";

// Component

export const MilitaryStatus = () => {
  return (
    <RfiRadioGroup
      label="Have you served in the U.S. Military or are you a military dependent?"
      id="MilitaryStatus"
      name="MilitaryStatus"
      options={[
        { key: "0", text: "Yes", value: "Yes" },
        { key: "1", text: "No", value: "No" },
      ]}
      // onClick={e =>
      //   trackGAEvent({
      //     // ...defaultGAEvent,
      //     event: "select",
      //     type: "Military/veteran status",
      //     section: "more about me",
      //     text: e.target.selectedOptions[0].innerText,
      //   })
      // }
    />
  );
};
