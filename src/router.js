import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import App from './App'
import Home from "./pages/home"
import Admin from './admin'
import Login from './pages/login'
import Buttons from './pages/ui/buttons'
import Modals from './pages/ui/modals'
import FormLogin from './pages/form/login'
import FormRegister from './pages/form/register'
import NoMatch from './pages/no_match'
import BasicTable from './pages/table/basicTable'

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
                  <Route path="/home" component={Home} />
                  <Route path="/ui/buttons" component={Buttons} />
                  <Route path="/ui/modals" component={Modals} />
                  <Route path="/form/login" component={FormLogin} />
                  <Route path="/form/reg" component={FormRegister} />
                  <Route path="/table/basic" component={BasicTable} />
                  <Route component={NoMatch} />
                </Switch>
              </Admin>}>
            </Route>
          </Switch>
        </App>
      </HashRouter>
    )
  }
}