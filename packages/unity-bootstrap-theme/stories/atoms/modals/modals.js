import { googleAnalytics } from "@asu/unity-bootstrap-theme/js/data-layer.js";

export const initModals = () => {
  document
    .getElementById('openModalButton')
    ?.addEventListener('click', function () {
      document.getElementById('uds-modal').classList.add('open');
    });

  document
    .getElementById('closeModalButton')
    ?.addEventListener('click', function () {
      document.getElementById('uds-modal').classList.remove('open');
    });

  // Init google analytics
  googleAnalytics();
};
