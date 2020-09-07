import React from 'react';
import {
  HashRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import Alert from 'react-s-alert';
import {
  Nav, About, Login, LogOut,
  Signup, landingPage,
} from './components/index';
// eslint-disable-next-line import/no-named-as-default-member

const App = () => (
  <div>
    <HashRouter>
      <div>
        <Route render={(props) => <Nav props={props} />} />
      </div>
      <div className="container">
        <Switch>
          <Route path="/" component={landingPage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/login" render={(props) => <Login props={props} />} />
          <Route exact path="/logout" render={(props) => <LogOut props={props} />} />
          <Route path="/signup" render={(props) => <Signup props={props} />} />
          <Redirect to="/" />
        </Switch>
      </div>
    </HashRouter>
    <Alert stack={{ limit: 3 }} />
  </div>
);

export default App;
