// React 19 rewrites an element's innerHTML whenever its dangerouslySetInnerHTML object changes identity, even for
// the same string. Storybook re-renders a story on every viewport change, so a fresh object replaced the markup an
// init script had enhanced and nothing enhanced it again. One object per string keeps the DOM as it is.
const objects = new Map();

export const innerHtml = html => {
  if (!objects.has(html)) objects.set(html, { __html: html });
  return objects.get(html);
};
