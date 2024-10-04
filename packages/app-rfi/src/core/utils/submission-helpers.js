// @ts-check
import { deepCloner } from "../../../../../shared/utils";
import { KEY } from "./constants";
import { pushDataLayerEventToGa, setClientId } from "./google-analytics";

/**
 * In order to make a field not required, we set the default or blank value
 * to {KEY.FALSE_EMPTY}. This way we do not need to alter validation schemas. Remove all
 * {KEY.FALSE_EMPTY} values before we submit
 * @param {*} values
 * @returns {*}
 */
const removeUnansweredFields = values =>
  Object.entries(values)
    .filter(([key, value]) => value !== KEY.FALSE_EMPTY)
    .reduce((result, [key, value]) => ({ ...result, [key]: value }), {});

/* Marshall and prepare values for submission payload. */
function submissionFormFieldPrep(payload) {
  // ADJUST AND PROCESS FORM FIELDS

  const output = payload;

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

  // Fix for un/controlled switch warning, made in RfiStepper.js, leaves this
  // artifact. Remove.
  delete output.Email;

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

function submissionSetHiddenFields(payload, test) {
  // "HIDDEN" FIELDS THAT DON'T APPEAR IN THE FORM.

  const output = payload;

  // Stub in sourceid. Actual value will be added in the form's host site proxy.
  // sourceid is treated securely like an API key and kept out of the frontend.
  output.Source = "mock";

  // Whether we're in test mode or not: 1 or nothing. A prop value passed down.
  output.Test = test ? 1 : undefined;

  // URL. Full URL, including path and params so campaign details can be
  // harvested by downstream apps.
  output.URL = window.location.href;

  // datetime : timestamp
  output.datetime = Date.now();

  // enterpriseclientid, sourceid and ga_clientid hidden fields added
  // seperately in submit handler from where this function is also called.

  return output;
}

export const rfiSubmit = async (
  value,
  submissionUrl,
  test,
  callback = a => ({})
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
  pushDataLayerEventToGa("rfi-submit");

  if (test) {
    // eslint-disable-goNext-line no-alert
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
