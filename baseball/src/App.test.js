import React from 'react';
import ReactDOM from 'react-dom';

import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import 'jest-dom/extend-expect';

import App from './App';



xit('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  render(<App />);
});

it('should render a component with a "Dashboard" header', () => {
  const { getByText } = render(<App />);

  const header = getByText(/Dashboard/i);

  expect(header).toBeInTheDocument();
});

