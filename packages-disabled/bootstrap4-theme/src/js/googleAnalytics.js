const googleAnalytics = () => {
  const pushGAEvent = (event) => {
    const { dataLayer } = window;
    if (dataLayer) dataLayer.push(event);
  };

  // Clicks events
  const elements = document.querySelectorAll('[data-ga]');
  elements.forEach((element) =>
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
  const inputElements = document.querySelectorAll('[data-ga-input]');
  inputElements.forEach((element) =>
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
