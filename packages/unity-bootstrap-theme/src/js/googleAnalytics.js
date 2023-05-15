const googleAnalytics = () => {
  const pushGAEvent = (event) => {
    const { dataLayer } = window;
    if (dataLayer) dataLayer.push(event);
  };

  // Header Clicks events
  document.querySelectorAll('[data-ga-header]')?.forEach((element) =>
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

      pushGAEvent({
        name: 'onclick',
        event: event ? event.toLowerCase() : 'link',
        action: action ? action.toLowerCase() : 'click',
        type: type ? type.toLowerCase() : 'internal link',
        section: section ? section.toLowerCase() : 'main navbar',
        region: 'navbar',
        text,
        ...(component && {
          component: component.toLowerCase(),
        }),
      });
    })
  );

  // Header Search change events
  document.querySelectorAll('[data-ga-input-header-event]')?.forEach((element) =>
    element.addEventListener('change', (e) => {
      const event = element
        .getAttribute('data-ga-input-header-event')
        .toLowerCase();
      const action = 'type';
      const type = 'main search';
      const section = 'topbar';
      const region = 'navbar';
      const name = 'onenter';
      const text = e.target.value;
      pushGAEvent({ name, event, action, type, section, region, text });
    })
  );


  // General Clicks events
  document.querySelectorAll('[data-ga]')?.forEach((element) =>
    element.addEventListener('click', () => {
      const dropdown = element.getAttribute('aria-expanded');

      const name = element.getAttribute('data-ga-name');
      const event = element.getAttribute('data-ga-event');
      const action = dropdown
        ? dropdown === 'false'
          ? 'open'
          : 'close'
        : element.getAttribute('data-ga-action');
      const type = element.getAttribute('data-ga-type');
      const section = element.getAttribute('data-ga-section');
      const region = element.getAttribute('data-ga-region');
      const text = element.getAttribute('data-ga');
      const component = element.getAttribute('data-ga-component');

      pushGAEvent({
        name: name ? name.toLowerCase() : '',
        event: event ? event.toLowerCase() : '',
        action: action ? action.toLowerCase() : '',
        type: type ? type.toLowerCase() : '',
        section: section ? section.toLowerCase() : '',
        region: region ? region.toLowerCase() : '',
        text: text ? text.toLowerCase() : '',
        component: component ? component.toLowerCase() : '',
      });
    })
  );


  // Input change events
  document.querySelectorAll('[data-ga-input]')?.forEach((element) =>
    element.addEventListener('change', (e) => {
      const name = element.getAttribute('data-ga-input-name');
      const event = element.getAttribute('data-ga-input-event');
      const action = element.getAttribute('data-ga-input-action');
      const type = element.getAttribute('data-ga-input');
      const region = element.getAttribute('data-ga-input-region');
      const section = element.getAttribute('data-ga-input-section');
      const text =
        type === 'checkbox' || type === 'radio button'
          ? e.target.labels[0].textContent.toLowerCase()
          : type === 'blur'
          ? e.target.value.toLowerCase()
          : [...e.target.selectedOptions].map((option) =>
              option.value.toLowerCase()
            );

      pushGAEvent({
        name: name ? name.toLowerCase() : '',
        event: event ? event.toLowerCase() : '',
        action: action ? action.toLowerCase() : '',
        type: type ? type.toLowerCase() : '',
        section: section ? section.toLowerCase() : '',
        region: region ? region.toLowerCase() : '',
        text: text ?? '',
      });
    })
  );
};

export { googleAnalytics };
