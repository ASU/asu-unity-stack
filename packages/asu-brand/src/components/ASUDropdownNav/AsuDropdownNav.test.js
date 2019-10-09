import React from './node_modules/react'
import { render, fireEvent} from './node_modules/@testing-library/react'
import ASUDropdownNav from './AsuDropdownNav'



describe('The AsuDropdownMenu', () => {
    it('renders the component', () => {

      const container = render(<ASUDropdownNav  {...{title: 'ASU Home'}} />);
            expect(container.firstChild).toMatchSnapshot()
    })

    it('drops down when button clicked', async () => {

      const titems = [
        {
          value: "Item 0",
          href: 'https://asu.edu'
        },
        {
          value: "Item 1",
          href: "https://asu.edu"
        },
        {
          value: "Item 2",
          href: 'https://asu.edu'
        },
        {
          value: "Item 3",
          href: "https://asu.edu"
        },
        {
          value: "Item 4",
          href: 'https://asu.edu'
        },
        {
          value: "Item 5",
          href: "https://asu.edu"
        },
        {
          value: "Item 6",
          href: 'https://asu.edu'
        },
        {
          value: "Item 7",
          href: "https://asu.edu"
        },
        {
          value: "Item 8",
          href: 'https://asu.edu'
        },
        {
          value: "Item 9",
          href: "https://asu.edu"
        }
      ];

      const { getByText, findAllByText } = render(<ASUDropdownNav {...{title: 'ASU Home', items: titems}} />);
      // Click button
      fireEvent.click(getByText('ASU Home'));

      // Wait for page to update with query text
      const items = await findAllByText(/Item [0-9]/);
      expect(items).toHaveLength(10);
    })
});
