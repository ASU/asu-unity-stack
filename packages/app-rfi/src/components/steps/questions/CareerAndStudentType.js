import React, { useEffect, useState } from "react";

import { gaEventPropTypes, trackGAEvent } from "../../../../../../shared";
import {
  KEY,
  STUDENT,
  STUDENT_OPTIONS_DEFAULT,
} from "../../../core/utils/constants";
import { useRfiContext } from "../../../core/utils/rfiContext";
import { RfiSelect } from "../../controls";

/**
 * @param {{ gaData: import("../../../../../../shared/services/googleAnalytics").GAEventObject}} props
 */
export const CareerAndStudentType = ({ gaData }) => {
  const label = "Select your student status";
  const name = "CareerAndStudentType";

  const [studentTypeOptions, setStudentTypeOptions] = useState(
    STUDENT_OPTIONS_DEFAULT
  );

  const {
    programOfInterest,
    degreeData,
    formik: { setFieldValue },
  } = useRfiContext();

  useEffect(() => {
    if (programOfInterest && degreeData?.degreeType === KEY.UG) {
      // PoI is undergrad degree.
      // Set only undergrad options for studentTypeOptions.
      setStudentTypeOptions([STUDENT.FRESHMAN, STUDENT.TRANSFER]);
    } else if (programOfInterest && degreeData?.degreeType === KEY.GR) {
      // PoI is graduate degree but we still show the option and default it to graduate.
      setStudentTypeOptions([STUDENT.READMISSION]);
      setFieldValue(name, STUDENT.READMISSION.value);
    }
  }, [degreeData]);

  return (
    <RfiSelect
      label={label}
      id={name}
      name={name}
      options={studentTypeOptions}
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
  )
};

CareerAndStudentType.propTypes = { gaData: gaEventPropTypes };
