import React from 'react';
import { Provider } from 'react-redux';

import Routes from '@/router';

import createStore from '@/store';

const store = createStore();

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
