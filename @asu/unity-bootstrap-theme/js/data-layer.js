(function(){
  function initDataLayer() {
    /**
     * Push events to data layer (Google Analytics)
     * Used by Header and General events
     * Required
     */
    const pushGAEvent = (event) => {
      window.dataLayer = window.dataLayer || [];
      const { dataLayer } = window;
      if (dataLayer) dataLayer.push(event);
    };

    /**
     * Header click events
     * Elements with attribute [data-ga-header]
     * 1 of 2 Header data layer functions
     */
    document.querySelectorAll('[data-ga-header]')?.forEach((element) =>
      element.addEventListener('click', () => {
        const event = element.getAttribute('data-ga-header-event') || 'link';
        let action = element.getAttribute('data-ga-header-action') || 'click';
        const expanded = element.getAttribute('aria-expanded');
        if(expanded) {
          action = expanded === 'false' ? 'open' : 'close';
        }
        const type = element.getAttribute('data-ga-header-type') || 'internal link';
        const section = element.getAttribute('data-ga-header-section') || 'main navbar';
        const text = element.getAttribute('data-ga-header') || '';
        const component = element.getAttribute('data-ga-header-component');

        pushGAEvent({
          name: 'onclick',
          event: event.toLowerCase(),
          action: action.toLowerCase(),
          type: type.toLowerCase(),
          section: section.toLowerCase(),
          region: 'navbar',
          text: text.toLowerCase(),
          ...(component && {
            component: component.toLowerCase(),
          }),
        });
      })
    );

    /**
     * Header search change events
     * Search element with attribute [data-ga-input-header-event]
     * 2 of 2 Header data layer functions
     */
    document.querySelectorAll('[data-ga-input-header-event]')?.forEach((element) =>
      element.addEventListener('change', (e) => {
        const event = element.getAttribute('data-ga-input-header-event') || '';
        const text = e.target.value || '';

        pushGAEvent({
          name: 'onenter',
          action: 'type',
          type: 'main search',
          section: 'topbar',
          region: 'navbar',
          text: text.toLowerCase(),
          event: event.toLowerCase()
        });
      })
    );

    /**
     * General click events
     * Elements with attribute [data-ga]
     * 1 of 2 General data layer functions
     */
    document.querySelectorAll('[data-ga]')?.forEach((element) =>
      element.addEventListener('click', () => {
        const name = element.getAttribute('data-ga-name') || '';
        const event = element.getAttribute('data-ga-event') || '';
        let action = element.getAttribute('data-ga-action') || '';
        const expanded = element.getAttribute('aria-expanded');
        if(expanded) {
          action = expanded === 'false' ? 'open' : 'close';
        }
        const type = element.getAttribute('data-ga-type') || '';
        const section = element.getAttribute('data-ga-section') || '';
        const region = element.getAttribute('data-ga-region') || '';
        const text = element.getAttribute('data-ga') || '';
        const component = element.getAttribute('data-ga-component') || '';

        pushGAEvent({
          name: name.toLowerCase(),
          event: event.toLowerCase(),
          action: action.toLowerCase(),
          type: type.toLowerCase(),
          section: section.toLowerCase(),
          region: region.toLowerCase(),
          text: text.toLowerCase(),
          component: component.toLowerCase(),
        });
      })
    );

    /**
     * Input change event
     * Input elementa with attribute [data-ga-input]
     * 2 of 2 General data layer functions
     */
    document.querySelectorAll('[data-ga-input]')?.forEach((element) =>
      element.addEventListener('change', (e) => {
        const name = element.getAttribute("data-ga-input-name") || "";
        const action = element.getAttribute("data-ga-input-action") || "";
        const type = element.getAttribute("data-ga-input") || "";
        const region = element.getAttribute("data-ga-input-region") || "";
        const section = element.getAttribute("data-ga-input-section") || "";
        let event = element.getAttribute("data-ga-input-event") || "";
        let text;
        switch(type){
          case 'checkbox':
            // elements with attribute [data-ga-input="checkbox"]
            text = e.target.labels[0].textContent || '';
            event = e.target.checked ? event : "deselect";
            break;
          case 'radio button':
            // elements with attribute [data-ga-input="radio button"]
            text = e.target.labels[0].textContent || '';
            break;
          case 'blur':
            // elements with attribute [data-ga-input="blur"]
            text = e.target.value.toLowerCase() || '';
            break;
          default:
            // Select elements
            text = [...e.target.selectedOptions].map(option=>option.value).join(',') || '';
            break;
        }

        pushGAEvent({
          name: name.toLowerCase(),
          event: event.toLowerCase(),
          action: action.toLowerCase(),
          type: type.toLowerCase(),
          section: section.toLowerCase(),
          region: region.toLowerCase(),
          text: text.toLowerCase()
        });
      })
    );
  }

  /* Function must be initialized after document load
   * Example:
   *   window.initDataLayer();
   */
  window.initDataLayer = window.initDataLayer || initDataLayer;
})();
