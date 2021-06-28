// @ts-check

import { Accordion } from "@asu-design-system/components-core";
import React from "react";
import styled from "styled-components";

import { degreeDataPropResolverService } from "../../../../../core/services";
import { toTitleCase } from "../../../../../core/utils";
import { degreeListPropTypes } from "../programs-prop-types";

const WrapperSection = styled.div`
  & {
    ul {
      margin-top: 1rem;
      list-style: none;
      padding: 0;

      li {
        margin-bottom: 1rem;
      }
    }
  }
`;

/**
 *
 * @param {import("..").GridListingProps} props
 * @returns {JSX.Element}
 */
const AccordionView = ({ programms }) => {
  /**
   * @type {{
   *   content: {
   *     header: string
   *    body: string
   *   }
   * }[]}
   * */
  const cards = programms.map(row => {
    const resolver = degreeDataPropResolverService(row);
    return {
      content: {
        header: resolver.getMajorDesc(),
        body: `<ul>
        <li>
          <strong>Major:</strong>
          <br />${resolver.getMajorDesc()}
        </li>
        <li>
          <strong>Degree:</strong>
          <br />${resolver.getDegree()}
        </li>
        <li>
          <strong>Location:</strong>
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
