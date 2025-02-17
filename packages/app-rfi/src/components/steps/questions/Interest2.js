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
    forceUpdatedPlan,
    programOfInterest,
    degreeDataList,
    programOfInterestOptional,
    formik: { values, setFieldValue },
  } = useRfiContext();

  const isRequired = !programOfInterestOptional;

  useEffect(() => {
    const poiOptions = degreeDataList
      .filter(({ rfiDisplay, acadPlanKey }) => {
        if (programOfInterest && programOfInterest === acadPlanKey) {
          return true;
        }
        if (rfiDisplay) {
          return true;
        }
        return false;
      })
      .filter(
        ({ planCategories }) =>
          !values.Interest1 ||
          values.Interest1 === KEY.FALSE_EMPTY ||
          planCategories.includes(values.Interest1)
      )
      .map(({ acadPlanKey: value, title: text }, i) => ({
        key: `${i}`,
        value,
        text,
      }));

    if (poiOptions.length === 0) {
      setProgramInterestOptions(FAILED_OPTIONS_DEFAULT);
    } else {
      setProgramInterestOptions(poiOptions);
    }

    const planIsOnline = values.Interest2?.indexOf("-") > -1;
    const campusIsOnline =
      (values.CampusProgramHasChoice || values.Campus) === KEY.ONLINE;
    const wrongApi =
      (campusIsOnline && !planIsOnline) || (!campusIsOnline && planIsOnline);
    const shouldForceUpdate = wrongApi && forceUpdatedPlan !== values.Interest2;

    if (shouldForceUpdate) {
      // If values.CampusProgramHasChoice changes the API between (DPL/ONLINE)
      // Interest2 will no longer match the acadPlanKey format and will need to
      // be updated to match the API. This logic is found in appState, but that
      // file does not have access to update the Formik Value.
      setFieldValue(name, forceUpdatedPlan);
    } else if (wrongApi && programOfInterest) {
      // Initially set Interest2 with the prop value programOfInterest
      setFieldValue(name, programOfInterest);
    } else if (!isRequired) {
      setFieldValue(name, KEY.FALSE_EMPTY);
    } else if (isRequired && values[name] === KEY.FALSE_EMPTY) {
      setFieldValue(name, "");
    }
  }, [
    forceUpdatedPlan,
    degreeDataList,
    values.Interest1,
    programOfInterest,
    programOfInterestOptional,
  ]);

  return (
    <RfiSelect
      label={label}
      id={name}
      name={name}
      options={programInterestOptions}
      disabled={!!programOfInterest}
      requiredIcon={isRequired}
      required={isRequired}
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
