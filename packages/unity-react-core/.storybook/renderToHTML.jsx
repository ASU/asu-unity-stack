
import { decode } from 'html-entities'
import prettier from 'prettier'
import HTMLParser from 'prettier/parser-html'

import { getBootstrapHTML } from '../src/components/GaEventWrapper/useBaseSpecificFramework.js';

export const formatCode = (code) => prettier.format(decode(code,{level:"all"}), {
  parser: 'html',
  plugins: [HTMLParser],
});

export default (_, storyContext = {}) => {

  const { args = {}, component } = storyContext;
  let code = "";
  code = getBootstrapHTML(component(args));
  let result = formatCode(code);
  return result
}
