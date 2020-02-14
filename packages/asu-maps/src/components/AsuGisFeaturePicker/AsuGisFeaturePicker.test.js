import React from 'react'
import { render} from '@testing-library/react'
import AsuGisFeaturePicker from './AsuGisFeaturePicker'



describe('The AsuGisFeaturePicker', () => {
    it('renders the component', () => {

      const {container} = render(<AsuGisFeaturePicker/>);
            expect(container.firstChild).toMatchSnapshot();
    })
});
