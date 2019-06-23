import React from 'react';

import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import 'jest-dom/extend-expect';

import Display from './Display';
import { fireEvent } from '@testing-library/react/dist';

describe("Display Component", () => {
    it('should render the Ball Count Box for current batter', () =>{
        const { getByText } = render(<Display />);

        getByText(/balls:/i);
    });

    it('should render the Strike Count Box for current batter', () =>{
        const { getByText } = render(<Display />);

        getByText(/strikes:/i);
    });
});