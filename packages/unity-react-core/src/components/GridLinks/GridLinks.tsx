import React, { ReactElement } from "react";

import {
  GridLinksNumColumnsType,
  GridLinksTextColorClassName,
  GridLinksTextColorType,
} from "./GridLinksConstants";

export interface GridLinksProps {
  /**
   * Grid link items.
   */
  gridLinkItems: Array<{ label: string; icon: string; href: string }>;
  /**
   * Number of columns.
   */
  numColumns?: GridLinksNumColumnsType;
  /**
   * Text color.
   */
  textColor?: GridLinksTextColorType;
  /**
   * The element where we will position the dialog beside.
   */
  children?: ReactElement | ReactElement[] | string;
}

export const GridLinks: React.FC<GridLinksProps> = ({
  children,
  numColumns,
  textColor,
  gridLinkItems,
}) => {
  return (
    <>
      <div
        className={[
          "uds-grid-links",
          numColumns,
          GridLinksTextColorClassName[textColor],
        ].join(" ")}
      >
        {gridLinkItems &&
          gridLinkItems.map(item => (
            <a key={`${item.label}_${item.href}`} href={item.href}>
              <span className={`fa fa-fw ${item.icon}`} />
              {item.label}
            </a>
          ))}
      </div>
      <div>{children}</div>
    </>
  );
};
