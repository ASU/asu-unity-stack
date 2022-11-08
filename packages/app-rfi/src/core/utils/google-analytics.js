// @ts-nocheck
/* eslint-disable no-undef, func-names, no-unused-vars, no-plusplus */

/* dataLayer event push to GA. */
export function pushDataLayerEventToGa(eventValue) {
  // PUSH TO GA.
  if (typeof dataLayer !== "undefined") {
    dataLayer.push({ event: eventValue });
  }
}

/* This function sets the client Ids from GA accounts
 * Based on code by David Lemus - EdPlus @ ASU
 * @asuonline account Id: UA-141599-1
 * @asu enterprise account ID: UA-42798992-4
 * Updated Nov 2022 to get clientId via _ga cookie. (ERFI-125)
 */
export function setClientId(payload) {
  const output = payload;
  const gaUserId = document.cookie
    .match(/_ga=(.+?);/)[1]
    .split(".")
    .slice(-2)
    .join(".");
  output.enterpriseclientid = gaUserId;
  output.ga_clientid = gaUserId;
  return output;
}
