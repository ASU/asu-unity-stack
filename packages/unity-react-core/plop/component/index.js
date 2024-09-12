module.exports = plop => {
  plop.setGenerator("Component", {
    description: "New unity component",
    prompts: [
      {
        type: "input",
        name: "componentName",
        message:
          "What is the name of your component? (use spaces if multi word)",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{properCase componentName}}/{{properCase componentName}}.jsx",
        templateFile: "plop/component/component-js.txt",
      },
      {
        type: "add",
        path: "src/components/{{properCase componentName}}/{{properCase componentName}}.styles.js",
        templateFile: "plop/component/component-styles-js.txt",
      },
      {
        type: "add",
        path: "src/core/types/{{dashCase componentName}}-types.js",
        templateFile: "plop/component/component-types-js.txt",
      },
      {
        type: "add",
        path: "src/components/{{properCase componentName}}/{{properCase componentName}}.stories.jsx",
        templateFile: "plop/general/component-stories-js.txt",
      },
      {
        type: "add",
        path: "src/components/{{properCase componentName}}/{{properCase componentName}}.test.js",
        templateFile: "plop/general/component-tests.txt",
      },
      {
        type: "append",
        path: "src/components/index.js",
        pattern: /(\n$)/gm,
        separator: "",
        template: 'export * from "./{{properCase componentName}}";\n',
      },
    ],
  });
};
