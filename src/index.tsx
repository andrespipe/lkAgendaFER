import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './common/translate/i18n';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import App from './components/App';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

const store = createStore(
  reducers,// All reducers
  {},// Initial state
  applyMiddleware(reduxThunk),
);

ReactDOM.render(
  <Suspense fallback="{<div>Loading</div>}">
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
