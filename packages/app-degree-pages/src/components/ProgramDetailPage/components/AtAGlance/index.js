// @ts-check
import PropTypes from "prop-types";
import React from "react";

import { glanceItemPropType } from "../../../../core/models/app-prop-types";
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
    <section className="pt-6">
      <h2>
        <span className="highlight-gold">At a glance: program details</span>
      </h2>
      <ul className="uds-list fa-ul maroon pt-2">
        <GlanceItem item={[offeredBy]} type="offeredBy" />
        <GlanceItem item={locations} type="locations" />
        <GlanceItem
          item={firstRequirementMathCourse}
          type="firstRequirementMathCourse"
        />
        <GlanceItem item={mathIntensity} type="mathIntensity" />
        <GlanceItem item={timeCommitment} type="timeCommitment" />
      </ul>
    </section>
  );
};

AtAGlance.propTypes = {
  offeredBy: glanceItemPropType.isRequired,
  locations: PropTypes.arrayOf(glanceItemPropType).isRequired,
  firstRequirementMathCourse: PropTypes.string.isRequired,
  mathIntensity: PropTypes.string.isRequired,
  timeCommitment: PropTypes.string.isRequired,
};
