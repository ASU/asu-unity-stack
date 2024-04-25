
import React from "react";
import { useMemo, useEffect } from '@storybook/addons';
import { clearStyles, addStyle } from './helpers/styleInjection';

export const withColumns = (StoryFn, context) => {
  const { globals, parameters } = context;
  const toolParameters = parameters?.uds?.columns;
  const isActive = `${globals?.columns}` === 'true' && toolParameters?.disable !== true;

  const columnsStyles = useMemo(() => {
    const selector =
      context.viewMode === 'docs' ? `#anchor--${context.id} .docs-story` : '.sb-show-main';

    return `
    ${selector}>#storybook-root{opacity:.7}
      ${selector} {
        background-size:
            calc(6 * var(--griddiv) - var(--gridgap)  ) 1px,
            calc(5 * var(--griddiv)  - var(--gridgap)) 1px,
            calc(4 * var(--griddiv)  - var(--gridgap)) 1px,
            calc(3 * var(--griddiv)  - var(--gridgap)) 1px,
            calc(2 * var(--griddiv)  - var(--gridgap)) 1px,
            calc(1 * var(--griddiv)  - var(--gridgap)) 1px;
        background-blend-mode: normal;
        background-image:
            linear-gradient(90deg,var(--gridbg) var(--gridcol), var(--gridbg2) -1px),
            linear-gradient(90deg,var(--gridbg) var(--gridcol), var(--gridbg2) -1px),
            linear-gradient(90deg,var(--gridbg) var(--gridcol), var(--gridbg2) -1px),
            linear-gradient(90deg,var(--gridbg) var(--gridcol), var(--gridbg2) -1px),
            linear-gradient(90deg,var(--gridbg) var(--gridcol), var(--gridbg2) -1px),
            linear-gradient(90deg,var(--gridbg) var(--gridcol), var(--gridbg2) -1px),
            linear-gradient(-90deg,var(--gridbg) var(--gridcol), var(--gridbg2) -1px),
            linear-gradient(-90deg,var(--gridbg) var(--gridcol), var(--gridbg2) -1px),
            linear-gradient(-90deg,var(--gridbg) var(--gridcol), var(--gridbg2) -1px),
            linear-gradient(-90deg,var(--gridbg) var(--gridcol), var(--gridbg2) -1px),
            linear-gradient(-90deg,var(--gridbg) var(--gridcol), var(--gridbg2) 0px),
            linear-gradient(-90deg,var(--gridbg) var(--gridcol), var(--gridbg2) 0px);
        background-repeat: repeat-y;
        background-position: center;
        --gridbg: #ffbbbb;
        --gridbg2: #0000;
        --gridgap: 24px;
        --gridcontainer: calc(100vw - 5rem);
        --gridcontainerpad: calc(var(--gridcontainer) + var(--gridgap));
        --gridcol: calc((var(--gridcontainer) - var(--gridgap) * 11) / 12);
        --griddiv: calc((var(--gridcontainerpad)/6) );
    }

    @media (min-width: 576px) {
        ${selector} {
            --gridcontainer: 476px;
        }
    }

    @media (min-width: 768px) {
        ${selector} {
            --gridcontainer: 744px;
        }
    }

    @media (min-width: 992px) {
        ${selector} {
            --gridcontainer: 968px;
        }
    }
    @media (min-width: 1260px) {
        ${selector} {
            --gridcontainer: 1200px;
        }
    }
    `;
  });

  useEffect(() => {
    const selectorId =
      context.viewMode === 'docs'
        ? `addon-uds-columns-docs-${context.id}`
        : `addon-uds-columns`;
    if (!isActive) {
      clearStyles(selectorId);
      return;
    }

    addStyle(selectorId, columnsStyles);
  }, [isActive, columnsStyles, globals]);

  return <>
    <StoryFn />
  </>
};
