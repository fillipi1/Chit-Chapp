import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch, BrowserRouter } from 'react-router-dom';
import App from './main/app';
import store from './main/redux/store';
import dashBoard from './main/dashBoard';

ReactDOM.render(
  <Provider store={store()}>
    <Router>
    <div>
      <Switch>
      <Route path="/store" component={dashBoard} />
        <Route path="/" component={App} />
      </Switch>
    </div>
    </Router>
  </Provider>, document.getElementById('root')
);
