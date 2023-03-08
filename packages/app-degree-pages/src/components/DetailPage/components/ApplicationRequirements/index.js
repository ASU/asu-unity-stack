/* eslint-disable react/no-danger */
// @ts-check
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { Accordion } from "../../../../../../components-core/src/components/Accordion";
import { Button } from "../../../../../../components-core/src/components/Button";
import { sanitizeDangerousMarkup } from "../../../../../../components-core/src/core/utils/html-utils";
import { progDetailSectionIds } from "../../../../core/models";

/**
 * @typedef {import('../../../../core/types/detail-page-types').ApplicationRequirementsProps} ApplicationRequirementsProps
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

const undergraduateTemplate = ({
  transferRequirements = "",
  additionalRequirements = "",
}) => {
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

  /** @type {import("src/core/types/shared-local-types").AccordionCard[]} */
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
  isMinorOrCertificate,
  additionalRequirements,
}) {
  let reqsLabel;
  if (graduateRequirements) {
    reqsLabel = !isMinorOrCertificate
      ? "Degree requirements"
      : "Program requirements";
  } else {
    reqsLabel = !isMinorOrCertificate
      ? "Admission requirements"
      : "Program requirements";
  }
  return (
    <>
      <section
        id={progDetailSectionIds.applicationRequirements.targetIdName}
        data-testid="application-requirements"
      >
        <h2>
          <span className="highlight-gold">{reqsLabel}</span>
        </h2>
        {graduateRequirements ? (
          <div
            dangerouslySetInnerHTML={sanitizeDangerousMarkup(
              graduateRequirements
            )}
          />
        ) : (
          undergraduateTemplate({
            transferRequirements,
            additionalRequirements,
          })
        )}
      </section>

      {graduateRequirements ? (
        <section
          id={progDetailSectionIds.degreeRequirements.targetIdName}
          data-testid="degree-requirements"
        >
          <h2>
            <span className="highlight-gold">Admission requirements</span>
          </h2>
          <div
            dangerouslySetInnerHTML={sanitizeDangerousMarkup(
              additionalRequirements
            )}
          />
        </section>
      ) : null}
    </>
  );
}

ApplicationRequirements.propTypes = {
  graduateRequirements: PropTypes.string,
  transferRequirements: PropTypes.string,
  isMinorOrCertificate: PropTypes.bool,
  additionalRequirements: PropTypes.string,
};

export { ApplicationRequirements };
