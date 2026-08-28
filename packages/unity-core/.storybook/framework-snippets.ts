import { html } from 'lit';
import type { DecoratorFunction } from '@storybook/web-components';

/**
 * Generates a Twig code snippet from a web component tag + args.
 * Converts literal arg values to Twig variables.
 */
function toTwig(tag: string, args: Record<string, any>): string {
  const attrs = Object.entries(args)
    .filter(([_, v]) => v !== undefined && v !== '' && v !== null && v !== false)
    .map(([k, v]) => {
      if (v === true) return `{% if ${k} %}${k}{% endif %}`;
      return `${k}="{{ ${k} }}"`;
    })
    .join(' ');
  return `<${tag} ${attrs}></${tag}>`;
}

/**
 * Generates a React/JSX code snippet from a web component tag + args.
 * Same tag with an import statement.
 */
function toReact(tag: string, args: Record<string, any>): string {
  const componentName = tag.replace('uds-', '');
  const attrs = Object.entries(args)
    .filter(([_, v]) => v !== undefined && v !== '' && v !== null && v !== false)
    .map(([k, v]) => {
      if (v === true) return k;
      return `${k}="${v}"`;
    })
    .join(' ');
  return `import '@asu/unity-core/${componentName}';\n\n<${tag} ${attrs}></${tag}>`;
}

/**
 * Decorator that appends Twig and React code snippets below the rendered story.
 */
export const withFrameworkSnippets: DecoratorFunction = (storyFn, context) => {
  const { args, component } = context;
  const tag = component as string;

  if (!tag || !tag.startsWith('uds-')) {
    return storyFn();
  }

  const twigCode = toTwig(tag, args);
  const reactCode = toReact(tag, args);

  return html`
    ${storyFn()}
    <details style="margin-top: 24px; font-family: ui-monospace, monospace; font-size: 12px; border: 1px solid #e0e0e0; border-radius: 4px;">
      <summary style="padding: 8px 12px; cursor: pointer; background: #f5f5f5; font-weight: bold;">
        📋 Framework Usage (Twig / React)
      </summary>
      <div style="padding: 12px;">
        <div style="margin-bottom: 12px;">
          <strong style="display: block; margin-bottom: 4px; color: #666;">🐘 Drupal / Twig:</strong>
          <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 4px; overflow-x: auto; margin: 0;"><code>${twigCode}</code></pre>
        </div>
        <div>
          <strong style="display: block; margin-bottom: 4px; color: #666;">⚛️ React:</strong>
          <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 4px; overflow-x: auto; margin: 0;"><code>${reactCode}</code></pre>
        </div>
      </div>
    </details>
  `;
};
