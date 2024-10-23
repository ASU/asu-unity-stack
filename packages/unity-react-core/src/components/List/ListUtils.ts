import { ListComponentType, ListElementType } from "./ListConstants";

export const getListItemComponentType = (listComponent: ListComponentType | ListElementType) => {

  switch (listComponent) {
    case ListElementType.OL:
    case ListComponentType.ORDERED:
    case ListComponentType.STEP:
      return ListElementType.OL;
    default:
      return ListElementType.UL;
  }
};
