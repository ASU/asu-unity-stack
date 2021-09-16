export const initGA = () => {
  const pushGAEvent = (args) => {
    const { dataLayer } = window;
    const event = {
      event: 'link',
      action: 'click',
      name: 'onclick',
      region: 'footer',
      ...args,
    };
    if (dataLayer) dataLayer.push(event);
  };

  const elements = document.querySelectorAll('[data-ga]');
  elements.forEach((element) =>
    element.addEventListener('focus', () => {
      const args = {
        type: element.getAttribute('data-ga-type').toLowerCase(),
        section: element.getAttribute('data-ga-section').toLowerCase(),
        text: element.getAttribute('data-ga').toLowerCase(),
      };
      pushGAEvent(args);
    })
  );
};
