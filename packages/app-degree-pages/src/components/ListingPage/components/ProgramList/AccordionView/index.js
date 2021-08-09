// @ts-check

import { Accordion } from "@asu-design-system/components-core";
import React from "react";
import styled from "styled-components";

import {
  degreeDataPropResolverService,
  parseMajorInfoLink,
} from "../../../../../core/services";
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
          <strong>Campus or location:</strong>
          <br />${resolver.getCampusList().map(toTitleCase).join(", ")}
        </li>
        <li>
          <strong>College:</strong>
          <br />${resolver.getCollegeDesc()}
        </li>
      </ul>`,
      },
    };
  });

  return (
    <WrapperSection>
      <Accordion cards={cards} openedCard={1} />
    </WrapperSection>
  );
};

AccordionView.propTypes = {
  ...degreeListPropTypes,
};

export { AccordionView };
