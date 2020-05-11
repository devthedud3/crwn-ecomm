import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage}></Route>
      <Route exact path="/shop" component={Shop}></Route>
    </div>
  );
}

export default App;
