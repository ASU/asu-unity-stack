import React, { ReactElement } from "react";

export enum DividerType {
  COPY = "copy",
}
export interface DividerProps {
  type?: "default" | "copy";
}

export const Divider: React.FC<DividerProps> = ({type}) => {
  if (type == DividerType.COPY) {
    return <hr className="copy-divider" />;
  }
  return <hr />;
};
