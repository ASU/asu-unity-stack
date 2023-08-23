import React from 'react';

import { useGlobals, useParameter, useArgs } from '@storybook/api';
import { IconButton } from '@storybook/components';

export const Toggle = ({parameter, global, children}) => {
  const [globals, updateGlobals] = useGlobals();
  const [args, updateArgs] = useGlobals();
  const params = useParameter(parameter, {[global]:{ disable: false }});

  if (params[global]?.disable) {
    return null;
  }

  let isActive = globals[global] || false;
  if(typeof args[global] !== "undefined") {
    isActive = args[global];
  }
// console.log(params[global])
  return (
    <IconButton
      key={parameter}
      active={isActive}
      title={`Apply ${global} to the preview`}
      onClick={() =>{
        updateGlobals({
          [global]: !isActive,
        })}
      }
    >
      {children}
    </IconButton>
  );
};
