import React from 'react';
import ReactDOM from 'react-dom';
import '@babel/polyfill';

import App from './views/application';
import './styles/index.scss';

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('app'));
};

renderApp();
