import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './store';
import './index.css';
import App from './containers/App';
import 'antd/dist/antd.css';

const store = createStore();
const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);