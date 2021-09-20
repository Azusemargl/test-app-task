import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { privateRouter, publicRouter, RouteNames } from './router'
import './App.scss'

const App = () => {
  const auth = false

  return (
    <Provider store={store}>
      <BrowserRouter>
        {auth ? (
          <Switch>
            {privateRouter.map(route => (
              <Route path={route.path} exact={route.exact} component={route.component} />
            ))}
           <Redirect to={RouteNames.HOME} />
          </Switch>
        ) : (
          <Switch>
            {publicRouter.map(route => (
              <Route path={route.path} exact={route.exact} component={route.component} />
            ))}
            <Redirect to={RouteNames.LOGIN} />
          </Switch>
        )}
      </BrowserRouter>
    </Provider>
  )
}

export default App