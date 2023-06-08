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
  const pushHeaderGAEvent = (args) => {
    const { dataLayer } = window;
    const event = {
      region: 'navbar',
      ...args,
    };
    if (dataLayer) dataLayer.push(event);
  };

  // Clicks events
  const elements = document.querySelectorAll('[data-ga-header]');
  elements.forEach((element) =>
    element.addEventListener('click', () => {
      const dropdown = element.getAttribute('aria-expanded');

      const event = element.getAttribute('data-ga-header-event');
      const action = dropdown
        ? dropdown === 'false'
          ? 'open'
          : 'close'
        : element.getAttribute('data-ga-header-action');
      const type = element.getAttribute('data-ga-header-type');
      const section = element.getAttribute('data-ga-header-section');
      const text = element.getAttribute('data-ga-header').toLowerCase();
      const component = element.getAttribute('data-ga-header-component');
      const name = 'onclick';

      pushHeaderGAEvent({
        name,
        event: event ? event.toLowerCase() : 'link',
        action: action ? action.toLowerCase() : 'click',
        type: type ? type.toLowerCase() : 'internal link',
        section: section ? section.toLowerCase() : 'main navbar',
        text,
        ...(component && {
          component: component.toLowerCase(),
        }),
      });
    })
  );

  // Search change events
  const inputElements = document.querySelectorAll(
    '[data-ga-input-header-event]'
  );
  inputElements.forEach((element) =>
    element.addEventListener('change', (e) => {
      const event = element
        .getAttribute('data-ga-input-header-event')
        .toLowerCase();
      const action = 'type';
      const type = 'main search';
      const section = 'topbar';
      const name = 'onenter';
      const text = e.target.value;
      pushHeaderGAEvent({ name, event, action, type, section, text });
    })
  );
};
