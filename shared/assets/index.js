import * as _images from "./img";

export const imageArray = Object.values(_images).reduce((result,val)=>([...result,val.default]),[]);
export const imageObject = Object.entries(_images).reduce((result,[key,val])=>({...result,[key]: val.default}),{});
