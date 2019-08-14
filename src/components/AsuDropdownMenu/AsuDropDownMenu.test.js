import React from 'react'
import { render, fireEvent} from '@testing-library/react'
import ASUDropdownMenu from './AsuDropdownMenu'

describe('The AsuDropdownMenu', () => {
    it('renders the component', () => {
      const container = render(<ASUDropdownMenu  {...{title: 'ASU Home'}} />);
            expect(container.firstChild).toMatchSnapshot()
    })

    it('drops down when button clicked', async () => {
      const { getByText, findByText } = render(<ASUDropdownMenu {...{title: 'ASU Home'}} />);
      // Click button
      fireEvent.click(getByText('ASU Home'));

      // Wait for page to update with query text
      const items = await findByText(/Item #[0-9]: /);
      expect(items).toHaveLength(10);
    })
});
