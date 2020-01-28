import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/store';
import App from './components/App';

store.subscribe(() => {
  // eslint-disable-next-line no-console
  console.log('Store update:', store.getState());
});

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
