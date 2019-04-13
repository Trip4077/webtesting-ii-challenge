import React from 'react';

import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Display from './Display';

describe('Display Component', () => {
    it('should render the Ball Count Box for the player at bat', () => {
        const { getByText } = render(<Display />);

        getByText(/balls:/i);

        cleanup();
    });

    it('should render the Strike Count Box for the player at bat', () => {
        const { getByText } = render(<Display />);

        getByText(/strikes:/i);

        cleanup();
    });

    it('should display the ball count for the player at bat', () => {
        const { getByTestId } = render(<Display balls={2} />);

        const balls = getByTestId('balls').textContent;

        expect(balls).toEqual('2');

        cleanup();
    });

    it('should display the strike count for the player at bat', () => {
        const { getByTestId } = render(<Display strikes={0} />);

        const strikes = getByTestId('strikes').textContent;

        expect(strikes).toEqual('0');
    });
});