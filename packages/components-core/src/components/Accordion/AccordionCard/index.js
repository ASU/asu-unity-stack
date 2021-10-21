// @ts-check
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import { accordionCardPropTypes } from "../../../core/models/shared-prop-types";
import { sanitizeDangerousMarkup } from "../../../core/utils/html-utils";

/**
 * @typedef {import('../../../core/types/shared-types').AccordionCardItemProps} AccordionCardItemProps
 */

/**
 * @param {AccordionCardItemProps} props
 * @returns {JSX.Element}
 * @ignore
 */
export const AccordionCard = ({ id, item, openCard, onClick }) => (
  <div
    className={classNames("card", "card-foldable", "mt-3", {
      [`card-${item.color}`]: item.color,
      [`card-header-icon`]: item.content.icon,
    })}
  >
    <div className="card-header">
      <h4>
        <a
          data-testid="accordion-opener"
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
              <i
                className={`${item.content.icon?.[0]} fa-${item.content.icon?.[1]} mr-2`}
              />
              {item.content.header}
            </span>
          ) : (
            item.content.header
          )}
          <i className="fas fa-chevron-up" />
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

AccordionCard.propTypes = {
  id: PropTypes.number,
  item: accordionCardPropTypes,
  openCard: PropTypes.number,
  onClick: PropTypes.func,
};
