import React from "react";

import { CookieConsent } from "./CookieConsent";

export default {
  title: "UDS/ASU Cookie Consent",
  component: CookieConsent,
};

const Template = args => <CookieConsent {...args} />;

export const Default = Template.bind({});
Default.args = {
  enableCookieConsent: true,
  expirationTime: 90,
};

export const ConsentDisabled = Template.bind({});
ConsentDisabled.args = {
  enableCookieConsent: false,
};
