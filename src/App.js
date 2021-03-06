import React from 'react';
import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";




function App() {

 


  return (
    //BEM
    <Router>
       <div className="app">
       
       
       <Switch>
       <Route path="/login">
       <Login/>
       </Route>
       
       
       <Route path="/checkout">
       <Header/>
       <Checkout/>
       </Route>


        <Route path="/">
        <Header/>
         <Home/>
        </Route>
        
         
       </Switch>
       </div>
    </Router>
  );
}

export default App;
