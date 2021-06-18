/* dataLayer event push to GA. */
export function pushDataLayerEventToGa(eventValue) {
  // PUSH TO GA.
  // @ts-ignore
  if (typeof dataLayer != "undefined") {
    // @ts-ignore
    dataLayer.push({ event: eventValue });
  }
}

/* This function sets the client Ids from GA accounts
 * Based on code by David Lemus - EdPlus @ ASU
 * @asuonline account Id: UA-141599-1
 * @asu enterprise account ID: UA-42798992-4
 */
export function setClientId(value) {
  if ("undefined" != typeof ga) {
    return ga(function () {
      let cidE = "";
      let cidA = "";
      let gaIds = ga.getAll();
      let i, size, match;
      for (i = 0, size = gaIds.length, match = 0; i < size; i++) {
        if (gaIds[i].get("trackingId") === "UA-141599-1" && cidE == "") {
          //The field name sent to the Lead API should be clientid
          //You can use an existing field or create it dynamicaly
          cidE = gaIds[i].get("clientId");
          //e.g. $("#clientid").val(gaIds[i].get('clientId'));
          // RFI TWEAK: patch clientid onto value object.
          value.clientid = cidE;
          value.ga_clientid = cidE; // TODO confirm correct sourcing for ga_clientid
        } else if (
          gaIds[i].get("trackingId") === "UA-42798992-4" &&
          cidA == ""
        ) {
          //The field name sent to the Lead API should be enterpriseclientid
          //You can use an existing field or create it dynamicaly
          cidA = gaIds[i].get("clientId");
          //e.g. $("#enterpriseclientid").val(gaIds[i].get('clientId'));
          // RFI TWEAK: patch enterpriseclientid onto value object.
          value.enterpriseclientid = cidA;
          value.ga_clientid = cidA; // TODO confirm correct sourcing for ga_clientid
        }
      }
      return cidA;
    });
  }
}

/* This function gets the client Ids from GA accounts
 * Author: David Lemus - EdPlus @ ASU
 * @asuonline account Id: UA-141599-1
 * @asu enterprise account ID: UA-42798992-4
 */
/* Original reference code from EdPlus/ASUOnline docs.
function getClientId() {
  if ("undefined" != typeof ga) {
    ga(function () {
      let cidE = "";
      let cidA = "";
      let gaIds = ga.getAll();
      let i, size, match;
      for (i = 0, size = gaIds.length, match = 0; i < size; i++) {
        if (gaIds[i].get("trackingId") === "UA-141599-1" && cidE == "") {
          //The field name sent to the Lead API should be clientid
          //You can use an existing field or create it dynamicaly
          cidE = gaIds[i].get("clientId");
          //e.g. $("#clientid").val(gaIds[i].get('clientId'));
        } else if (
          gaIds[i].get("trackingId") === "UA-42798992-4" &&
          cidA == ""
        ) {
          //The field name sent to the Lead API should be enterpriseclientid
          //You can use an existing field or create it dynamicaly
          cidA = gaIds[i].get("clientId");
          //e.g. $("#enterpriseclientid").val(gaIds[i].get('clientId'));
        }
      }
    });
  }
}
*/
