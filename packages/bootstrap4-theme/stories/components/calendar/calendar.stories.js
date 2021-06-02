import { storiesOf } from '@storybook/html';
import './calendar';

storiesOf('Components/Calendar', module)
  .addParameters({
    happo: false,
  })

  .add(
    'Calendar',
    () => `
      <div id="calendar"></div>`
  );
