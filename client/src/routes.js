import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from '../src/componentes/navbar/Navbar'
import Card from '../src/componentes/card/Card'

const Routes = () => (
  <BrowserRouter>
    <Switch>
    <Navbar />
      <Route path="/" component={Card}/>
    </Switch>
  </BrowserRouter>
)

export default Routes