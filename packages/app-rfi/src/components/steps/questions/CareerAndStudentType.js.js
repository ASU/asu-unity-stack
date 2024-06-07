import React, { useEffect, useState } from "react";

import { trackGAEvent } from "../../../../../../shared";
import {
  CAMPUS_OPTIONS_DEFAULT,
  GA_EVENT_DEFAULT,
  KEY,
  STUDENT,
  STUDENT_OPTIONS_DEFAULT,
} from "../../../core/utils/constants";
import { useRfiContext } from "../../../core/utils/rfiContext";
import { RfiSelect } from "../../controls";

export const CareerAndStudentType = () => {
  const [studentTypeOptions, setStudentTypeOptions] = useState(
    STUDENT_OPTIONS_DEFAULT
  );

  const {
    programOfInterest,
    degreeData,
    formik: { values },
  } = useRfiContext();

  useEffect(() => {
    console.log(degreeData);
    if (programOfInterest && degreeData?.degreeType === KEY.UG) {
      // PoI is undergrad degree.
      // Set only undergrad options for studentTypeOptions.

      setStudentTypeOptions([STUDENT.FRESHMAN, STUDENT.TRANSFER]);
    } else if (programOfInterest) {
      // PoI is graduate degree.
      // Setting the options here helps trigger dependent useEffects, even
      // though we won't display this single option.
      setStudentTypeOptions([STUDENT.READMISSION]);
    }
  }, [degreeData.acadPlanCode]);

  return studentTypeOptions.length === 1 ? (
    <input
      type="hidden"
      name="CareerAndStudentType"
      value={studentTypeOptions[0].value}
    />
  ) : (
    <RfiSelect
      label="Select your student status"
      id="CareerAndStudentType"
      name="CareerAndStudentType"
      options={studentTypeOptions}
      requiredIcon
      required
      onBlur={e =>
        trackGAEvent({
          ...GA_EVENT_DEFAULT,
          type: "Select your student status",
          text: e.target.selectedOptions[0].innerText,
        })
      }
    />
  );
};
