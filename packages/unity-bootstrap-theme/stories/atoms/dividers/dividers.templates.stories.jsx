import React from "react";

import { defaultDecorator } from "../../../../../shared/components/Layout";

export default {
  title: "Atoms/Dividers/Templates",
  decorators: [ defaultDecorator ],
  parameters: { controls: { disable: true } },
};

export const Divider = () => <hr className="copy-divider" />;
