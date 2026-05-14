// @ts-check
import { deepCloner } from "@asu/shared";
import { KEY } from "./constants";
import { pushDataLayerEventToGa, setClientId } from "./google-analytics";
import * as questions from "../../components/steps/questions";

/**
 * @typedef {Object} FormPayload
 * @property {number} [datetime]
 * @property {number} [Test]
 * @property {string} [BirthDate]
 * @property {string} [Campus]
 * @property {string} [CampusProgramHasChoice]
 * @property {string} [Career]
 * @property {string} [CareerAndStudentType]
 * @property {string} [CitizenshipCountry]
 * @property {string} [Country]
 * @property {string} [Email]
 * @property {string} [EmailAddress]
 * @property {string} [EntryTerm]
 * @property {string} [FirstName]
 * @property {string} [GdprConsent]
 * @property {string} [Interest1]
 * @property {string} [Interest2]
 * @property {string} [LastName]
 * @property {string} [MilitaryStatus]
 * @property {string} [Phone]
 * @property {string} [Source]
 * @property {string} [StudentType]
 * @property {string} [URL]
 * @property {string} [Zip]
 * @property {string} [ZipCode]
 */

/**
 * @typedef {Object} SubmissionResponse
 * @property {string} status
 * @property {string} message
 */

/**
 * In order to make a field not required, we set the default or blank value
 * to {KEY.FALSE_EMPTY}. This way we do not need to alter validation schemas. Remove all
 * {KEY.FALSE_EMPTY} values before we submit
 * @param {Object.<string, *>} values
 * @returns {Object.<string, *>}
 */
const removeUnansweredFields = (/** @type {FormPayload} */ values) =>
  Object.entries(values)
    .filter(([_, value]) => value !== undefined)
    .filter(([_, value]) => value !== KEY.FALSE_EMPTY)
    .reduce((result, [key, value]) => ({ ...result, [key]: value }), {});

/* Remove keys that appear from side effects */
/**
 * @param {FormPayload} payload
 * @returns {FormPayload}
 */
function submissionFormFieldRemoveSideEffectKeys(
  /** @type {FormPayload} */ payload
) {
  let output = { ...payload };

  // Fix for un/controlled switch warning, made in RfiStepper.js, leaves this
  // artifact. Remove Email.
  delete output.Email;
  // side effect of phone number country code CitizenshipCountry
  delete output.CitizenshipCountry;
  delete output.Country;

  return output;
}

/* Marshall and prepare values for submission payload. */
/**
 * @param {FormPayload} payload
 * @returns {FormPayload}
 */
function submissionFormFieldPrep(/** @type {FormPayload} */ payload) {
  // ADJUST AND PROCESS FORM FIELDS

  let output = payload;

  // Unpack CareerAndStudentType. Select list selection is used to derive two
  // fields for the payload.
  switch (output.CareerAndStudentType) {
    case "First Time Freshman":
      output.Career = "UGRAD";
      output.StudentType = "First Time Freshman";
      break;
    case "Transfer":
      output.Career = "UGRAD";
      output.StudentType = "Transfer";
      break;
    case "Readmission":
      output.Career = "GRAD";
      // No StudentType
      break;
    default:
    // do nothing
  }
  delete output.CareerAndStudentType;

  output.Campus = output.CampusProgramHasChoice || output.Campus;
  delete output.CampusProgramHasChoice;

  // Consolidate Zip and ZipCode, favoring Zip.
  output.Zip = output.Zip ? output.Zip : output.ZipCode;
  delete output.ZipCode;

  output = submissionFormFieldRemoveSideEffectKeys(output);

  // Can't transform the BirthDate to iso value during validation as it breaks
  // type checking in Yup, so doing it here. Also... Yup.date() lets dates
  // without divider characters through but toISOString() then chokes,
  // so in those cases, since it is an optional field, we drop the date from
  // the payload, considering it bad data. The regex test ensures there's 2
  // of / or - or . characters in the string. They can be mixed.
  // if (new RegExp(/[.|/|-].{2}/).test(output.BirthDate)) {
  //   output.BirthDate = output.BirthDate
  //     ? new Date(output.BirthDate).toISOString()
  //     : undefined;
  // } else {
  //   // Is invalid date in the eyes of toISOString(), so drop.
  //   output.BirthDate = undefined;
  // }

  return output;
}

function submissionSetHiddenFields(
  /** @type {FormPayload} */ payload,
  /** @type {Boolean} */ test
) {
  // "HIDDEN" FIELDS THAT DON'T APPEAR IN THE FORM.

  const output = payload;

  // Stub in sourceid. Actual value will be added in the form's host site proxy.
  // sourceid is treated securely like an API key and kept out of the frontend.
  output.Source = "mock";

  // Whether we're in test mode or not: 1 or nothing. A prop value passed down.
  if (test) {
    output.Test = 1;
  }

  // URL. Full URL, including path and params so campaign details can be
  // harvested by downstream apps.
  output.URL = window.location.href;

  // datetime : timestamp
  output.datetime = Date.now();

  // enterpriseclientid, sourceid and ga_clientid hidden fields added
  // seperately in submit handler from where this function is also called.

  return output;
}

const preparePushGaEventData = (/** @type {FormPayload} */ payload) => {
  const gaData = {
    event: "rfi-submit",
    name: "onclick",
    action: "click",
    type: "click",
    region: "main content",
    section: "request information",
    text: "submit",
  };
  let formValues = { ...payload };
  formValues = removeUnansweredFields(formValues);
  formValues = submissionFormFieldRemoveSideEffectKeys(formValues);

  Object.entries(formValues).forEach(([key, val]) => {
    // @ts-ignore
    const gaKey = questions[key]?.gaName || key;
    // @ts-ignore
    gaData[gaKey] = val;
  });

  pushDataLayerEventToGa(gaData);
};

export const rfiSubmit = async (
  /** @type {FormPayload} */ value,
  submissionUrl = "",
  test = false,
  callback = (/** @type {any} */ _) => ({})
) => {
  // MARSHALL FIELDS FOR THE PAYLOAD

  let payload = deepCloner(value);
  payload = submissionFormFieldPrep(payload);
  payload = submissionSetHiddenFields(payload, test);
  payload = removeUnansweredFields(payload);

  // Patch ASUOnline clientid or enterpriseclientid and also
  // ga_clientid onto payload.
  // TODO Confirm sourcing for ga_clientid
  payload = setClientId(payload);

  // Google Analytics push to simulate submit button click
  // after validation has occurred.
  // Send form answers to dataLayer using raw form values as users entered them.
  preparePushGaEventData(value);

  if (test) {
    // eslint-disable-next-line no-console
    console.log(`SUBMITTED FORM \n${JSON.stringify(payload, null, 2)}`);
  }

  // timeout promise that resolves after 2 seconds
  const timeoutPromise = new Promise(resolve => {
    setTimeout(() => {
      resolve({ status: "timeout", message: "Assumed success after timeout" });
    }, 2000);
  });

  const fetchPromise = fetch(`${submissionUrl}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  }).then(response => response.json());

  // Race the fetch promise against the timeout promise
  return Promise.race([fetchPromise, timeoutPromise]).then(response =>
    callback(response)
  );
};
