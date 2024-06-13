import React from "react";

import { RfiRadioGroup } from "../../controls";

export const MilitaryStatus = () => {
  return (
    <RfiRadioGroup
      label="Have you served in the U.S. Military or are you a military dependent?"
      id="MilitaryStatus"
      name="MilitaryStatus"
      options={[
        { key: "0", text: "Yes", value: "Yes" },
        { key: "1", text: "No", value: "No" },
      ]}
    />
  );
};
