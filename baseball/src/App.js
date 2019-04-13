import React, { Component } from 'react';

import Dashboard from './Dashboard/Dashboard';
import Display from './Display/Display';

import './App.css';

class App extends Component {
  state = {
    strikes: 0,
    balls: 0
  }

  render() {
    return (
      <div className="App">
        <Dashboard { ...this.state }/>
      </div>
    );
  }
}

export default App;
