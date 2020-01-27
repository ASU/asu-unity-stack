import React from 'react'
import { render} from '@testing-library/react'
import {AsuHeroImage} from './AsuHeroImage'

describe('The AsuHeroImage', () => {
    it('renders the component', () => {
      const container = render(<AsuHeroImage {...{title: 'ASU Home'}} />);
          expect(container.firstChild).toMatchSnapshot();
    })
});
