// @ts-check
import PropTypes from "prop-types";
import React from "react";

import { progDetailSectionIds } from "../../../../core/models";
import { glanceItemPropShape } from "../../../../core/models/app-prop-types";
import { GlanceItem } from "./GlanceItem";

/**
 * @typedef {import('../../../../core/models/program-detail-types').AtAGlanceProps} AtAGlanceProps
 */

/**
 * @param {AtAGlanceProps} props
 * @returns {JSX.Element}
 */

export const AtAGlance = ({
  offeredBy,
  locations,
  firstRequirementMathCourse,
  mathIntensity,
  timeCommitment,
}) => {
  return (
    <section id={progDetailSectionIds.atAGlance.targetIdName}>
      <h2>
        <span className="highlight-gold">At a glance: program details</span>
      </h2>
      <ul className="uds-list fa-ul maroon pt-2 pb-0 pr-0">
        {offeredBy && <GlanceItem item={[offeredBy]} type="offeredBy" />}
        {locations && <GlanceItem item={locations} type="locations" />}
        {firstRequirementMathCourse && (
          <GlanceItem
            item={firstRequirementMathCourse}
            type="firstRequirementMathCourse"
          />
        )}
        {mathIntensity && (
          <GlanceItem item={mathIntensity} type="mathIntensity" />
        )}
        {timeCommitment && (
          <GlanceItem item={timeCommitment} type="timeCommitment" />
        )}
      </ul>
    </section>
  );
};

AtAGlance.propTypes = {
  offeredBy: glanceItemPropShape.isRequired,
  locations: PropTypes.arrayOf(glanceItemPropShape).isRequired,
  firstRequirementMathCourse: PropTypes.string.isRequired,
  mathIntensity: PropTypes.string.isRequired,
  timeCommitment: PropTypes.string,
};
