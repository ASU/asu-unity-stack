export const initGlobalHeader = () => {
  // Scroll state
  const handleWindowScroll = () => {
    const headerEl = document.getElementById('asu-header');
    const curPos = window.scrollY;
    curPos > headerEl?.getBoundingClientRect().top
      ? headerEl?.classList.add('scrolled')
      : headerEl?.classList.remove('scrolled');
  };

  window.addEventListener('scroll', handleWindowScroll);

  // DataLayer
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
