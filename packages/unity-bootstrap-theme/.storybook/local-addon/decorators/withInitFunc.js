import React from 'react';

import { makeDecorator } from '@storybook/addons';

export const withInitFunc = makeDecorator({
  name: 'withInitFunc',
  parameterName: 'initFunc',
  skipIfNoParametersOrOptions: true,
  wrapper: (storyFn, context) => {
    React.useEffect(()=>{
      const initFunc = context?.parameters?.initFunc?.code;
      if (typeof initFunc === "function") {
        initFunc()
      }
    },[])
    return storyFn(context);
  }
});
