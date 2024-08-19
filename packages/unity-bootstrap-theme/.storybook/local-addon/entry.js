import {
  removeFontAwesomeChanges,
  formatWithHtmlParser
} from './helpers';

import { withFooter } from './decorators/withFooter';
import { withHeader } from './decorators/withHeader';
import { withInitFunc } from './decorators/withInitFunc';
import { withLoadEvent } from './decorators/withLoadEvent';

import "../../src/js/data-layer.js";

export const parameters = {
  header: {
    disable: false
  },
  footer: {
    disable: false
  },
  loadEvent: {
    disable: false
  },
  initFunc: {
    disable: true,
    code: null
  },
  docs:{
    source: {
      transform: (src,storyContext)=>{
        let code = `${(document?.getElementById(`story--${storyContext.id}`)?.innerHTML || "")}`;
        return formatWithHtmlParser(removeFontAwesomeChanges(code));
      },
      type:"auto"
    }
  }
}

export const globals = {
  header: false,
  footer: false
}
export const decorators = [
  withLoadEvent,
  withInitFunc,
  withHeader,
  withFooter,
]
