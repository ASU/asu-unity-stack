import * as _images from "./img/list";
export { imageName } from "./img/named";

export const imageArray = Object.values(_images);
export const imageAny = () =>
  imageArray[Math.floor(Math.random() * imageArray.length)];
