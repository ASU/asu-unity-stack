/** @jsx h */

import { h } from "preact";
import {FormPanel} from ".";
import { Fragment } from "preact/compat";

export default {
  component: FormPanel,
  title: "FormPanel"
};

// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = (values) => {

  const errors = {};
  if (!values.push_notifications && !values.email_notifications) {
    errors.push_notifications = "Error: Please enable either mobile or web notifications.";
    errors.email_notifications = "Error: Please enable either mobile or web notifications";
  }

  return errors;
};

const testProps = {
  title: "Daily Health Check Reminders",
  description: `How would you like to be reminded to take your daily health check? <br />
      (Note: You can submit a daily health check anytime, via any tool. We just thought
        a friendly reminder might help.)
    `,

  fields: [
    {
      name: "push_notifications",
      type: "checkbox",
      icon: "mobile",
      label: "ASU Mobile App (push notifications)",
      id: "mobile-opt-in",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud`
    },
    {
      name: "email_notifications",
      type: "checkbox",
      label: "Web (email reminders)",
      id: "web-opt-in",
      icon: "desktop",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud`
    },
  ],
  initialValues: {
    push_notifications: true,
    email_notifications: false
  },
  onSubmit: (values, actions) => {
    if (!values.push_notifications && !values.email_notifications) {
      console.log("reset the form");
      actions.resetForm();

      //actions.setValues({push_notifications: true});
      actions.setStatus("Warning: Update not submitted. Please enable either mobile or web notifications.");
      //
    }
      console.log(values, 'THE VALUES');
      console.log(actions, 'THE ACTIONS');
  },
  autoSubmit: true
};

const ExposureProps = {
  title: "Exposure Management Permissions",
  description: `Contact tracing can help ASU understand if you have crossed paths
  with someone (while on campus only) that has been diagnosed with COVID-19. By giving your
  consent, you permit ASU to send you a discreet notificatioon if you've been exposed.`,
  img: {
    src: "/dev/img/icon-well-check.png",
    alt: " "
  },
  fields: [
    {
      name: "share_health_records",
      type: "checkbox",
      icon: "clipboard",
      label: "Share COVID test related health records",
      id: "mobile-opt-in",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud`,
    },
    {
      name: "share_location",
      type: "checkbox",
      label: "Share location",
      id: "web-opt-in",
      icon: "map-pin",
      description: `Proximity Notification Consent:<br><br>

      We are asking all members of the ASU community to allow the use of device location
      information on ASU’s Network to assist in notifying individuals that they may have
      been in close proximity with someone who has tested positive for COVID-19 and should
      take additional precautions (“Proximity Notification”).<br>br>

      If you consent, ASU will use the location information we receive when your device
      connects to ASU Wi-Fi access points to triangulate your physical location while you
      are connected to the network.  That information will be stored in a database of
      location/time/device information.  When we learn that someone has tested positive for COVID-19,
      we will search the database to identify devices that could have been in close proximity with
      that person’s devices for a length of time that could increase the chances of spreading
      the COVID-19 virus, and provide notice to those individuals.<br><br>

      We will typically keep the location/time/device information for 14 days after we gather it.
      We will not include any personally identifiable information in the database other than your device
      ID number and your location. ASU is able, however, to match your device ID to your name if needed to
      protect the health and safety of you or others. We will use the information to provide the Proximity
      Notification described above.  We will not provide your name or device ID when providing Proximity
      Notification to other students. We typically will not share the information with any external parties
      except as necessary for the performance of the app, as required by applicable law, or as may be needed
      to protect the health and safety of you or others. Except for when a disclosure is required by law, external
      parties who receive location data may only use and disclose it to perform their duties on behalf of ASU, and
      are otherwise required to maintain its confidentiality. We will handle the data in accordance with ASU’s <a href="https://www.asu.edu/privacy/#:~:text=ASU%20requires%20Contractors%20to%20protect,protect%20your%20EU%20Personal%20Data.">
      Privacy Policy</a>.<br><br>
      You are able to opt out at any time by updating your preferences in the ASU Mobile App.<br><br>
      By opting into this service, you agree that you have read this Consent in full and agree that ASU may gather data on your l
      ocation as described above to use in Proximity Notification and that you wish to receive Proximity Notifications if ASU
      determines your device was in proximity to the device of an individual who has tested positive for COVID-19.`,
    },
  ],
  initialValues: {
    share_location: true,
    share_health_records: false,
  },
  onSubmit: (values, actions) => {
    console.log(values, "THE VALUES");
    console.log(actions, "THE ACTIONS");
  },
  autoSubmit: true,
};

export const base = () => (
  <Fragment>
    <FormPanel {...testProps} />
    <div style={"background-color:#8c1e40; width:100%; height:200vh;"} />
  </Fragment>
);

export const exposureForm = () => (
  <Fragment>
    <FormPanel {...ExposureProps} />
    <div style={"background-color:#8c1e40; width:100%; height:200vh;"} />
  </Fragment>
);
