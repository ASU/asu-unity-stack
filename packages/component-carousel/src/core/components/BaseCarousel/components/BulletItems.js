/* eslint-disable react/no-array-index-key */
// @ts-check
import PropTypes from "prop-types";
import React from "react";

/**
 *
 * @param {{ children: JSX.Element | JSX.Element[] }} props
 * @returns { JSX.Element }
 */
const BaseBulletItemContainer = ({ children }) => (
  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
  <div
    role="group"
    className="glide__bullets"
    data-glide-el="controls[nav]"
    // this is needed when the children is provided
    onClick={e => e.stopPropagation()}
    onKeyDown={e => e.stopPropagation()}
  >
    {children}
  </div>
);

BaseBulletItemContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

/**
 *
 * @param {{ buttonCount: number }} props
 * @returns { JSX.Element }
 */
const BulletItems = ({ buttonCount }) => {
  // Build out bullets markup based on buttonCount.
  const bulletItems = [];
  for (let i = 0; i < buttonCount; i += 1) {
    bulletItems.push(
      <button
        type="button"
        key={`bullet-${i}`}
        className="glide__bullet"
        data-glide-dir={`=${i}`}
        aria-label={`Slide view ${i + 1}`}
      />
    );
  }
  return <BaseBulletItemContainer>{bulletItems}</BaseBulletItemContainer>;
};

BulletItems.propTypes = {
  buttonCount: PropTypes.number.isRequired,
};

/**
 *
 * @param {{ imageItems: string[], onItemClick?: (index: number) => void }} props
 * @returns {JSX.Element}
 */
const ImageBulletItems = ({ imageItems, onItemClick = () => null }) => {
  const clickBullet = (e, index) => {
    const { ariaSelected } = e.currentTarget.dataset;
    e.currentTarget.dataset.ariaSelected = String(!ariaSelected);
    e.stopPropagation();
    onItemClick(index);
  };

  const bulletItems = imageItems.map((img, i) => (
    <button
      type="button"
      role="option"
      className="bullet-image-container"
      key={`bullet-${i}`}
      data-glide-dir={`=${i}`}
      aria-label={`Slide view ${i + 1}`}
      aria-selected="false"
      onClick={e => clickBullet(e, i)}
      onKeyDown={e => clickBullet(e, i)}
    >
      <img
        src={img}
        alt={`Slide ${i + 1}`}
        className="glide__bullet bullet-image"
      />
    </button>
  ));

  return <BaseBulletItemContainer>{bulletItems}</BaseBulletItemContainer>;
};

ImageBulletItems.propTypes = {
  imageItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  onItemClick: PropTypes.func,
};

export { BaseBulletItemContainer, BulletItems, ImageBulletItems };
