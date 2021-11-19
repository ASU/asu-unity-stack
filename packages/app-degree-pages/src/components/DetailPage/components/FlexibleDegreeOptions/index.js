// @ts-check
import React from "react";

import {
  flexibleDegreeOptionsLinks,
  progDetailSectionIds,
} from "../../../../core/models";
import { ContentBlock } from "./ContentBlock";

/**
 * @typedef {import('../../../../core/types/detail-page-types').FlexibleDegreeOptionsProps} FlexibleDegreeOptionsProps
 */

/**
 *
 * @param {FlexibleDegreeOptionsProps} props
 * @returns
 */
function FlexibleDegreeOptions({ acceleratedLinks, concurrentLinks }) {
  return (
    <section
      id={progDetailSectionIds.flexibleDegreeOptions.targetIdName}
      className="container"
      data-testid="flexible-degree-options"
    >
      <h2>
        <span className="highlight-gold">Flexible degree options</span>
      </h2>
      {!!acceleratedLinks.length && (
        <ContentBlock
          id={progDetailSectionIds.flexibleDegreeOptions.acceleratedId}
          title="Accelerated program options"
          links={acceleratedLinks}
        />
      )}
      {!!concurrentLinks.length && (
        <ContentBlock
          id={progDetailSectionIds.flexibleDegreeOptions.concurrentId}
          title="Concurrent degree program"
          links={concurrentLinks}
        />
      )}
    </section>
  );
}

FlexibleDegreeOptions.propTypes = {
  acceleratedLinks: flexibleDegreeOptionsLinks,
  concurrentLinks: flexibleDegreeOptionsLinks,
};

export { FlexibleDegreeOptions };
