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
}) {
  return (
    <section>
      <h4>Required Course (Major Map)</h4>
      <ButtonGroup>
        {concurrentDegreeMajorMaps && (
          <Button
            label="View major map (on-campus)"
            color="maroon"
            size="small"
            element="button"
            href={concurrentDegreeMajorMaps}
          />
        )}
        {onlineMajorMapURL && (
          <Button
            label="View major map (online)"
            color="maroon"
            size="small"
            element="button"
            href={onlineMajorMapURL}
          />
        )}
      </ButtonGroup>
    </section>
  );
}

RequiredCourse.propTypes = {
  concurrentDegreeMajorMaps: PropTypes.string,
  onlineMajorMapURL: PropTypes.string,
};

export { RequiredCourse };
