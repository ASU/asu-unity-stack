import React, { ReactNode } from "react";
import { ItemListStyleColor, ListComponentType, ListElementType } from "../ListConstants";
import { getListItemComponentType } from "../ListUtils";

export interface ListItemProps {
  listType?: ListComponentType | ListElementType,
  /**
   * Content
   */
  content: ReactNode | ReactNode[],
  icon?: [string, string],
  listItemStyleColor?: ItemListStyleColor,
  nestedType?: ListElementType,
  nestedItems?: ListItemProps[],
}

export const ListItem: React.FC<ListItemProps> = ({
  listType,
  content,
  icon,
  nestedType,
  nestedItems,
}) => {
  const [title, ...moreContent] = (Array.isArray(content)) ? content : [content];
  let nestedList = null;

  if (nestedItems?.length) {
    const type = nestedType || listType;
    const Component = getListItemComponentType(type);
    nestedList = (
      <Component>
        {nestedItems.map((item, index) => <ListItem key={index} listType={type} {...item} />)}
      </Component>)
  }
  return (
    <li>
      {icon && (<span className={`fa-li ${icon?.[0]} fa-${icon?.[1]}`}></span>)}
      {title}{" "}
      {moreContent.map((spanContent, i)=>([<br key={`br-${i}`} />, <span key={i}>{spanContent}</span>]))}
      {nestedList}
    </li>
  );
};
