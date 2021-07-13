import { storiesOf } from '@storybook/react';
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
