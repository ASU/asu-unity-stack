import React from 'react';

export default (content) => {
  return (
    <div>
      {' '}
      {/* Storybook Bug, all options must have equal depth when using controls to switch */}
      <div className="row no-gutters">
        <div className="col uds-full-width">
          {/* Component start */}
          {content}
          {/* Component end */}
        </div>
      </div>
    </div>
  );
};
