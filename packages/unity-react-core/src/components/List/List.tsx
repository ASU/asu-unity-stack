import React, { ReactElement } from "react";
import cx from "classnames";
import { ListItem, ListItemProps } from "./ListItem/ListItem";
import { ItemListStyleColor, ListBackgroundColor, ListComponentType, ListElementType } from "./ListConstants";
import { getListItemComponentType } from "./ListUtils";

export interface ListProps {
  listType?: ListComponentType,
  backgroundColor?: ListBackgroundColor,
  listItemStyleColor?: ItemListStyleColor,
  items?: ListItemProps[],
}

export const List: React.FC<ListProps> = ({
  listType = ListComponentType.UNORDERED,
  backgroundColor = ListBackgroundColor.NONE,
  listItemStyleColor = ItemListStyleColor.DEFAULT,
  items,
}) => {

  const Component = getListItemComponentType(listType);
  // light backgrounds - maroon or default (black)
  let primaryColor = "maroon";
  let secondaryColor = "maroon";

  if (backgroundColor === ListBackgroundColor.DARK) {
    // dark backgrounds - gold or default (white)
    primaryColor = "gold";
    secondaryColor = "gold";
  }

  if (listType === ListComponentType.STEP) {
    // Step List
    // light background - maroon, gold or default (black)
    primaryColor = `uds-steplist-maroon`;
    secondaryColor = `uds-steplist-gold`;

    // dark background - gold or default (white)
    if (backgroundColor === ListBackgroundColor.DARK) {
      primaryColor = `uds-steplist-gold`;
    }
  }

  const cn = cx({
    "uds-list": listType === ListComponentType.UNORDERED || listType === ListComponentType.ORDERED,
    "uds-list fa-ul": listType === ListComponentType.ICON,
    "uds-list uds-steplist": listType === ListComponentType.STEP,
    "uds-list uds-display-list": listType === ListComponentType.DISPLAY,

    "light-smokemode": backgroundColor === ListBackgroundColor.LIGHT,
    "smokemode": backgroundColor === ListBackgroundColor.MEDIUM,
    "darkmode": backgroundColor === ListBackgroundColor.DARK,

    [`${primaryColor}`]: listItemStyleColor === ItemListStyleColor.PRIMARY,
    // Intentional space ` ${secondaryColor}` for when primary and secondary colors are the same
    [` ${secondaryColor}`]: listItemStyleColor === ItemListStyleColor.SECONDARY,

  });

  return (
    <Component className={cn ? cn : null}>
      {items.map((item, index) => <ListItem key={index} listType={listType} {...item} />)}
    </Component>
  );
};
