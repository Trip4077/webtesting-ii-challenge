import React from 'react';
import ReactDOM from 'react-dom';

import { render } from 'react-testing-library';

import App from './App';

describe('App Component', () => {
  xit('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders without crashing', () => {
    render(<App />)
  })
})
