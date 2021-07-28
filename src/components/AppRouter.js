import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { MAIN } from '../utils/consts'
import { publicRoutes } from './routes'

const AppRouter = () => {

  return(
      <Switch>
        {publicRoutes.map(({ path, Component }) =>
          <Route key={path} path={path} component={Component} exact={true} />
        )}
        <Redirect to={MAIN} />
      </Switch>
    )
}

export default AppRouter
