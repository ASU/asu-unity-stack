export const initTooltip = () => {
  jQuery(function () {
    'use strict';
    let element;
    $('button.uds-tooltip').on('click', (_this, e) => {
      if (element && element.is(':focus')) element.trigger('blur');
      element = element
        ? undefined
        : $(
            `button[aria-describedby=${$(_this)
              .get(0)
              .currentTarget.getAttribute('aria-describedby')}]`
          );
      if (element && !element.is(':focus')) element.trigger('focus');
    });
  });
};
