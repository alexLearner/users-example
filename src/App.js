import React, { Component } from 'react';
import RouterContainer from './routes/index';
import './App.css';
import './antd.css';
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
