// @ts-check
import {
  Button,
  Accordion,
} from "@asu-design-system/components-core/src/components";
import PropTypes from "prop-types";
import React from "react";

import {
  buttonPropTypes,
  accordionCardPropTypes,
} from "../../../../core/models/app-prop-types";

/**
 * @typedef {import('../../../../core/models/program-detail-types').ApplicationRequirementsProps} ApplicationRequirementsProps
 */

/**
 * @param {ApplicationRequirementsProps} props
 * @returns {JSX.Element}
 */

export const ApplicationRequirements = ({
  sectionHeader,
  contentText,
  buttons,
  accordionCards,
}) => {
  return (
    <section>
      <h2>
        <span className="highlight-gold">{sectionHeader}</span>
      </h2>
      <h3 className="mt-4">{contentText.title}</h3>
      <p>{contentText.description}</p>
      {buttons && (
        <div>
          {buttons.map(button => (
            // @ts-ignore
            <Button
              ariaLabel={button.ariaLabel}
              color={button.color}
              icon={button.icon}
              href={button.href}
              label={button.label}
              onClick={button.onClick}
              size={button.size}
            />
          ))}
        </div>
      )}
      <div className="mt-2 mb-4">
        <Accordion cards={accordionCards} openedCard={1} />
      </div>
    </section>
  );
};

ApplicationRequirements.propTypes = {
  sectionHeader: PropTypes.string.isRequired,
  contentText: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  buttons: PropTypes.arrayOf(buttonPropTypes),
  accordionCards: PropTypes.arrayOf(accordionCardPropTypes).isRequired,
};
