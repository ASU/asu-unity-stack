import { Basic as Header } from "../../packages/unity-bootstrap-theme/stories/organisms/global-header/global-header.templates.stories.js";
import { GlobalElementsOnly as Footer } from "../../packages/unity-bootstrap-theme/stories/organisms/global-footer/global-footer.templates.stories.js";

export const withHeaderFooter = (StoryFn, context) => {
  const { globals, parameters } = context;

  const header = parameters?.uds?.header;
  const isHeaderActive = `${globals.header}` === 'true' && header?.disable !== true;

  const footer = parameters?.uds?.footer;
  const isFooterActive = `${globals.footer}` === 'true' && footer?.disable !== true;

  const isStory = context.viewMode === 'story';

  return <>
    {isStory && isHeaderActive && Header}
    <StoryFn />
    {isStory && isFooterActive && Footer}
  </>
};
