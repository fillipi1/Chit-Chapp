import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import store from './main/redux/store';
import Conference from './main/conferenceCall';
import ContactCenter from './main/components/contactCenter';

ReactDOM.render(
  <Provider store={store()}>
    <Router>
    <div>
      <Switch>
        <Route path="/graphs" component={Conference} />
        <Route path="/" component={ContactCenter} />
      </Switch>
    </div>
    </Router>
  </Provider>, document.getElementById('root')
);
