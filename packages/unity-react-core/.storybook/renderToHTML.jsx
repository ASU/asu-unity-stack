
import { getBootstrapHTML } from '../src/components/GaEventWrapper/useBaseSpecificFramework.js';
import { formatCode } from './formatCode.js';

export { formatCode };

export default (_, storyContext = {}) => {

  const { args = {}, component } = storyContext;
  let code = "";
  code = getBootstrapHTML(component(args));
  let result = formatCode(code);
  return result
}
