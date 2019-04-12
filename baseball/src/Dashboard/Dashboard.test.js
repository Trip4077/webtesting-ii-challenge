import React from 'react';

import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Dashboard from './Dashboard';

describe('Dashboard Component', () => {
    it('should render the Dashboard', () => {
        render(<Dashboard />);
    })

    it('should have a strike button', () => {
        const { getByText } = render(<Dashboard />);

        getByText(/strike/i)
    });

    it('should have a ball button', () => {
        const { getByText } = render(<Dashboard />);

        getByText(/ball/i);
    });

    it('should have a fowl button', () => {
        const { getByText } = render(<Dashboard />);

        getByText(/fowl/i);
    })

    it('should have a hit button', () => {
        const { getByText } = render(<Dashboard />);

        getByText(/hit/i);
    })
})