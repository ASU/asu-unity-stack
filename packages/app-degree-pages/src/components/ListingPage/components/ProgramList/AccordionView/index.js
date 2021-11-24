// @ts-check

import { Accordion } from "@asu-design-system/components-core";
import React, { useContext } from "react";
import styled from "styled-components";

import { AppContext } from "../../../../../core/context";
import {
  degreeDataPropResolverService,
  parseMajorInfoLink,
} from "../../../../../core/services";
import { accellerateDegreeLink } from "../../../../../core/services/degree-http-service";
import { toTitleCase } from "../../../../../core/utils";
import { degreeListPropTypes } from "../programs-prop-types";

const WrapperSection = styled.div`
  & {
    ul {
      margin-top: 1.5rem;
      margin-bottom: 0;
      list-style: none;
      padding: 0;

      li:not(:last-child) {
        margin-bottom: 1rem;
      }
    }
  }
  .accordion .card.card-foldable {
    border-bottom: 1px solid #d0d0d0;
  }
`;

/**
 *
 * @param {import("..").GridListingProps} props
 * @returns {JSX.Element}
 */
const AccordionView = ({ programs, actionUrls }) => {
  const { state } = useContext(AppContext);
  const columSettings = state?.listPageProps?.programList?.settings;
  /**
   * @type {{
   *   content: {
   *     header: string
   *    body: string
   *   }
   * }[]}
   * */
  const cards = programs.map(row => {
    const resolver = degreeDataPropResolverService(row);

    const getRequiredCourses = () => {
      const isOnline = resolver.isOnline();
      const directUrl = isOnline
        ? resolver.getOnlineMajorMapURL()
        : resolver.getAsuCritTrackUrl();

      return `<a href=${directUrl}>Major Map</a>`;
    };

    const getAcceleratedConcurrent = () => `<div>
        ${
          resolver.getConcurrentDegrees().lenght > 0
            ? "<div className='cell-container'>concurrent</div>"
            : ""
        }
        ${
          resolver.getAccelerateDegrees().length > 0
            ? `<div className="cell-container">
                <a href=${accellerateDegreeLink(
                  resolver,
                  actionUrls.majorInfoUrl
                )}>
                  4+1 years
                </a>
              </div>`
            : ""
        }
    </div>`;

    return {
      content: {
        header: resolver.getMajorDesc(),
        body: `<ul>
        <li>
          <strong>Major:</strong>
          <br />
            <a href=${parseMajorInfoLink(resolver, actionUrls.majorInfoUrl)}>
              ${resolver.getMajorDesc()}
            </a>
        </li>
        <li>
          <strong>Degree:</strong>
          <br />${resolver.getDegree()}
        </li>
        <li>
          <strong>Required Courses:</strong>
          <br />${getRequiredCourses()}
        </li>
        <li>
          <strong>Campus or location:</strong>
          <br />${resolver.getCampusList().map(toTitleCase).join(", ")}
        </li>
        <li>
          <strong>Accelerated/Concurrent:</strong>
          <br />${getAcceleratedConcurrent() || "-"}
        </li>
        ${
          !columSettings?.hideCollegeSchool
            ? ` <li>
                  <strong>College/School:</strong>
                  <br />
                  <a href=${resolver.getCollegeUrl()}>
                    ${resolver.getCollegeDesc()}
                  </a>
                </li>`
            : ""
        }
      </ul>`,
      },
    };
  });

  return (
    <WrapperSection data-testid="accordion-view">
      <Accordion cards={cards} />
    </WrapperSection>
  );
};

AccordionView.propTypes = {
  ...degreeListPropTypes,
};

export { AccordionView };
