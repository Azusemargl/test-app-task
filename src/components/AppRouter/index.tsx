import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { privateRouter, publicRouter, RouteNames } from '../../router'

const AppRouter: React.FC = () => {
   const auth = false

   return (
      <>
         {auth ? (
            <Switch>
               {privateRouter.map(route => (
                  <Route path={route.path} exact={route.exact} component={route.component} key={route.path} />
               ))}
               <Redirect to={RouteNames.HOME} />
            </Switch>
         ) : (
            <Switch>
               {publicRouter.map(route => (
                  <Route path={route.path} exact={route.exact} component={route.component} key={route.path} />
               ))}
               <Redirect to={RouteNames.LOGIN} />
            </Switch>
         )}
      </>
   )
}

export default AppRouter