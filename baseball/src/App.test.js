import React from 'react';
import ReactDOM from 'react-dom';

import { render } from 'react-testing-library';
import 'jest-dom/extend-expect'

import App from './App';

describe('App Component', () => {
  xit('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders without crashing', () => {
    render(<App />)
  });

  it('should render a component with a "Dashboard" header', () => {
    const { queryByText } = render(<App />);
    const header = queryByText(/dashboard/i);

    expect(header).toBeInTheDocument();
  });
});
