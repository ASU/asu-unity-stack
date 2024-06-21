import React, { useEffect, useState } from "react";

import { gaEventPropTypes, trackGAEvent } from "../../../../../../shared";
import { FAILED_OPTIONS_DEFAULT, KEY } from "../../../core/utils/constants";
import { useRfiContext } from "../../../core/utils/rfiContext";
import { RfiSelect } from "../../controls";

/**
 * @param {{ gaData: import("../../../../../../shared/services/googleAnalytics").GAEventObject}} props
 */
export const Interest1 = ({ gaData }) => {
  const label = "Area of interest";
  const name = "Interest1";

  const [areaInterestOptions, setAreaInterestOptions] = useState(
    FAILED_OPTIONS_DEFAULT
  );

  const {
    programOfInterest,
    areaOfInterestOptional,
    degreeDataList,
    formik: { values, setFieldValue },
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

    if (programOfInterest || areaOfInterestOptional) {
      setFieldValue(name, KEY.FALSE_EMPTY);
    } else if (!programOfInterest && values[name] === KEY.FALSE_EMPTY) {
      setFieldValue(name, "");
    }
  }, [
    degreeDataList,
    values.CareerAndStudentType,
    values.Campus,
    programOfInterest,
    areaOfInterestOptional,
  ]);

  if (programOfInterest) {
    return <></>;
  }

  return (
    <RfiSelect
      label={label}
      id={name}
      name={name}
      options={areaInterestOptions}
      requiredIcon={!areaOfInterestOptional}
      required={!areaOfInterestOptional}
      onBlur={e =>
        trackGAEvent({
          ...gaData,
          event: "select",
          type: label,
          text: e.target.selectedOptions[0].innerText,
        })
      }
    />
  );
};

Interest1.propTypes = { gaData: gaEventPropTypes };
