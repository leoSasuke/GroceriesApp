import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RecipesProvider from './provider/RecipesProvider';

import Fruits from "./pages/Fruits";
import Meats from "./pages/Meats";
import Drinks from "./pages/Drinks";
import Snacks from "./pages/Snacks";
import Dairy from "./pages/Dairy";

import './App.css';

function App() {
  
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <RecipesProvider>
        <Route exact path="/" component={ Fruits }/>
        <Route exact path="/meats" component={ Meats }/>
        <Route exact path="/drinks" component={ Drinks }/>
        <Route exact path="/dairy" component={ Dairy }/>
        <Route exact path="/snacks" component={ Snacks }/>
      </RecipesProvider>
    </Switch>
  </BrowserRouter>
  );
}

export default App;
