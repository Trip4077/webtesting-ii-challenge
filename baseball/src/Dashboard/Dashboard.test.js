import React from 'react';

import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import 'jest-dom/extend-expect';

import Dashboard from './Dashboard';
import { fireEvent } from '@testing-library/react/dist';

describe("Dashboard Component", () => {
    it('should render the Dashboard', () => {
        render(<Dashboard />);
    });

    it('shoud have a strike button', () => {
        const { getByText } = render(<Dashboard />);

        getByText(/strike/i);
    });

    it('should have a ball button', () => {
        const { getByText } = render(<Dashboard />);

        getByText(/ball/i);
    });

    it('should have a fowl button', () => {
        const { getByText } = render (<Dashbaord />);

        getByText(/fowl/i);
    });

    it('should have a hit button', () => {
        const { getByText } = render (<Dashbaord />);

        getByText(/hit/i);
    });

    it('should increase Ball Count by 1 when Ball Button fires', () => {
        const { getByText } = render(<Dashboard />);

        const button = getByText(/ball/i);

        fireEvent.click(button);
    });
});