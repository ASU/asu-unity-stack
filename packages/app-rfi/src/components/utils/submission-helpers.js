// @ts-check
/* Marshall and prepare values for submission payload. */
export function submissionFormFieldPrep(value) {
  // ADJUST AND PROCESS FORM FIELDS

  // Unpack CareerAndStudentType. Select list selection is used to derive two
  // fields for the payload.
  switch (value.CareerAndStudentType) {
    case "First Time Freshman":
      value.Career = "UGRAD";
      value.StudentType = "First Time Freshman";
      break;
    case "Transfer":
      value.Career = "UGRAD";
      value.StudentType = "Transfer";
      break;
    case "Readmission":
      value.Career = "GRAD";
      // No StudentType
      break;
  }
  delete value.CareerAndStudentType;

  // Consolidate Zip and ZipCode, favoring Zip.
  value.Zip = value.Zip ? value.Zip : value.ZipCode;
  delete value.ZipCode;
}

export function submissionSetHiddenFields(value, Test) {
  // "HIDDEN" FIELDS THAT DON'T APPEAR IN THE FORM.

  // Stub in sourceid. Actual value will be added in the form's host site proxy.
  // sourceid is treated securely like an API key and kept out of the frontend.
  value.Source = "mock";

  // Whether we're in test mode or not: 1 or nothing. A prop value passed down.
  value.Test = Test ? 1 : undefined;

  // URL. Full URL, including path and params so campaign details can be
  // harvested by downstream apps.
  value.URL = window.location.href;

  // datetime : timestamp
  value.datetime = Date.now();

  // enterpriseclientid, sourceid and ga_clientid hidden fields added
  // seperately in submit handler from where this function is also called.
}
