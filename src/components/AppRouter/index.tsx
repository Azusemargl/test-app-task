import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { privateRouter, publicRouter, RouteNames } from '../../router'

const AppRouter: React.FC = () => {
   const auth = useTypedSelector(state => state.authReducer.isAuth)

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