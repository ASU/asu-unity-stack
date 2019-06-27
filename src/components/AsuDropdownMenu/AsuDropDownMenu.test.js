import React from 'react'
import { render} from '@testing-library/react'
import ASUDropdownMenu from './AsuDropdownMenu'

describe('<AsuDropdownMenu /> spec', () => {
    it('renders the component', () => {
      const container = render(<ASUDropdownMenu />, {title: 'ASU Home'});
      expect(container.firstChild).toMatchSnapshot()
     })
});