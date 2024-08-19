import React, { useEffect, useState } from "react";

import { gaEventPropTypes, trackGAEvent } from "../../../../../../shared";
import { KEY } from "../../../core/utils/constants";
import { useRfiContext } from "../../../core/utils/rfiContext";
import { RfiSelect } from "../../controls";

const getGenericTermOptions = () => {
  const termData = [];
  const currMo = new Date().getMonth();
  for (let i = 0; i < 5; i += 1) {
    // Use i to calculate out years.
    const year = new Date().getFullYear() + i;
    const mil = year.toString();
    const termSpring = mil.slice(0, 1) + mil.slice(2) + 1; // 1 == spring
    const termFall = mil.slice(0, 1) + mil.slice(2) + 7; // 7 == fall
    // Drop spring for current year.
    if (i > 0) {
      termData.push({
        key: termSpring,
        value: `${termSpring}:${year} Spring`,
        text: `${year} Spring`,
      });
    }
    // Drop fall for current year if currMo is greater than June.
    if (i > 0 || currMo < 6) {
      // Month is based off zero index.
      termData.push({
        key: termFall,
        value: `${termFall}:${year} Fall`,
        text: `${year} Fall`,
      });
    }
  }
  return termData;
};

/**
 * @param {{ gaData: import("../../../../../../shared/services/googleAnalytics").GAEventObject}} props
 */
export const EntryTerm = ({ gaData }) => {
  const label = "When do you anticipate starting at ASU?";
  const name = "EntryTerm";

  const [termOptions, setTermOptions] = useState(getGenericTermOptions());

  const {
    degreeData,
    formik: { values, setFieldValue },
  } = useRfiContext();

  // Term options
  useEffect(() => {
    // IF degree is graduate and values.Campus !== ONLNE, call and get terms
    // for the specific program.

    if (
      degreeData.acadPlanCode &&
      values.Campus !== KEY.ONLINE &&
      degreeData.degreeType === KEY.GR
    ) {
      // Convert object to array so we can .sort and .map.
      const termData = degreeData.applicationDeadlines
        ?.sort((a, b) => (a.strm > b.strm ? 1 : -1))
        .map(({ strm, strmDescription }, i) => ({
          key: `${i}`,
          value: strm,
          text: strmDescription,
        }));
      if (termData && termData.length > 0) {
        setTermOptions(termData);
      }
    } else {
      setTermOptions(getGenericTermOptions());
    }
  }, [degreeData.applicationDeadlines]); // Run once. If user changes degree, runs again on return to the step.

  useEffect(() => {
    if (values.Campus === KEY.ONLINE) {
      setFieldValue(name, KEY.FALSE_EMPTY);
    } else if (values[name] === KEY.FALSE_EMPTY) {
      setFieldValue(name, "");
    }
  }, [values.Campus]);

  if (values.Campus === KEY.ONLINE) {
    return <></>;
  }

  return (
    <>
      <RfiSelect
        label={label}
        id={name}
        name={name}
        options={termOptions}
        requiredIcon
        required
        onBlur={e =>
          trackGAEvent({
            ...gaData,
            event: "select",
            type: label,
            text: e.target.selectedOptions[0].innerText,
          })
        }
      />
    </>
  );
};

EntryTerm.propTypes = { gaData: gaEventPropTypes };
