import React, { useEffect } from "react";

import { gaEventPropTypes, trackGAEvent } from "../../../../../../shared";
import { KEY } from "../../../core/utils/constants";
import { useRfiContext } from "../../../core/utils/rfiContext";
import { RfiTextInput } from "../../controls";

/**
 * @param {{ gaData: import("../../../../../../shared/services/googleAnalytics").GAEventObject}} props
 */
export const ZipCode = ({ gaData }) => {
  const label = "Postal code";
  const name = "ZipCode";

  const {
    formik: { values, setFieldValue },
  } = useRfiContext();

  useEffect(() => {
    if (values.Campus === KEY.ONLINE) {
      setFieldValue(name, "NA");
    } else if (values[name] === "NA") {
      setFieldValue(name, "");
    }
  }, [values.Campus]);

  if (values.Campus === KEY.ONLINE) {
    return <></>;
  }

  return (
    <RfiTextInput
      label={label}
      id={name}
      name={name}
      requiredIcon
      required
      onBlur={e =>
        trackGAEvent({
          ...gaData,
          type: label,
          text: e.target.value,
        })
      }
    />
  );
};

ZipCode.propTypes = { gaData: gaEventPropTypes };
