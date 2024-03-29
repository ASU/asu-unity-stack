import { googleAnalytics } from '../../../src/js/googleAnalytics';

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
