import React from 'react';

import { useGlobals, useParameter } from '@storybook/manager-api';
import { IconButton } from '@storybook/components';

export const Toggle = ({global: globalKey, children}) => {
  const [globals, updateGlobals] = useGlobals();
  const params = useParameter(globalKey);

  if (params?.disable) {
    return null;
  }

  let isActive = globals[globalKey] || false;

  return (
    <IconButton
      key={globalKey}
      active={isActive}
      title={`Apply ${globalKey} to the preview`}
      onClick={() =>{
        updateGlobals({
          [globalKey]: !isActive,
        })}
      }
    >
      {children}
    </IconButton>
  );
};
