// @ts-check
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import dompurify from "dompurify";
import PropTypes from "prop-types";
import React from "react";

import { accordionCardPropTypes } from "../../../core/models/shared-prop-types";

const sanitizeDangerousMarkup = content => {
  const sanitizer = dompurify.sanitize;

  return { __html: sanitizer(content) };
};

/**
 * @typedef {import('../../../core/models/shared-model-types').AccordionCardItemProps} AccordionCardItemProps
 */

/**
 * @param {AccordionCardItemProps} props
 * @returns {JSX.Element}
 */

export const AccordionCard = ({ id, item, openCard, onClick }) => {
  return (
    <div
      className={classNames("card", "card-foldable", "mt-3", {
        [`card-${item.color}`]: item.color,
        [`card-header-icon`]: item.content.icon,
      })}
    >
      <div className="card-header">
        <h4>
          <a
            className={classNames({ [`collapsed`]: id !== openCard })}
            data-toggle="collapse"
            href={`#card-body-${id}`}
            role="button"
            aria-expanded={id === openCard}
            aria-controls={`card-body-${id}`}
            onClick={e => onClick(e, id)}
          >
            {item.content.icon ? (
              <span className="card-icon">
                <FontAwesomeIcon icon={item.content.icon} className="mr-2" />
                {item.content.header}
              </span>
            ) : (
              item.content.header
            )}
            <FontAwesomeIcon icon="chevron-up" />
          </a>
        </h4>
      </div>
      <div
        id={`card-body-${id}`}
        className={classNames("collapse", "card-body", {
          [`show`]: id === openCard,
        })}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={sanitizeDangerousMarkup(item.content.body)}
      />
    </div>
  );
};

AccordionCard.propTypes = {
  id: PropTypes.number,
  item: accordionCardPropTypes,
  openCard: PropTypes.number,
  onClick: PropTypes.func,
};
