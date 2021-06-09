// @ts-check
import { Button } from "@asu-design-system/components-core/src/components/Button";
import PropTypes from "prop-types";
import React from "react";

import {
  buttonPropTypes,
  accordionCardPropTypes,
} from "../../models/app-prop-types";

/**
 * @typedef {import('../../models/app-props').RequirementsProps} RequirementsProps
 */

/**
 * @param {RequirementsProps} props
 * @returns {JSX.Element}
 */

export const Requirements = ({
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
      <div className="mt-2">{/* Accordion here */}</div>
    </section>
  );
};

Requirements.propTypes = {
  sectionHeader: PropTypes.string.isRequired,
  contentText: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  buttons: PropTypes.arrayOf(buttonPropTypes),
  accordionCards: PropTypes.arrayOf(accordionCardPropTypes).isRequired,
};
