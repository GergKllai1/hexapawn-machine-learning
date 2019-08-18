import React from "react";
import { Route, Switch } from "react-router-dom";

import Board from "../containers/Board/Board";
import HomeScreen from "./HomeScreen/HomeScreen";
import NewGame from "./HomeScreen/NewGame/NewGame";
import LoadGame from "./HomeScreen/LoadGame/LoadGame";
import Header from "./Header/Header";

import './Layout.css'

const Layout = () => {
  return (
    <div className='layout'>
      <Header />
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route path="/board/:id" component={Board} />
        <Route path="/new-game" component={NewGame} />
        <Route path="/load-game" component={LoadGame} />
      </Switch>
    </div>
  );
};

export default Layout;
