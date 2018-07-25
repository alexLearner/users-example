import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './App';
import configureStore from "./store/configureStore";
import localStore from "./modules/localStore";
import './index.css';

const initialState = {};
const store = configureStore(initialState);

let currentValue;
store.subscribe(() => {
  let prevValue = currentValue;

  currentValue = store.getState().users.data;

  if (prevValue !== currentValue) {
    localStore.set("users", currentValue)
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
