import React from 'react'
import { render} from '@testing-library/react'
import BsHeroImage from './BsHeroImage'



describe('The BsHeroImage', () => {
    it('renders the component', () => {

      const container = render(<BsHeroImage  {...{title: 'ASU Home'}} />);
          expect(container.firstChild).toMatchSnapshot();
    })
});
