import React, { Component } from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import App from './App'
import Admin from './admin'
import Login from './pages/login'
import Buttons from './pages/ui/buttons/buttons'
import NoMatch from './pages/no_match'

export default class Router extends Component {

  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
              <Route path="/login" component={Login} />
              <Route path="/" render={() =>
                <Admin>
                  <Switch>
                    <Route path="/ui/buttons" component={Buttons} />
                    <Route component={NoMatch} />
                  </Switch>
                </Admin>} />
          </Switch>
        </App>
      </HashRouter>
    )
  }
}