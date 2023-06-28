import fullWidth from './full-width';
import oneColumn from './1-column';
import twoColumn from './2-column';
import threeColumn from './3-column';
import fourColumn from './4-column';

const template = (content, columns) =>{
  if(columns === 0) {
    return fullWidth(content);
  } else if(columns === 1) {
    return oneColumn(content);
  } else if(columns === 2) {
    return twoColumn(content);
  } else if(columns === 3) {
    return threeColumn(content);
  } else if(columns === 4) {
    return fourColumn(content);
  } else {
    return content;
  }
}

export {
  fullWidth,
  oneColumn,
  twoColumn,
  threeColumn,
  fourColumn,
  template
}
