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
      {
        type: "add",
        path: "src/components/{{properCase componentName}}/{{properCase componentName}}.tsx",
        templateFile: "plop/component/component-ts.txt",
      },
      {
        type: "add",
        path: "examples/{{dashCase componentName}}.html",
        templateFile: "plop/general/example-html.txt",
      },
      {
        type: "append",
        path: "examples/js/example-helper.js",
        pattern: /(<nav class=\"nav\" aria-label=\"Same Page\">\n)/,
        separator: "",
        template: '                <a class="nav-link" href="{{dashCase componentName}}.html"><span class="fas fa-hand-spock"></span>{{properCase componentName}}</a>\n',
      },
      {
        type: "add",
        path: "src/components/{{properCase componentName}}/{{properCase componentName}}.stories.tsx",
        templateFile: "plop/general/component-stories.txt",
      },
      {
        type: "add",
        path: "src/components/{{properCase componentName}}/{{properCase componentName}}.test.tsx",
        templateFile: "plop/general/component-tests.txt",
      },
      {
        type: "add",
        path: "src/components/{{properCase componentName}}/index.js",
        template: 'export { init{{properCase componentName}} as default } from "../../core/utils";',
      },
      {
        type: "append",
        path: "src/components/index.js",
        pattern: /(\n$)/gm,
        separator: "",
        template: 'export * from "./{{properCase componentName}}/{{properCase componentName}}.tsx";\n',
      },
      {
        type: "append",
        path: "src/core/utils/index.js",
        pattern: /(\n$)/,
        separator: "",
        template: 'import { {{properCase componentName}} } from "../../components/{{properCase componentName}}/{{properCase componentName}}.tsx";\n\n' +
          ' // @param {ComponentProps} props\n' +
          'export const init{{properCase componentName}} = ({ targetSelector, props }) =>\n' +
          '  RenderReact({{properCase componentName}}, props, document.querySelector(targetSelector));\n\n',

      }
    ],
  });
  return; // I don't think we need to support this
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
        path: "examples/{{dashCase componentName}}.html",
        templateFile: "plop/general/example-html.txt",
      },
      {
        type: "append",
        path: "examples/js/example-helper.js",
        pattern: /(<nav class=\"nav\" aria-label=\"Same Page\">\n)/,
        separator: "",
        template: '                <a class="nav-link" href="{{dashCase componentName}}.html"><span class="fas fa-hand-spock"></span>{{properCase componentName}}</a>\n',
      },
      {
        type: "add",
        path: "src/components/{{properCase componentName}}/{{properCase componentName}}.stories.jsx",
        templateFile: "plop/general/component-stories.txt",
      },
      {
        type: "add",
        path: "src/components/{{properCase componentName}}/{{properCase componentName}}.test.jsx",
        templateFile: "plop/general/component-tests.txt",
      },
      {
        type: "add",
        path: "src/components/{{properCase componentName}}/index.js",
        template: 'export { init{{properCase componentName}} as default } from "../../core/utils";',
      },
      {
        type: "append",
        path: "src/components/index.js",
        pattern: /(\n$)/gm,
        separator: "",
        template: 'export * from "./{{properCase componentName}}/{{properCase componentName}}";\n',
      },
      {
        type: "append",
        path: "src/core/utils/index.js",
        pattern: /(\n$)/,
        separator: "",
        template: 'import { {{properCase componentName}} } from "../../components/{{properCase componentName}}/{{properCase componentName}}";\n\n' +
          ' // @param {ComponentProps} props\n' +
          'export const init{{properCase componentName}} = ({ targetSelector, props }) =>\n' +
          '  RenderReact({{properCase componentName}}, props, document.querySelector(targetSelector));\n\n',

      }
    ],
  });
};
