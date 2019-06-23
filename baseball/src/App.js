import React from 'react';

import Dashboard from './Dashboard/Dashboard';

import './App.css';

class App extends React.Component {
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