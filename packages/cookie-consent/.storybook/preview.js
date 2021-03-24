import { addDecorator, addParameters } from "@storybook/html";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  ally: {},
});

import { init } from "../src/";
global.AsuCookieConsent = {
  init,
};
