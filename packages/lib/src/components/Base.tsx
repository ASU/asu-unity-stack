import React, { FC, ReactElement } from "react";

export const Base: FC<ReactElement & { children: ReactElement }> = ({children}) => {
  return <>{children}</>;
};
