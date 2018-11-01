import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import App from './main/app';
import store from './main/redux/store';

ReactDOM.render(
  <Provider store={store()}>
    <Router>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </Provider>, document.getElementById('root')
);
