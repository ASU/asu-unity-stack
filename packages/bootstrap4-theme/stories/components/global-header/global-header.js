export const initHeaderGA = () => {
  const pushHeaderGAEvent = (text) => {
    const { dataLayer } = window;
    const event = {
      event: 'link',
      action: 'click',
      name: 'onclick',
      type: 'internal link',
      region: 'navbar',
      section: 'main navbar',
      text,
    };
    if (dataLayer) dataLayer.push(event);
  };

  const elements = document.querySelectorAll('[data-ga-header]');
  elements.forEach((element) =>
    element.addEventListener('focus', () => {
      const text = element.getAttribute('data-ga-header').toLowerCase();
      pushHeaderGAEvent(text);
    })
  );
};
