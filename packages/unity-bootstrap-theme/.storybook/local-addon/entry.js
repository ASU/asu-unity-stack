import { withFooter } from './decorators/withFooter';
import { withHeader } from './decorators/withHeader';

export const parameters = {
  header: {
    disable: false
  },
  footer: {
    disable: false
  },
}

export const globals = {
  header: false,
  footer: false
}
export const decorators = [
  withHeader,
  withFooter,
]
