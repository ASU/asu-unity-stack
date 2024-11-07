
export const PageName = {
  HOME: "HOME",
  HEADERGUIDE: "HEADERGUIDE",
  DATALAYERGUIDE: "DATALAYERGUIDE",
};

export const PagePaths = {
  "HOME": "/",
  "HEADERGUIDE": "/asuheader/",
  "DATALAYERGUIDE": "/gtm-datalayer/",
};

export const configRoutes = [
  {
    name: "home",
    filename: "index.html",
    template: "src/index.html",
    data: {
      title: "Unity Design Kit",
      componentName: "HOME",
      path: PagePaths.HOME,
      navLabel: "Home",
      type: "icon-home",
    },
  },
  {
    name: "asuheader",
    filename: "asuheader/index.html",
    template: "src/template/index.html",
    data: {
      componentName: "HEADERGUIDE",
      path: PagePaths.HEADERGUIDE,
      title: "ASU Header Guide",
      navLabel: "ASU Header",
    },
  },
  {
    name: "gtm-datalayer",
    filename: "gtm-datalayer/index.html",
    template: "src/template/index.html",
    data: {
      componentName: "DATALAYERGUIDE",
      path: PagePaths.DATALAYERGUIDE,
      title: "Google Tag Manager (GTM) and data layer",
      navLabel: "GTM and data layer guide",
    },
  },
];
