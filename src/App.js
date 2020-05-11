import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import HeaderDiv from './components/header/header.component';

function App() {
  return (
    <div>
      <HeaderDiv />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/shop" component={Shop}></Route>
        <Route exact path="/header" component={Shop}></Route>
      </Switch>
    </div>
  );
}

export default App;
