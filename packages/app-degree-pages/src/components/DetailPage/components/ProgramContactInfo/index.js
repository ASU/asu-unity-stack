// @ts-check

import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { linkPropShape, progDetailSectionIds } from "../../../../core/models";

const ListContainer = styled.ul`
  list-style: none;
  margin-left: 0rem;
  padding-left: 0rem;

  & li {
    display: flex;
    align-items: center;
    :not(:first-child) {
      display: flex;
      padding-bottom: 0.5rem;
    }

    :first-child div {
      display: flex;
    }

    :nth-of-type(2) {
      padding-bottom: 2rem;
    }

    > div {
      display: flex;
      align-items: center;
    }

    .c-icon,
    i {
      font-size: 1rem;
      margin-right: 0.5rem;
    }

    .office-loc {
      margin-left: 1.5rem;
    }
  }
`;

/**
 *
 * @param {import("src/core/types/detail-page-types").ProgramContactInfoProps} props
 * @returns
 */
function ProgramContactInfo({ department, asuOfficeLoc, email, phone }) {
  return (
    <section
      id={progDetailSectionIds.programContactInfo.targetIdName}
      data-testid="program-contact-info"
    >
      <h2>
        <span className="highlight-gold">Program contact information</span>
      </h2>

      <p>
        If you have questions related to admission, please fill out the request
        information form above and an admission specialist will contact you
        directly. For questions regarding faculty or courses, please use the
        contact information below.
      </p>

      <ListContainer className="text-maroon">
        <li>
          <div>
            <i
              className="c-icon fas icon-small fa-map-marker-alt"
              title="Department  Address"
            />
            <a href={department.url}>{department.text}</a>
          </div>
        </li>
        <li>
          <div className="c-icon text-dark office-loc">{asuOfficeLoc}</div>
        </li>
        <li>
          <i className="c-icon fas icon-small fa-envelope" title="Email" />
          <a href={`mailto:${email.url || email.text}`}>{email.text}</a>
        </li>
        <li>
          <i className="c-icon fas icon-small fa-phone" title="Phone" />
          <a href={`tel:${phone}`}>{phone}</a>
        </li>
      </ListContainer>
    </section>
  );
}

ProgramContactInfo.propTypes = {
  department: linkPropShape,
  asuOfficeLoc: PropTypes.string,
  email: linkPropShape,
  phone: PropTypes.string,
};

export { ProgramContactInfo };
