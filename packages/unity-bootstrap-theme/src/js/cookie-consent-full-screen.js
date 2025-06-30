// TODO: Once the component consolidation is done, this can be included in the bundle.
function initializeCookieConsent() {
  function getRootDomain(url) {
    try {
      var domain = new URL(url).hostname;
      var elems = domain.split(".");
      var iMax = elems.length - 1;
      var isSecondLevel =
        elems.length >= 3 && (elems[iMax] + elems[iMax - 1]).length <= 5;
      return elems.splice(isSecondLevel ? -3 : -2).join(".");
    } catch (error) {
      return null;
    }
  }

  function loadScript(src, onSuccess, onError) {
    var script = document.createElement("script");
    script.src = src;
    script.onload = function () {
      if (onSuccess) onSuccess();
    };
    script.onerror = function () {
      if (onError) onError();
    };
    document.head.appendChild(script);
  }

  function initCassieWidget() {
    var cassieSettings = {
      widgetProfileId: 1,
      languageCode: "",
      licenseKey: "55F4885B-41C9-4834-83F9-3924FCB2D7D3",
      region: "use",
      environment: "uat",
      crossDomainConsent: false,
    };
    window.CassieWidgetLoader = new CassieWidgetLoaderModule(cassieSettings);
  }

  function loadScriptWithFallback() {
    var rootDomain = getRootDomain(window.location.href);
    var scriptUrl = rootDomain
      ? "https://cscript-cdn-use-uat." + rootDomain + "/loader.js"
      : "https://cscript-cdn-use-uat.cassiecloud.com/loader.js";
    loadScript(
      scriptUrl,
      function () {
        window.cassieResourceRootDomain = rootDomain;
        initCassieWidget();
      },
      function () {
        loadScript(
          "https://cscript-cdn-use-uat.cassiecloud.com/loader.js",
          function () {
            initCassieWidget();
          }
        );
      }
    );
  }
  loadScriptWithFallback();
}

function addCookieConsentAccessibility() {
  const MODAL_SHOW_COOKIE_BUTTON_CLASS = "cassie-expand-cookies--container";
  const CLASSES = {
    NECESSARY_EXPAND_ICON: "cassie-expand-cookies--icon--open",
    EXPANDABLE_DESCRIPTION: "cassie-expandable-description--show",
    COOKIE_GROUP_DESCRIPTION: "cassie-cookie-group--description",
  };

  const toggleExpandedState = element => {
    const expanded = element.getAttribute("aria-expanded") === "true";
    element.setAttribute("aria-expanded", !expanded);
  };

  const toggleTargetVisibility = (targetId, target) => {
    const toggleClass = targetId.includes("necessary")
      ? CLASSES.NECESSARY_EXPAND_ICON
      : CLASSES.EXPANDABLE_DESCRIPTION;
    target.classList.toggle(toggleClass);
  };

  const setupAriaAttributes = element => {
    const description = element.parentElement.querySelector(
      `.${CLASSES.COOKIE_GROUP_DESCRIPTION}`
    );
    const targetId = description.id;
    element.setAttribute("aria-controls", targetId);

    const isVisible =
      window.getComputedStyle(document.getElementById(targetId)).display !==
      "none";
    element.setAttribute("aria-expanded", isVisible);

    return targetId;
  };

  const handleInteraction = (element, targetId, event) => {
    const target = document.getElementById(targetId);
    toggleExpandedState(element);
    // Cassie JS already handles the click event
    if (event.type === "click") {
      return;
    }
    toggleTargetVisibility(targetId, target);
  };

  const setupEventListeners = (element, targetId) => {
    element.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        handleInteraction(element, targetId, event);
      }
    });

    element.addEventListener("click", () => {
      handleInteraction(element, targetId, event);
    });
  };

  document.addEventListener("CassieModalVisibility", e => {
    if (!e.detail) return;

    const showCookiesButtons = document.getElementsByClassName(
      MODAL_SHOW_COOKIE_BUTTON_CLASS
    );
    [...showCookiesButtons].forEach(element => {
      const targetId = setupAriaAttributes(element);
      setupEventListeners(element, targetId);
    });
  });
  document.addEventListener("CassieTemplateInitialized", function () {
    const preBannerDiv = document.querySelector(
      ".cassie-pre-banner.cassie-bottom"
    );
    const CloseX = document.createElement("button");
    const XIcon = document.createElement("i");
    XIcon.classList.add("fas");
    XIcon.classList.add("fa-times");
    CloseX.classList.add("close-button");
    CloseX.setAttribute("aria-label", "Close cookie consent banner");
    preBannerDiv.appendChild(CloseX);
    CloseX.appendChild(XIcon);
    CloseX.addEventListener("click", () => {
      CassieWidgetLoader.Widget.hideBanner();
    });
  });
}

function allCookieConsentJS() {
  initializeCookieConsent();
  addCookieConsentAccessibility();
}

export { allCookieConsentJS };
