import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx';

const Hats = () => (
  <div>
    <h1>Hats</h1>
  </div>
);

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage}></Route>
      <Route exact path="/hats" component={Hats}></Route>
    </div>
  );
}

export default App;
