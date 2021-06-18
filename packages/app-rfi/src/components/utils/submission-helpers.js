// @ts-check
/* Marshall and prepare values for submission payload. */
export function submissionFormFieldPrep(payload) {
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

  // Consolidate Zip and ZipCode, favoring Zip.
  output.Zip = output.Zip ? output.Zip : output.ZipCode;
  delete output.ZipCode;

  return output;
}

export function submissionSetHiddenFields(payload, Test) {
  // "HIDDEN" FIELDS THAT DON'T APPEAR IN THE FORM.

  const output = payload;

  // Stub in sourceid. Actual value will be added in the form's host site proxy.
  // sourceid is treated securely like an API key and kept out of the frontend.
  output.Source = "mock";

  // Whether we're in test mode or not: 1 or nothing. A prop value passed down.
  output.Test = Test ? 1 : undefined;

  // URL. Full URL, including path and params so campaign details can be
  // harvested by downstream apps.
  output.URL = window.location.href;

  // datetime : timestamp
  output.datetime = Date.now();

  // enterpriseclientid, sourceid and ga_clientid hidden fields added
  // seperately in submit handler from where this function is also called.

  return output;
}
