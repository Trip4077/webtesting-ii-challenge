import React, { Component } from 'react';

import Dashboard from './Dashboard/Dashboard';
import Display from './Display/Display';

import './App.css';

class App extends Component {
  state = {
    balls: 0,
    strikes: 0
  }

  render() {
    return (
      <div className="App">
        <Display balls={this.state.balls}/>
        <Dashboard />
      </div>
    );
  }
}

export default App;
