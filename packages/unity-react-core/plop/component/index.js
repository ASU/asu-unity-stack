const actions = {
  addTsx: {
    type: "add",
    path: "src/components/{{properCase componentName}}/{{properCase componentName}}.tsx",
    templateFile: "plop/component/component-ts.txt",
  },
  addExampleHtml: {
    type: "add",
    path: "examples/{{dashCase componentName}}.html",
    templateFile: "plop/general/example-html.txt",
  },
  appendExampleHtmlNav: {
    type: "append",
    path: "examples/js/example-helper.js",
    pattern: /(<nav class=\"nav\" aria-label=\"Same Page\">\n)/,
    separator: "",
    template: '                <a class="nav-link" href="{{dashCase componentName}}.html"><span class="fas fa-hand-spock"></span>{{properCase componentName}}</a>\n',
  },
  addTsxStories: {
    type: "add",
    path: "src/components/{{properCase componentName}}/{{properCase componentName}}.stories.tsx",
    templateFile: "plop/general/component-stories.txt",
  },
  addTsxTests: {
    type: "add",
    path: "src/components/{{properCase componentName}}/{{properCase componentName}}.test.tsx",
    templateFile: "plop/general/component-tests.txt",
  },
  addInit: {
    type: "add",
    path: "src/components/{{properCase componentName}}/init.js",
    template: 'export { init{{properCase componentName}} as default } from "../../core/utils";',
  },
  appendExportComponents: {
    type: "append",
    path: "src/components/index.js",
    pattern: /(\n$)/gm,
    separator: "",
    template: 'export * from "./{{properCase componentName}}/{{properCase componentName}}.tsx";\n',
  },
  appendExportCoreUtil: {
    type: "append",
    path: "src/core/utils/index.js",
    pattern: /(\n$)/,
    separator: "",
    template: 'import { {{properCase componentName}} } from "../../components/{{properCase componentName}}/{{properCase componentName}}.tsx";\n\n' +
      ' // @param {ComponentProps} props\n' +
      'export const init{{properCase componentName}} = ({ targetSelector, props }) =>\n' +
      '  RenderReact({{properCase componentName}}, props, document.querySelector(targetSelector));\n\n',

  }
}

module.exports = plop => {
  plop.setGenerator("Typescript Component", {
    description: "New unity TS component",
    prompts: [
      {
        type: "input",
        name: "componentName",
        message:
          "What is the name of your component? (use spaces if multi word)",
      },
    ],
    actions: [
      actions.addTsx,
      actions.addExampleHtml,
      actions.appendExampleHtmlNav,
      actions.addTsxStories,
      actions.addTsxTests,
      actions.addInit,
      actions.appendExportComponents,
      actions.appendExportCoreUtil,
    ],
  });
  plop.setGenerator("Typescript Component Example only", {
    description: "New unity TS component Example only",
    prompts: [
      {
        type: "input",
        name: "componentName",
        message:
          "What is the name of your component? (use spaces if multi word)",
      },
    ],
    actions: [actions.addTsx, actions.addTsxStories, actions.addTsxTests],
  });
};
