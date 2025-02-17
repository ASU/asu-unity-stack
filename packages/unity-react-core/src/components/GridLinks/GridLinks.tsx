import React, { ReactElement } from "react";

import { GaEventWrapper } from "../GaEventWrapper/GaEventWrapper";
import {
  gridLinksNumColumns,
  gridLinksTextColor,
  gridLinksTextColorClassName,
} from "./GridLinksConstants";

const gaDefaultObject = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content",
};

export interface GridLinksProps {
  /**
   * Grid link items.
   */
  gridLinkItems: Array<{ label: string; icon: string; href: string }>;
  /**
   * Number of columns.
   */
  numColumns?: gridLinksNumColumns;
  /**
   * Text color.
   */
  textColor?: gridLinksTextColor;
  /**
   * The element where we will position the dialog beside.
   */
  children?: ReactElement | ReactElement[] | string;
}

export const GridLinks: React.FC<GridLinksProps> = ({
  gridLinkItems,
  numColumns,
  textColor,
  children,
}) => {
  return (
    <>
      <div
        className={[
          "uds-grid-links",
          numColumns,
          gridLinksTextColorClassName[textColor],
        ].join(" ")}
      >
        {gridLinkItems &&
          gridLinkItems.map(item => (
            <GaEventWrapper
              key={item.label + item.href}
              gaData={{
                ...gaDefaultObject,
                text: item.label,
                section: `grid links ${item.label}`,
              }}
            >
              <a href={item.href}>
                <span className={`fa fa-fw ${item.icon}`} />
                {item.label}
              </a>
            </GaEventWrapper>
          ))}
      </div>
      <div>{children}</div>
    </>
  );
};
