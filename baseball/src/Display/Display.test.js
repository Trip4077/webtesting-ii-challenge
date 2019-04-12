import React from 'react';

import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Display from './Display';

describe('Display Component', () => {
    it('should render Ball Count Box', () => {
        const { getByText } = render(<Display />);
        
        getByText(/balls:/i);
    })

    xit('should render the number of balls for the player at bat', () => {

    });
});