import React from 'react'
import { render, fireEvent} from '@testing-library/react'
import BsReactCarousel from './BsReactCarousel'



describe('The BsReactCarousel', () => {
    it('renders the component', () => {

      const container = render(<BsReactCarousel  {...{items: [{}]}} />);
            expect(container.firstChild).toMatchSnapshot()
    })
});
