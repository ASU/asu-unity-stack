import { EventHandler } from "./bootstrap-helper";

  const initGlobalHeader = () => {
    // Scroll state
    const handleWindowScroll = () => {
      const headerEl = document.getElementById('asu-header');
      const curPos = window.scrollY;
      curPos > headerEl?.getBoundingClientRect().top
      ? headerEl?.classList.add('scrolled')
      : headerEl?.classList.remove('scrolled');
    };

    EventHandler.on(window, 'scroll.uds.header', handleWindowScroll);
  };

  window.initGlobalHeader = window.initGlobalHeader || initGlobalHeader;

  /* Function must be initialized after document load
   * Example:
   *   window.initGlobalHeader();
   */

  EventHandler.on(window, 'load.uds.global-header', initGlobalHeader);

export { initGlobalHeader };
