// @ts-check
/** @jsx h */
import { h, Fragment } from "preact";

const BaseBulletItemContainer = ({ children }) => (
  <div className="glide__bullets" data-glide-el="controls[nav]">
    {children}
  </div>
);

/**
 *
 * @param {{ buttonCount: number}} props
 * @returns
 */
const BulletItems = ({ buttonCount }) => {
  // Build out bullets markup based on buttonCount.
  let bulletItems = [];
  for (let i = 0; i < buttonCount; i++) {
    bulletItems.push(
      <button
        className={"glide__bullet"}
        data-glide-dir={"=" + i}
        aria-label={"Slide view " + (i + 1)}
      />
    );
  }
  return <BaseBulletItemContainer>{bulletItems}</BaseBulletItemContainer>;
};

/**
 *
 * @param {{ buttonCount: number, imageItems: string[], onItemClick?: (index: number) => void }} props
 * @returns
 */
const ImageBulletItems = ({
  buttonCount,
  imageItems,
  onItemClick = index => null,
}) => {
  // Build out bullets markup based on buttonCount.
  let bulletItems = imageItems.map((img, i) => (
    <img
      src={img}
      className={"glide__bullet bullet-image"}
      data-glide-dir={"=" + i}
      aria-label={"Slide view " + (i + 1)}
      onClick={() => onItemClick(i)}
    />
  ));

  return <BaseBulletItemContainer>{bulletItems}</BaseBulletItemContainer>;
};

export { BaseBulletItemContainer, BulletItems, ImageBulletItems };
