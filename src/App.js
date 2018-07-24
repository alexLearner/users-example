import React, { Component } from 'react';
import Button from 'antd/lib/button';
import 'antd/lib/button/style/index.css';
import logo from './logo.svg';
import RouteConfigExample from './routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RouteConfigExample />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Button size="large">Test antd</Button>
      </div>
    );
  }
}

export default App;
