import React, { useEffect } from "react";

import { gaEventPropTypes, trackGAEvent } from "../../../../../../shared";
import { KEY, PII_VALUE } from "../../../core/utils/constants";
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

  const isNotUS = values.Country && values.Country !== "US";
  const isOnline = values.Campus === KEY.ONLINE;

  useEffect(() => {
    if (isNotUS || isOnline) {
      setFieldValue(name, KEY.FALSE_EMPTY);
    } else if (values[name] === KEY.FALSE_EMPTY) {
      setFieldValue(name, "");
    }
  }, [values.Campus, values.Country]);

  if (isNotUS || isOnline) {
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
          text: PII_VALUE,
        })
      }
    />
  );
};

ZipCode.propTypes = { gaData: gaEventPropTypes };
