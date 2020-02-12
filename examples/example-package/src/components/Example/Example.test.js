import React from 'react'
import { render} from '@testing-library/react'
import Example from './Example'



describe('The Example', () => {
    it('renders the component', () => {

      const container = render(<Example  {...{items: [{title: "test"}]}} />);
            expect(container.firstChild).toMatchSnapshot()
    })
});
