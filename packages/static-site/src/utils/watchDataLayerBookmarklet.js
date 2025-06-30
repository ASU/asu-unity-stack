() => {
  const w = window,
    dl = w.dataLayer || [],
    /* used to provide styling in the console */
    styleKey = "\x1B[38;2;155;145;134;2m",
    styleValue = "\x1B[38;2;223;55;48;2m",
    styleDefault = "\x1B[0;3m",
    styleHeading = "\x1B[0;34;1m",
    /* provide a global variable */
    tableFnName = "showDataLayerTable";
  /* display all watched events as console table */
  w[tableFnName] = () =>
    console.table(dl.slice().filter(i => typeof i.name !== "undefined"));

  if (typeof w.onbeforeunload !== "function") {
    /* initial click of bookmarklet */
    dl.push = new Proxy(dl.push, {
      apply: (target, thisArg, args) => {
        console.log(`${styleHeading}dataLayer event\n${styleDefault}
          { ${Object.entries(args[0])
            .map(
              ([k, v]) =>
                `${styleKey}${k}${styleDefault}: ${styleValue}'${v}'${styleDefault}`
            )
            .sort()
            .join(", ")}${styleDefault} }`);
        return Reflect.apply(target, thisArg, args);
      },
    });
    alert(`DataLayer events will be displayed in console. Rerun bookmarklet or
 call ${tableFnName}() from the console to display a table of all events.\n\n

A prompt will warn you before leaving the page, this is normal and will allow
 you to inspect the dataLayer events, that would have reloaded the page.\n\n

Follow the prompt to reload or leave the page if you are done watching events.`);
    w.onbeforeunload = _e => "";
  } else {
    /* if already initialized, output recorded events */
    w[tableFnName]();
  }
};
