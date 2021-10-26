module.exports = {
  opts: {
    destination: "./docs/",
    recurse: true,
  },
  source: {
    include: ["README.md"],
    includePattern: "(types|index).js",
  },
  templates: {
    cleverLinks: false,
    monospaceLinks: false,
    default: {
      useLongnameInNav: false,
      includeDate: false,
    },
  },
  tags: {
    allowUnknownTags: true,
    dictionaries: ["jsdoc", "closure"],
  },
  plugins: ["jsdoc-ts-utils"],
  tsUtils: {
    typedefImports: true,
    typeOfTypes: true,
    extendTypes: true,
    modulesOnMemberOf: true,
    modulesTypesShortName: true,
    parentTag: true,
    typeScriptUtilityTypes: true,
    tagsReplacement: {},
  },
};
