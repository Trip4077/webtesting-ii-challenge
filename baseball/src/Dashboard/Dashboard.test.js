import React from 'react';

import Dashboard from './Dashboard';

import { render } from '@testing-library/react';
import { fireEvent } from '@testing-library/react/dist';

import 'jest-dom/extend-expect';
import '@testing-library/react/cleanup-after-each';

describe("Dashboard Component", () => {
    it('should render the Dashboard', () => {
        render(<Dashboard />);
    });

    it('shoud have a strike button', () => {
        const { getAllByText } = render(<Dashboard />);

        getAllByText(/strike/i);
    });

    it('should have a ball button', () => {
        const { getAllByText } = render(<Dashboard />);

        getAllByText(/ball/i);
    });

    it('should have a fowl button', () => {
        const { getByText } = render (<Dashboard />);

        getByText(/fowl/i);
    });

    it('should have a hit button', () => {
        const { getByText } = render (<Dashboard />);

        getByText(/hit/i);
    });
});