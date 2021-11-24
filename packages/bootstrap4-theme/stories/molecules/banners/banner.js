const initBanner = () => {
  const closeButtons = document.querySelectorAll('.banner-close button');
  closeButtons.forEach((button) =>
    button.addEventListener('click', () => {
      const bannerToClose = button.parentElement.parentElement.parentElement;
      bannerToClose.classList.add('hidden-banner');
    })
  );
};

export { initBanner };
