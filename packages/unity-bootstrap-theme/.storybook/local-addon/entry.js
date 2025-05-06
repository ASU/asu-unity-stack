import {
  removeFontAwesomeChanges,
  formatWithHtmlParser
} from './helpers';

import { withFooter } from './decorators/withFooter';
import { withHeader } from './decorators/withHeader';

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
    disable: true
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
  withHeader,
  withFooter,
]
