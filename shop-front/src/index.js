import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import store from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <div style={{ height: '100%', backgroundColor: "#E6E6E6"}}>
      <App/>
    </div>
  </Provider>,
  document.getElementById('root')
);

