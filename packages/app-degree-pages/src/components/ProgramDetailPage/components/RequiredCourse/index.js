/* eslint-disable react/prop-types */
import { Button } from "@asu-design-system/components-core";
import PropTypes from "prop-types";
import React from "react";
import Styled from "styled-components";

/** @typedef {import('../../../../core/models/program-detail-types').RequiredCoursesProps} RequiredCoursesProps */

const ButtonGroup = Styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
`;

/**
 *
 * @param {RequiredCoursesProps} props
 * @returns
 */
function RequiredCourse({
  concurrentDegreeMajorMaps = "",
  onlineMajorMapURL = "",
  majorMapOnCampusArchiveURL,
}) {
  const dt = new Date();
  const acadYear = `${dt.getFullYear()}-${dt.getFullYear() + 11}`;

  const template = (
    <section className="container pl-0 pt-1">
      <h4>Required Course (Major Map)</h4>
      <ButtonGroup>
        {concurrentDegreeMajorMaps && (
          <Button
            label={`View ${acadYear} major map (on-campus)`}
            color="maroon"
            size="small"
            element="button"
            href={concurrentDegreeMajorMaps}
          />
        )}
        {onlineMajorMapURL && (
          <Button
            label={`View ${acadYear} major map (online)`}
            color="maroon"
            size="small"
            element="button"
            href={onlineMajorMapURL}
          />
        )}
      </ButtonGroup>
      <div className="mt-1">
        <a href={majorMapOnCampusArchiveURL}>Major map on-campus (archive)</a>
      </div>
      <div className="mt-1">
        <strong>What if:</strong> See how your courses can be applied to another
        major and find out how to&nbsp;
        <a href="https://changemajor.apps.asu.edu/">change your major</a>
      </div>
    </section>
  );

  return !concurrentDegreeMajorMaps && !onlineMajorMapURL ? <div /> : template;
}

RequiredCourse.propTypes = {
  concurrentDegreeMajorMaps: PropTypes.string,
  onlineMajorMapURL: PropTypes.string,
  majorMapOnCampusArchiveURL: PropTypes.string,
};

export { RequiredCourse };
