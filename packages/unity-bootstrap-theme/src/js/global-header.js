(function(){
  const initGlobalHeader = () => {
    // Scroll state
    const handleWindowScroll = () => {
      const headerEl = document.getElementById('asu-header');
      const curPos = window.scrollY;
      curPos > headerEl?.getBoundingClientRect().top
      ? headerEl?.classList.add('scrolled')
      : headerEl?.classList.remove('scrolled');
    };

    window.addEventListener('scroll', handleWindowScroll);
  };

  window.initGlobalHeader = window.initGlobalHeader || initGlobalHeader;

  /* Function must be initialized after document load
   * Example:
   *   window.initGlobalHeader();
   */
})();

/* Do Not Copy - Used for local development */
Object.defineProperty(exports, "__esModule", { value: true });
exports.initGlobalHeader = window.initGlobalHeader;
