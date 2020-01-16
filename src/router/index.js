import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '@/pages/home'

const BasicRoute = () => (
  <Switch>
    <Route path="/" exact component={Home} />
  </Switch>
)

export default BasicRoute
