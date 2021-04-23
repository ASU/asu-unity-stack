// @ts-check
/** @jsx h */
import { h } from "preact";
import PropTypes from "prop-types";

/**
 *
 * @param {{ children: JSX.Element | JSX.Element[] }} props
 * @returns { JSX.Element }
 */
const BaseBulletItemContainer = ({ children }) => (
  <div className="glide__bullets" data-glide-el="controls[nav]">
    {children}
  </div>
);

BaseBulletItemContainer.propTypes = {
  children: PropTypes.object.isRequired,
};

/**
 *
 * @param {{ buttonCount: number }} props
 * @returns { JSX.Element }
 */
const BulletItems = ({ buttonCount }) => {
  // Build out bullets markup based on buttonCount.
  let bulletItems = [];
  for (let i = 0; i < buttonCount; i++) {
    bulletItems.push(
      <button
        type="button"
        key={`bullet-${  i}`}
        className={"glide__bullet"}
        data-glide-dir={`=${  i}`}
        aria-label={`Slide view ${  i + 1}`}
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
  const bulletItems = imageItems.map((img, i) => (
    <img
      src={img}
      className={"glide__bullet bullet-image"}
      data-glide-dir={`=${  i}`}
      aria-label={`Slide view ${  i + 1}`}
      onClick={() => onItemClick(i)}
    />
  ));

  return <BaseBulletItemContainer>{bulletItems}</BaseBulletItemContainer>;
};

ImageBulletItems.propTypes = {
  imageItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  onItemClick: PropTypes.func,
};

export { BaseBulletItemContainer, BulletItems, ImageBulletItems };
