(function() {
  function L() {
    var u, b, p, w;
    const d = (t) => {
      window.dataLayer = window.dataLayer || [];
      const { dataLayer: e } = window;
      e && e.push(t);
    };
    (u = document.querySelectorAll("[data-ga-header]")) == null || u.forEach(
      (t) => t.addEventListener("click", () => {
        const e = t.getAttribute("data-ga-header-event") || "link";
        let o = t.getAttribute("data-ga-header-action") || "click";
        const a = t.getAttribute("aria-expanded");
        a && (o = a === "false" ? "open" : "close");
        const r = t.getAttribute("data-ga-header-type") || "internal link", c = t.getAttribute("data-ga-header-section") || "main navbar", s = t.getAttribute("data-ga-header") || "", n = t.getAttribute("data-ga-header-component");
        d({
          name: "onclick",
          event: e.toLowerCase(),
          action: o.toLowerCase(),
          type: r.toLowerCase(),
          section: c.toLowerCase(),
          region: "navbar",
          text: s.toLowerCase(),
          ...n && {
            component: n.toLowerCase()
          }
        });
      })
    ), (b = document.querySelectorAll("[data-ga-input-header-event]")) == null || b.forEach(
      (t) => t.addEventListener("change", (e) => {
        const o = t.getAttribute("data-ga-input-header-event") || "", a = e.target.value || "";
        d({
          name: "onenter",
          action: "type",
          type: "main search",
          section: "topbar",
          region: "navbar",
          text: a.toLowerCase(),
          event: o.toLowerCase()
        });
      })
    ), (p = document.querySelectorAll("[data-ga]")) == null || p.forEach(
      (t) => t.addEventListener("click", () => {
        const e = t.getAttribute("data-ga-name") || "", o = t.getAttribute("data-ga-event") || "";
        let a = t.getAttribute("data-ga-action") || "";
        const r = t.getAttribute("aria-expanded");
        r && (a = r === "false" ? "open" : "close");
        const c = t.getAttribute("data-ga-type") || "", s = t.getAttribute("data-ga-section") || "", n = t.getAttribute("data-ga-region") || "", i = t.getAttribute("data-ga") || "", g = t.getAttribute("data-ga-component") || "";
        d({
          name: e.toLowerCase(),
          event: o.toLowerCase(),
          action: a.toLowerCase(),
          type: c.toLowerCase(),
          section: s.toLowerCase(),
          region: n.toLowerCase(),
          text: i.toLowerCase(),
          component: g.toLowerCase()
        });
      })
    ), (w = document.querySelectorAll("[data-ga-input]")) == null || w.forEach(
      (t) => t.addEventListener("change", (e) => {
        const o = t.getAttribute("data-ga-input-name") || "", a = t.getAttribute("data-ga-input-action") || "", r = t.getAttribute("data-ga-input") || "", c = t.getAttribute("data-ga-input-region") || "", s = t.getAttribute("data-ga-input-section") || "";
        let n = t.getAttribute("data-ga-input-event") || "", i;
        switch (r) {
          case "checkbox":
            i = e.target.labels[0].textContent || "", n = e.target.checked ? n : "deselect";
            break;
          case "radio button":
            i = e.target.labels[0].textContent || "";
            break;
          case "blur":
            i = e.target.value.toLowerCase() || "";
            break;
          default:
            i = [...e.target.selectedOptions].map((g) => g.value).join(",") || "";
            break;
        }
        d({
          name: o.toLowerCase(),
          event: n.toLowerCase(),
          action: a.toLowerCase(),
          type: r.toLowerCase(),
          section: s.toLowerCase(),
          region: c.toLowerCase(),
          text: i.toLowerCase()
        });
      })
    );
  }
  window.initDataLayer = window.initDataLayer || L;
})();
//# sourceMappingURL=data-layer.es.map
