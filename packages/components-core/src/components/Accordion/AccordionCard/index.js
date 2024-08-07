// @ts-check
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import { sanitizeDangerousMarkup } from "../../../../../../shared";
import { accordionCardPropTypes } from "../../../core/models/shared-prop-types";

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
    className={classNames("accordion-item", "mt-3", {
      [`accordion-item-${item.color}`]: item.color,
      [`accordion-header-icon`]: item.content?.icon,
    })}
  >
    <div className="accordion-header">
      <h4>
        <button
          type="button"
          data-testid="accordion-opener"
          className={classNames({ [`collapsed`]: id !== openCard })}
          data-bs-toggle="collapse"
          href={`#card-body-${id}`}
          aria-expanded={id === openCard}
          aria-controls={`card-body-${id}`}
          onClick={e => onClick(e, id, item.content?.header)}
        >
          {item.content?.icon ? (
            <span className="accordion-icon">
              <i
                className={`${item.content.icon?.[0]} fa-${item.content.icon?.[1]} me-2`}
              />
              {item.content.header}
            </span>
          ) : (
            item.content?.header
          )}
          <i className="fas fa-chevron-up" />
        </button>
      </h4>
    </div>
    {item.content?.body && (
      <div id={`card-body-${id}`} className={classNames("collapse")}>
        <div
          className="accordion-body"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={sanitizeDangerousMarkup(item.content.body)}
        />
      </div>
    )}
  </div>
);

AccordionCard.propTypes = {
  id: PropTypes.number,
  item: accordionCardPropTypes,
  openCard: PropTypes.number,
  onClick: PropTypes.func,
};
