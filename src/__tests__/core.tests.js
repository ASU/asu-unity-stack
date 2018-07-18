import React from 'react';
import { create as renderer } from 'react-test-renderer';
import createContext from 'react-cosmos-test/generic';
import fixture from '../__fixtures__/core.fixtures';



for (let i = 0; i < fixture.length; i++) {

    const { mount, getWrapper } = createContext({
        renderer,
        fixture: fixture[i]
    });

    beforeEach(mount);

    test('matches snapshot', () => {
        // Careful, this is no longer an Enzyme wrapper, but a react-test-renderer wrapper!
        expect(getWrapper().toJSON()).toMatchSnapshot();
    });
}


