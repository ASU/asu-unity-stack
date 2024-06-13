import React, { useEffect, useState } from "react";

import { trackGAEvent } from "../../../../../../shared";
import {
  FAILED_OPTIONS_DEFAULT,
  GA_EVENT_DEFAULT,
  KEY,
} from "../../../core/utils/constants";
import { useRfiContext } from "../../../core/utils/rfiContext";
import { RfiSelect } from "../../controls";

export const Interest2 = () => {
  const [programInterestOptions, setProgramInterestOptions] = useState(
    FAILED_OPTIONS_DEFAULT
  );

  const {
    programOfInterest,
    degreeDataList,
    programOfInterestOptional,
    formik: { values },
  } = useRfiContext();

  useEffect(() => {
    const poiOptions = degreeDataList
      .filter(
        ({ planCategories }) =>
          !values.Interest1 || planCategories.includes(values.Interest1)
      )
      .map(({ acadPlanCode: value, title: text }, i) => ({
        key: `${i}`,
        value,
        text,
      }));

    if (poiOptions.length === 0) {
      setProgramInterestOptions(FAILED_OPTIONS_DEFAULT);
    } else {
      setProgramInterestOptions(poiOptions);
    }
  }, [
    degreeDataList,
    values.Campus,
    values.CareerAndStudentType,
    values.Interest1,
  ]);

  return (
    <RfiSelect
      label="Program of interest"
      id="Interest2"
      name="Interest2"
      options={programInterestOptions}
      disabled={programOfInterest}
      requiredIcon={!programOfInterestOptional || values.Campus === KEY.ONLINE}
      required={!programOfInterestOptional || values.Campus === KEY.ONLINE}
      onBlur={e =>
        trackGAEvent({
          ...GA_EVENT_DEFAULT,
          type: "Program of interest",
          text: e.target.selectedOptions[0].innerText,
        })
      }
    />
  );
};
