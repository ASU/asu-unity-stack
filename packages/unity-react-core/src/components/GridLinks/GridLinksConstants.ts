export enum GridLinksNumColumnsType {
  TWO_COLUMNS = "two-columns",
  THREE_COLUMNS = "three-columns",
  FOUR_COLUMNS = "four-columns",
}

export enum GridLinksTextColorType {
  NONE = "none",
  TEXT_GOLD = "gold",
  TEXT_WHITE = "white",
}

export const GridLinksTextColorClassName = {
  [GridLinksTextColorType.NONE]: "",
  [GridLinksTextColorType.TEXT_GOLD]: "text-gold",
  [GridLinksTextColorType.TEXT_WHITE]: "text-white",
};

export enum GridLinksBgColorType {
  NONE = "none",
  BG_GRAY_1 = "gray 1",
  BG_GRAY_7 = "gray 7",
}

export const GridLinksBgColorClassName = {
  [GridLinksBgColorType.NONE]: "",
  [GridLinksBgColorType.BG_GRAY_1]: "bg-gray-1",
  [GridLinksBgColorType.BG_GRAY_7]: "bg-gray-7",
};
