import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AuthContextProvider from './Context/AuthContext';
import {Provider} from 'react-redux'
import {store} from './App/store';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);