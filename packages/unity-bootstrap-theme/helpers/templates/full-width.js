import React from "react";

export default content => {
  return (
    <div>
      {/* Storybook Bug, all options must have equal depth when using controls to switch */}
      <div class="row g-0">
        <div id="html-root" class="col uds-full-width">
          {/* Component start */}
          {content}
          {/* Component end */}
        </div>
      </div>
    </div>
  );
};
