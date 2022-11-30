/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import React from "react";
import Styled from "styled-components";
import { Button } from "../../../../../../components-core/src/components/Button";

/** @typedef {import('../../../../core/types/detail-page-types').RequiredCoursesProps} RequiredCoursesProps */

const ButtonGroup = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  & a.btn {
    margin: 0;
  }
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
  const acadYear = `${dt.getFullYear()}-${dt.getFullYear() + 1}`;

  const template = (
    <section className="container pl-0" data-testid="required-course">
      <h4>Required Courses (Major Map)</h4>
      <ButtonGroup className="pt-1">
        {concurrentDegreeMajorMaps && (
          <Button
            label={`View ${acadYear} major map (on-campus)`}
            color="maroon"
            element="button"
            href={concurrentDegreeMajorMaps}
          />
        )}
        {majorMapOnCampusArchiveURL && (
          <Button
            label={`View ${acadYear} major map (on-campus)`}
            color="maroon"
            element="button"
            href={majorMapOnCampusArchiveURL}
          />
        )}
        {onlineMajorMapURL && (
          <Button
            label={`View ${acadYear} major map (online)`}
            color="maroon"
            element="button"
            href={onlineMajorMapURL}
          />
        )}
      </ButtonGroup>
      <div className="mt-3">
        <strong>What if:</strong> See how your courses can be applied to another
        major and find out how to&nbsp;
        <a href="https://changemajor.apps.asu.edu/">change your major</a>
      </div>
    </section>
  );

  return !concurrentDegreeMajorMaps &&
    !onlineMajorMapURL &&
    !majorMapOnCampusArchiveURL ? (
    <div />
  ) : (
    template
  );
}

RequiredCourse.propTypes = {
  concurrentDegreeMajorMaps: PropTypes.string,
  onlineMajorMapURL: PropTypes.string,
  majorMapOnCampusArchiveURL: PropTypes.string,
};

export { RequiredCourse };
