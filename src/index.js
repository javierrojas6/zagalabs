import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import JssProvider from 'react-jss/lib/JssProvider';
import { createGenerateClassName } from '@material-ui/core/styles';

import CreateStore from './Store/Store';
import register from './serviceWorker';

import App from './Components/App';

import './index.sass';

const store = CreateStore();
const generateClassName = createGenerateClassName({
  dangerouslyUseGlobalCSS: true,
  productionPrefix: 'web-extractor-',
});

ReactDOM.render(
  <JssProvider generateClassName={generateClassName}>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route component={App} />
        </Switch>
      </Router>
    </Provider>
  </JssProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
register();