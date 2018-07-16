import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Provider from './Provider';
import store from './Store';
import App from './view/App';
import registerServiceWorker from './registerServiceWorker';

// store.subscribe(() => {
//   console.log('store:', store.getState())
// })

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
