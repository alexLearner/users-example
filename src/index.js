import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import configureStore from "./store/configureStore";
import localStore from "./modules/localStore";

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
