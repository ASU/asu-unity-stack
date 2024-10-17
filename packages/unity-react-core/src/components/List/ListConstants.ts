export enum ListComponentType {
  UNORDERED = "unordered",
  ORDERED = "ordered",
  ICON = "icon",
  STEP = "step",
  DISPLAY = "display",
};

export enum ListElementType {
  UL = "ul",
  OL = "ol",
};

export enum ListBackgroundColor {
  NONE = "none",
  LIGHT = "light",
  MEDIUM = "medium",
  DARK = "dark",
};

export const ListComponentColorClassName = {
  [ListBackgroundColor.NONE]: "",
  [ListBackgroundColor.LIGHT]: "light-smokemode",
  [ListBackgroundColor.MEDIUM]: "smokemode",
  [ListBackgroundColor.DARK]: "darkmode",
};

export enum ItemListStyleColor {
  DEFAULT = "default",
  PRIMARY = "primary",
  SECONDARY = "secondary",
};
