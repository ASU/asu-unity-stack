import React, { useEffect, useState } from "react";

import { trackGAEvent } from "../../../../../../shared";
import {
  FAILED_OPTIONS_DEFAULT,
  GA_EVENT_DEFAULT,
  KEY,
  STUDENT,
  STUDENT_OPTIONS_DEFAULT,
} from "../../../core/utils/constants";
import { useRfiContext } from "../../../core/utils/rfiContext";
import { RfiSelect } from "../../controls";

export const Interest1 = () => {
  const [areaInterestOptions, setAreaInterestOptions] = useState(
    FAILED_OPTIONS_DEFAULT
  );

  const {
    programOfInterest,
    degreeDataList,
    degreeData,
    formik: { values },
  } = useRfiContext();

  // Interest1: areaInterestOptions filter and set logic.
  useEffect(() => {
    const aoiOptions = [
      ...new Set(
        degreeDataList
          .filter(({ planCategories }) => planCategories)
          .map(({ planCategories }) => planCategories)
          .flat()
      ),
    ]
      .sort()
      .map((value, i) => ({ key: `${i}`, value, text: value }));

    if (aoiOptions.length === 0) {
      setAreaInterestOptions(FAILED_OPTIONS_DEFAULT);
    } else {
      setAreaInterestOptions(aoiOptions);
    }
  }, [degreeDataList, values.CareerAndStudentType, values.Campus]);

  return areaInterestOptions.length === 1 ? (
    <input
      type="hidden"
      name="Interest1"
      value={areaInterestOptions[0].value}
    />
  ) : (
    <RfiSelect
      label="Area of interest"
      id="Interest1"
      name="Interest1"
      options={areaInterestOptions}
      requiredIcon
      required
      onBlur={e =>
        trackGAEvent({
          ...GA_EVENT_DEFAULT,
          type: "Area of interest",
          text: e.target.selectedOptions[0].innerText,
        })
      }
    />
  );
};
