/* eslint-disable react/no-danger */
// @ts-check
import {
  Button,
  Accordion,
  sanitizeDangerousMarkup,
} from "@asu-design-system/components-core";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { progDetailSectionIds } from "../../../../core/models";

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

const undergraduateTemplate = (
  additionalRequirements = "",
  transferRequirements = ""
) => {
  const generalRequirements = [
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

  const undergradRequirements = [];

  if (additionalRequirements.trim())
    undergradRequirements.push({
      content: {
        header: "Additional Requirements",
        body: additionalRequirements,
      },
    });

  if (transferRequirements.trim())
    undergradRequirements.push({
      content: {
        header: "Transfer Admission Requirements",
        body: transferRequirements,
      },
    });

  return (
    <>
      <p>
        All students are required to meet general university admission
        requirements
      </p>
      <ButtonList
        className={classNames("", {
          "mb-0": undergradRequirements.length === 0,
        })}
      >
        {generalRequirements.map(({ label, href }) => (
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
      {undergradRequirements.length > 0 && (
        <div className="mt-2 mb-4">
          <Accordion cards={undergradRequirements} openedCard={1} />
        </div>
      )}
    </>
  );
};

/**
 * @param {ApplicationRequirementsProps} props
 * @returns {JSX.Element}
 */
function ApplicationRequirements({
  graduateRequirements,
  transferRequirements,
  additionalRequirements,
}) {
  return (
    <section
      id={progDetailSectionIds.applicationRequirements.targetIdName}
      data-testid="application-requirements"
    >
      <h2>
        <span className="highlight-gold">Application requirements</span>
      </h2>
      <h3 className="mt-4">General university admission requirements</h3>
      {graduateRequirements ? (
        <div
          dangerouslySetInnerHTML={sanitizeDangerousMarkup(
            graduateRequirements
          )}
        />
      ) : (
        undergraduateTemplate(transferRequirements, additionalRequirements)
      )}
    </section>
  );
}

ApplicationRequirements.propTypes = {
  graduateRequirements: PropTypes.string,
  transferRequirements: PropTypes.string,
  additionalRequirements: PropTypes.string,
};

export { ApplicationRequirements };
