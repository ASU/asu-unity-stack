/* This function gets the client Ids from GA accounts
 * Author: David Lemus - EdPlus @ ASU
 * @asuonline account Id: UA-141599-1
 * @asu enterprise account ID: UA-42798992-4
 */
export function getClientId() {
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
