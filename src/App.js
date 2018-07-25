import React, { Component } from 'react';
import RouterContainer from './routes';
import './App.css';
import "./modules/api"

class App extends Component {
  render() {
    return (
      <div className="App">
        <RouterContainer />
      </div>
    );
  }
}

export default App;
