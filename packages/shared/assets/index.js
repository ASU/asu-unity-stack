import * as _images from "./img/list";
export { imageName } from "./img/named";

const _imageArray = Object.values(_images).reduce((result,val)=>([...result,val.default]),[]);

export const imageArray = [ ..._imageArray, ..._imageArray, ..._imageArray, ..._imageArray, ..._imageArray ]; // make it bigger
export const imageAny = () => imageArray[Math.floor(Math.random() * imageArray.length)]
