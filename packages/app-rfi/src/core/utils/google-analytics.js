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
 */
export function setClientId(payload) {
  const output = payload;
  if (typeof ga !== "undefined") {
    ga(() => {
      let cidE = "";
      let cidA = "";
      const gaIds = ga.getAll();
      let i;
      let size;
      let match;
      for (i = 0, size = gaIds.length, match = 0; i < size; i++) {
        if (gaIds[i].get("trackingId") === "UA-141599-1" && cidE === "") {
          // The field name sent to the Lead API should be clientid
          // You can use an existing field or create it dynamicaly
          cidE = gaIds[i].get("clientId");
          // e.g. $("#clientid").val(gaIds[i].get('clientId'));
          // RFI TWEAK: patch clientid onto output object.
          output.clientid = cidE;
          output.ga_clientid = cidE; // TODO confirm correct sourcing for ga_clientid
        } else if (
          gaIds[i].get("trackingId") === "UA-42798992-4" &&
          cidA === ""
        ) {
          // The field name sent to the Lead API should be enterpriseclientid
          // You can use an existing field or create it dynamicaly
          cidA = gaIds[i].get("clientId");
          // e.g. $("#enterpriseclientid").val(gaIds[i].get('clientId'));
          // RFI TWEAK: patch enterpriseclientid onto output object.
          output.enterpriseclientid = cidA;
          output.ga_clientid = cidA; // TODO confirm correct sourcing for ga_clientid
        }
      }
    });
  }
  return output;
}
