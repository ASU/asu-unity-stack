// @ts-check
/* eslint-disable react/no-danger */
import React from "react";

import { trackGAEvent } from "../../../../../../shared";
import { KEY } from "../../../core/utils/constants";
import { useRfiContext } from "../../../core/utils/rfiContext";
import { RfiCheckboxSingle } from "../../controls";

const defaultInputEvent = {
  event: "form",
  action: "click",
  name: "onclick",
  type: "click",
  region: "main content",
  component: "step 2 of 3",
};

function createMarkup(output) {
  return { __html: output };
}

export const GdprConsent = () => {
  const {
    formik: { values },
  } = useRfiContext();

  let gdprWording = `By submitting my information, I consent to ASU contacting me about education services using email, direct mail, SMS/texting and digital platforms. Message and data rates may apply. Consent is not required to receive services, and I can withdraw consent by contacting ASU at <a href="mailto:UnsubFutureStudentComm@asu.edu">UnsubFutureStudentComm@asu.edu</a> or as described in communications I receive. I consent to ASU’s <a href="https://asuonline.asu.edu/text-terms/">mobile terms and conditions</a> and <a href="https://asuonline.asu.edu/web-analytics-privacy-2/">Privacy Statements</a>, including the European Supplement.`;
  if (values.campus === KEY.ONLNE) {
    gdprWording = `By submitting my information, I consent to ASU contacting me about educational services using automated calls, prerecorded voice messages, SMS/text messages or email at the information provided above. Message and data rates may apply. Consent is not required to receive services, and I may call ASU directly at <a href="tel:8662776589">866-277-6589</a>. I consent to ASU’s <a href="https://asuonline.asu.edu/text-terms/">mobile terms and conditions</a>, and <a href="https://asuonline.asu.edu/web-analytics-privacy-2/">Privacy Statements</a>, including the European Supplement.`;
  }
  return (
    <div className="rfi-consent">
      <div
        className="rfi-consent-wording"
        dangerouslySetInnerHTML={createMarkup(gdprWording)}
      />
      <RfiCheckboxSingle
        id="GdprConsent"
        name="GdprConsent"
        value="1"
        requiredIcon
        required
        onBlur={e => {
          trackGAEvent({
            ...defaultInputEvent,
            action: e.target.checked ? "click" : "unclick",
            event: "select",
            type: "checkbox",
            section: "about me",
            text: "i consent",
          });
        }}
      >
        I consent
      </RfiCheckboxSingle>
    </div>
  );
};
