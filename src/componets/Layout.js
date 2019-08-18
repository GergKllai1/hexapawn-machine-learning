import React from 'react'
import { Route, Switch, BrowserRouter} from 'react-router-dom';

import Board from '../containers/Board/Board';
import HomeScreen from './HomeScreen/HomeScreen';

const Layout = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomeScreen} />
        <Route path='/board' component={Board}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Layout
