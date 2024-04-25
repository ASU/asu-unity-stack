import {
  removeFontAwesomeChanges,
  formatWithHtmlParser
} from './helpers.js';

import { withFooter } from './decorators/withFooter.jsx';
import { withHeader } from './decorators/withHeader.jsx';
import { withInitFunc } from './decorators/withInitFunc.jsx';
import { withLoadEvent } from './decorators/withLoadEvent.jsx';

import "../../src/js/data-layer.js";

 const parameters = {
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

 const globals = {
  header: false,
  footer: false
}
 const decorators = [
  withLoadEvent,
  withInitFunc,
  withHeader,
  withFooter,
]

const preview = {
  parameters,
  globals,
  decorators,
};

export default preview;
