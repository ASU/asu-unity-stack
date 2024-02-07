
import prettier from "prettier";
import BabelParser from 'prettier/parser-babel';
import HTMLParser from 'prettier/parser-html'

export const removeFontAwesomeChanges = (code) => {
  code = code.replace(/<svg.*?<\/svg>/gi, "");
  code = code.replace(/(<!--\s)(<span.*?class=.*?fa-.*?><\/span>)(\s-->)/gi, "$2");
  code = code.replace(/(<!--\s)(<i.*?class=.*?fa-.*?><\/i>)(\s-->)/gi, "$2");
  code = code.replace(/(<!--\s)(.+?)(\sFont\sAwesome\sfontawesome.com\s-->)/gi, "$2");
  return code;
}

export const formatWithHtmlParser = (code) => {
  return prettier.format(code,
  {
    parser: 'html',
    plugins: [HTMLParser],
  });
}
export const formatWithBabelParser = (code) => {
  return prettier.format(code,
  {
    parser: 'babel',
    plugins: [BabelParser],
  });
}
