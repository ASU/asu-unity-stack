// @ts-check
import classNames from "classnames";

import {
  Button,
  Accordion,
} from "@asu-design-system/components-core/src/components";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import {
  accordionCardPropShape,
  progDetailSectionIds,
} from "../../../../core/models";

/**
 * @typedef {import('../../../../core/models/program-detail-types').ApplicationRequirementsProps} ApplicationRequirementsProps
 */

const ButtonList = styled.ul`
  display: inline-flex;
  list-style: none;
  padding: 0;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    .btn {
      width: max-content;
      margin-left: 0;
      &:not(:first-child) {
        margin-top: 1rem;
      }
    }
  }
`;

/**
 * @param {ApplicationRequirementsProps} props
 * @returns {JSX.Element}
 */
function ApplicationRequirements({ accordionCards }) {
  const items = [
    {
      label: "Freshman",
      href: "https://admission.asu.edu/freshman/apply",
    },
    { label: "Transfer", href: "https://admission.asu.edu/transfer/apply" },
    {
      label: "International",
      href: "https://admission.asu.edu/international/undergrad-apply",
    },
    {
      label: "Readmission",
      href: "https://admission.asu.edu/undergrad/readmission",
    },
  ];

  // clean up those records with `header` or `body` with empty/null values
  const reqList = accordionCards.filter(
    ({ content }) => content.body?.trim() && content.header?.trim()
  );

  return (
    <section id={progDetailSectionIds.applicationRequirements.targetIdName}>
      <h2>
        <span className="highlight-gold">Application requirements</span>
      </h2>
      <h3 className="mt-4">General university admission requirements</h3>
      <p>
        All students are required to meet general university admission
        requirements
      </p>
      <ButtonList
        className={classNames("", {
          "mb-0": reqList.length === 0,
        })}
      >
        {items.map(({ label, href }) => (
          <li key={label}>
            <Button
              ariaLabel={label}
              color="maroon"
              href={href}
              label={label}
              size="small"
            />
          </li>
        ))}
      </ButtonList>
      {reqList.length > 0 && (
        <div className="mt-2 mb-4">
          <Accordion cards={reqList} openedCard={1} />
        </div>
      )}
    </section>
  );
}

ApplicationRequirements.propTypes = {
  accordionCards: PropTypes.arrayOf(accordionCardPropShape).isRequired,
};

export { ApplicationRequirements };
