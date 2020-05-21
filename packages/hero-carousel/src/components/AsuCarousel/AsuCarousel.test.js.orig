import React from 'react'
import { render} from '@testing-library/react'
import AsuCarousel from './AsuCarousel'



describe('The AsuCarousel', () => {
    it('renders the component', () => {

      const {container} = render(<AsuCarousel  {...{items: [{title: "test"}]}} />);
            expect(container.firstChild).toMatchSnapshot()
    })
});
