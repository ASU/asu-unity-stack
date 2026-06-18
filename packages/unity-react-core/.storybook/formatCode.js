import { decode } from 'html-entities'
import prettier from 'prettier'
import HTMLParser from 'prettier/parser-html'

export const formatCode = (code) => prettier.format(decode(code, { level: "all" }), {
  parser: 'html',
  plugins: [HTMLParser],
});
