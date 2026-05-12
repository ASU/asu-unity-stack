// @ts-check
import { sanitizeDangerousMarkup } from "@asu/shared";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import { accordionCardPropTypes } from "../../../core/models/shared-prop-types";
import { GaEventWrapper } from "../../GaEventWrapper/GaEventWrapper";

/**
 * @typedef {import('../../../core/types/shared-types').AccordionCardItemProps} AccordionCardItemProps
 */

/**
 * @typedef {import('../../../core/types/shared-types').AccordionCard} AccordionCard
 */

/**
 * @param {AccordionCardItemProps} props
 * @returns {JSX.Element}
 * @ignore
 */
export const AccordionCard = (
    /** @type {AccordionCardItemProps} */ {
      id,
      parentId,
      /** @type {AccordionCard} */ item,
      openCard,
      onClick,
      gaData,
      ref,
    }
  ) => {
    const isOpen = id === openCard;
    /**
     * event to open accordion is happening on the closed accordion
     * so the action seem backwards but:
     * open will send an event with action "close"
     * close will send an event with action "open"
     * */

    const gaAction = !isOpen ? "close" : "open";
    return (
      <div
        ref={ref}
        className={classNames("accordion-item", "mt-3", {
          [`accordion-item-${item.color}`]: item.color,
          [`accordion-header-icon`]: item.content?.icon,
        })}
      >
        <div className="accordion-header">
          <h4>
            <GaEventWrapper
              gaData={{
                ...gaData,
                action: gaAction,
                text: item.content.header,
              }}
            >
              <button
                data-testid="accordion-opener"
                className={classNames({ [`collapsed`]: !isOpen })}
                data-bs-toggle="collapse"
                // @ts-expect-error href is needed for Bootstrap collapse
                href={`#card-body-${id}`}
                type="button"
                aria-expanded={isOpen}
                aria-controls={`card-body-${id}`}
                onClick={e => onClick(e, id)}
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
            </GaEventWrapper>
          </h4>
        </div>
        {item.content?.body && (
          <div
            data-bs-parent={`#${parentId}`}
            id={`card-body-${id}`}
            className={classNames("collapse", { show: isOpen })}
          >
            <div
              className="accordion-body"
              dangerouslySetInnerHTML={sanitizeDangerousMarkup(
                item.content.body
              )}
            />
          </div>
        )}
      </div>
    );
  };

AccordionCard.propTypes = {
  id: PropTypes.number,
  // @ts-ignore a technical type mismatch between PropTypes definition and your TypeScript
  item: accordionCardPropTypes,
  parentId: PropTypes.string,
  openCard: PropTypes.number,
  onClick: PropTypes.func,

  gaData: PropTypes.object,
};
