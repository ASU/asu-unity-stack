// @ts-check
import React from "react";

import { flexibleDegreeOptionsLinks } from "../../../../core/models";
import { ContentBlock } from "./ContentBlock";

/**
 * @typedef {import('../../../../core/models/program-detail-types').FlexibleDegreeOptionsProps} FlexibleDegreeOptionsProps
 */

/**
 *
 * @param {FlexibleDegreeOptionsProps} props
 * @returns
 */
function FlexibleDegreeOptions({ acceleratedLinks, concurrentLinks }) {
  return (
    <section>
      <h2>
        <span className="highlight-gold">Flexible degree options</span>
      </h2>
      {!!acceleratedLinks.length && (
        <ContentBlock
          title="Accelerated program options"
          links={acceleratedLinks}
        />
      )}
      {!!concurrentLinks.length && (
        <ContentBlock
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
