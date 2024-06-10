// Fetch Country Options from Data Potluck's readable stream service.
export async function fetchCountries(
  dataSourceCountriesStates,
  optionsCallback
) {
  const serviceUrl = `${dataSourceCountriesStates}?include=states`;

  return fetch(serviceUrl)
    .then(response => response.body)
    .then(rb => {
      const reader = rb.getReader();
      return new ReadableStream({
        start(controller) {
          // The following function handles each data chunk
          function push() {
            // "done" is a Boolean and value a "Uint8Array"
            reader.read().then(({ done, value }) => {
              // If there is no more data to read
              if (done) {
                controller.close();
                return;
              }
              // Get the data and send it to the browser via the controller
              controller.enqueue(value);
              push();
            });
          }
          push();
        },
      });
    })
    .then(stream =>
      // Respond with our stream
      new Response(stream, {
        headers: { "Content-Type": "application/json" },
      }).text()
    )
    .then(result => {
      // Parse results
      const resultJson = JSON.parse(result);
      const resultsArrayOfObjects = Object.values(resultJson);
      // Format for select options.
      const results = optionsCallback(resultsArrayOfObjects);
      return results;
    })
    .catch(error => new Error(error));
}
