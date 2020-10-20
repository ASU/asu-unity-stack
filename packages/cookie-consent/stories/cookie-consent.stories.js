import { AsuCookieConsent, window } from "global";

export default {
  title: "Cookie Consent",
};

export const base = () => {
  window.addEventListener("DOMContentLoaded", event => {
    AsuCookieConsent.init();
  });

  return `<div style="width:100%; height:200vh;"></div>`;
};
