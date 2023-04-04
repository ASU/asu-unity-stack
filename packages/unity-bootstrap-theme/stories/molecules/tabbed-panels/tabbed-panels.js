import { googleAnalytics } from "../../../src/js/googleAnalytics";

export const initTabs = function () {
  "use strict";

  // helpers functions
  const setButtonsCompatibility = e => {
    const targets = ["a", "button"];
    if (targets.includes(e.target.localName)) {
      e.target.focus();
    }
  };

  const slideNav = (clicked, e, direction) => {
    e.preventDefault();
    const parentNav = Array.from(clicked.parentElement.children).filter(child =>
      child.classList.contains("nav-tabs")
    );

    let scrollPosition = parseInt(parentNav[0].dataset.scrollPosition, 10);

    const navItems = Array.from(parentNav[0].querySelectorAll(".nav-item"));

    // get left value to interact with scroll
    const rawLeftValue = getComputedStyle(parentNav[0]).left;
    const sanitizedLeftValue = rawLeftValue.replace("px", "");
    let scrollOffset = parseInt(sanitizedLeftValue, 10);

    if (direction == 1 && scrollPosition > 0) {
      scrollPosition -= 1;
    }
    if (scrollPosition < navItems.length - 1 && direction == -1) {
      scrollPosition += 1;
    }
    parentNav[0].dataset.scrollPosition = scrollPosition;

    scrollOffset = 0;
    for (var i = 0; i < scrollPosition; i++) {
      scrollOffset +=
        navItems[i].offsetWidth +
        parseInt(getComputedStyle(navItems[i]).marginLeft, 10) +
        parseInt(getComputedStyle(navItems[i]).marginRight, 10);
    }

    // set the position of the scroll of the .nav-tabs element
    parentNav[0].scrollLeft = scrollOffset;
    setControlVisibility(clicked, scrollOffset);
  };

  const setControlVisibility = (clicked, scrollOffset) => {
    // seleccionamos el ancestro mas cercano que tenga la clase .uds-tabbed-panels
    const parentContainer = clicked.closest(".uds-tabbed-panels");
    // seleccionamos los elementos padres hermanos del elemento clickeado
    const parentNav = parentContainer.querySelector(".nav-tabs");

    // obtenemos el valor del atributo data-scroll-position y nos asguaramos que sea un número entero
    const scrollPosition = parseInt(parentNav.dataset.scrollPosition, 10);
    const tabPosition = parentNav.scrollWidth - scrollOffset;

    // ocultamos o mostramos los botones de scroll en función de la posición del scroll
    if (scrollPosition == 0) {
      parentContainer.querySelector(".scroll-control-prev").style.display =
        "none";
    } else {
      parentContainer.querySelector(".scroll-control-prev").style.display =
        "block";
    }
    if (tabPosition <= parentContainer.offsetWidth) {
      parentContainer.querySelector(".scroll-control-next").style.display =
        "none";
    } else {
      parentContainer.querySelector(".scroll-control-next").style.display =
        "block";
    }
  };

  // wait to load the page and all resources before initializing
  window.addEventListener("load", () => {
    // wait to DOM content is loaded before run these scripts
    document.addEventListener("click", function (e) {
      setButtonsCompatibility(e);
    });

    document.querySelectorAll(".uds-tabbed-panels").forEach(item => {
      const nav = item.querySelector(".nav-tabs");
      nav.addEventListener("scroll", event => {
        const scrollPos = event.target.scrollLeft;
        const prevButton = item.querySelector(".scroll-control-prev");
        const nextButton = item.querySelector(".scroll-control-next");
        const atFarRight = nav.offsetWidth + scrollPos + 3 >= nav.scrollWidth;
        prevButton.style.display = scrollPos === 0 ? "none" : "block";
        nextButton.style.display = atFarRight ? "none" : "block";
      });
    });

    document
      .querySelector(".scroll-control-next")
      .addEventListener("click", function (e) {
        if (window.innerWidth > 992) {
          slideNav(this, e, -1);
        }
      });

    document
      .querySelector(".scroll-control-prev")
      .addEventListener("click", function (e) {
        if (window.innerWidth > 992) {
          slideNav(this, e, 1);
        }
      });

    document.querySelector(
      ".uds-tabbed-panels .scroll-control-prev"
    ).style.display = "none";

    const navTabWidth = document.querySelector("#nav-tab").scrollWidth;
    const udsTabbedPanelsWidth =
      document.querySelector(".uds-tabbed-panels").offsetWidth;
    if (navTabWidth <= udsTabbedPanelsWidth) {
      document.querySelector(
        ".uds-tabbed-panels .scroll-control-next"
      ).style.display = "none";
    }

    // Init goolge analytics
    googleAnalytics();
  });
};
