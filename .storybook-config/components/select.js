// import { useGlobals, useParameter, useArgs } from '@storybook/api';
// import React from 'react';
// import {Item} from './item';


// export const Select = ({parameter, global}) => {
//   const [globals, updateGlobals] = useGlobals();
//   // const [args, updateArgs] = useArgs();
//   const params = useParameter(parameter, { [global]: {disable: false, values: []}});
//   if (params[global]?.disable) {
//     return null;
//   }
//   const param = params[global];

//   // console.log(param, globals)
//   let values = param.values;
//   if(Array.isArray(param.include)){
//     values = param.include.map(v=>values.find(({value})=>value==v))
//   }


//   const getActiveValue = (key) => values.find(({value})=>value==key);
//   const globalValue = globals[global];
//   let activeValue = getActiveValue(globalValue) ||
//     getActiveValue(param.defaultValue) ||
//     getActiveValue(values?.[0]?.value) ||
//     {
//       value: param.defaultValue
//     };

//   // active = values
//   // if(typeof args[global] !== "undefined") {
//   //   active = args[global];
//   // }
//   const updateTemplate = React.useCallback(val => {
//     updateGlobals({ [global]: val });
//   }, [options, globals, updateGlobals, values]);

//   const defaultLabel = `${global} select`;


//   /**
//    * Generate the contents for the links.
//    *
//    * @returns {Array} The available templates.
//    * @private
//    */
//   function options() {
//     const result = values.map(({value, ...item}) => ({
//       ...item,
//       key: value,
//       value,
//       active: activeValue.value == value,
//       onClick: () => updateTemplate(value),
//     }));

//     return result
//   }
//   if(typeof activeValue?.value !=="undefined" && activeValue?.value != globalValue){
//     updateGlobals({ [global]: activeValue.value });
//   }

//   return (
//   <>
//     {values?.length > 0 && <Item name={activeValue?.title || defaultLabel} links={ options } active={!!activeValue}/>}
//   </>
//   );
// }
