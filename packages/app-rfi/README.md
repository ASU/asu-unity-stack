# ASU RFI Component

The ASU RFI Component is a React powered Request for Information form that submits requests to a Mulesoft middleware service which in turn syncs requests to Salesforce.

## ASU RFI component architectural overview:
* Top level app: src/components/app/App.js
* ... which invokes the main form which defines the form steps: src/components/steps/RfiMainForm.js
* ... which instantiates the RfiStepper component wherein the Formik component is defined: src/components/stepper/RfiStepper.js
* ... which calls the various step forms with their independent validation schemas: src/components/steps/*.js
* Final submission handler is invoked in RfiMainForm.js. TODO: make separate function in its own file for the submission.
* Custom form input components live in src/components/controls/*.js and are styled using the styled-components library.

This pattern is based on example code found at https://codesandbox.io/s/mlc2o

When adding new form-custom-control field input types, don't forget to register
them in controls/index.js.

## Documentation to consult when working with AsuRfi component
* [React Main Concepts](https://reactjs.org/docs/hello-world.html)
* [ECMAScript 6](https://www.w3schools.com/js/js_es6.asp)
* [Formik](https://jaredpalmer.com/formik/docs/tutorial)
* [React Formik Multistep Form example which inspired our architecture](https://codesandbox.io/s/mlc2o)
* [React Styled Components](https://www.npmjs.com/package/styled-components)
* [React Datepicker](https://reactdatepicker.com/)
* [Reactstrap](https://github.com/reactstrap/reactstrap)
* [Reactstrap components](https://reactstrap.github.io/components/alerts/)

## Dev Notes: Data Potluck calls
```
//fetch("https://api.myasuplat-dpl.asu.edu/api/codeset/countries?include=states")

fetch("https://api.myasuplat-dpl.asu.edu/api/codeset/countries?include=states")
.then(response => response.body)
.then(rb => {
  const reader = rb.getReader();

  return new ReadableStream({
    start(controller) {
      // The following function handles each data chunk
      function push() {
        // "done" is a Boolean and value a "Uint8Array"
        reader.read().then( ({done, value}) => {
          // If there is no more data to read
          if (done) {
            console.log('done', done);
            controller.close();
            return;
          }
          // Get the data and send it to the browser via the controller
          controller.enqueue(value);
          // Check chunks by logging to the console
          console.log(done, value);
          push();
        })
      }

      push();
    }
  });
})
.then(stream => {
  // Respond with our stream
  return new Response(stream, { headers: { "Content-Type": "application/json" } }).text();
})
.then(result => {
  // Do things with result
  let resultJson = JSON.parse(result);
  console.log(resultJson);
  //console.log(resultJson[0]);
})
.catch(err => console.error(err)); // TODO add failure handling that falls back to stub data and sets flag on submission so we know there was an issue
```
