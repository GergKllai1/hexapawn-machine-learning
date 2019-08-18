import React from 'react'
import { Route, Switch, BrowserRouter} from 'react-router-dom';

import Board from '../containers/Board/Board';
import HomeScreen from './HomeScreen/HomeScreen';
import NewGame from './HomeScreen/NewGame/NewGame';

const Layout = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomeScreen} />
        <Route path='/board' component={Board}/>
        <Route path='/new-game' component={NewGame} />
      </Switch>
    </BrowserRouter>
  )
}

export default Layout
