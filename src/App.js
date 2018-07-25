import React, { Component } from 'react';
import './antd.css';
import './App.css';
import RouterContainer from './routes/index';

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
