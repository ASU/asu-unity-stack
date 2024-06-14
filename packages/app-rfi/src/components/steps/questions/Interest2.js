import React, { useEffect, useState } from "react";

import { gaEventPropTypes, trackGAEvent } from "../../../../../../shared";
import { FAILED_OPTIONS_DEFAULT, KEY } from "../../../core/utils/constants";
import { useRfiContext } from "../../../core/utils/rfiContext";
import { RfiSelect } from "../../controls";

/**
 * @param {{ gaData: import("../../../../../../shared/services/googleAnalytics").GAEventObject}} props
 */
export const Interest2 = ({ gaData }) => {
  const label = "Program of interest";
  const name = "Interest2";

  const [programInterestOptions, setProgramInterestOptions] = useState(
    FAILED_OPTIONS_DEFAULT
  );

  const {
    programOfInterest,
    degreeDataList,
    programOfInterestOptional,
    formik: { values, setFieldValue },
  } = useRfiContext();

  useEffect(() => {
    const poiOptions = degreeDataList
      .filter(
        ({ planCategories }) =>
          !values.Interest1 ||
          values.Interest1 === "NA" ||
          planCategories.includes(values.Interest1)
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

    if (programOfInterest) {
      setFieldValue(name, programOfInterest);
    }
  }, [degreeDataList, values.Interest1, programOfInterest]);

  return (
    <RfiSelect
      label={label}
      id={name}
      name={name}
      options={programInterestOptions}
      disabled={!!programOfInterest}
      requiredIcon={!programOfInterestOptional || values.Campus === KEY.ONLINE}
      required={!programOfInterestOptional || values.Campus === KEY.ONLINE}
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

Interest2.propTypes = { gaData: gaEventPropTypes };
