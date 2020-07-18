import React from 'react';
import {Route, Switch} from "react-router-dom";

import PaymentPage from "./pages/payment/payment";
import CompletedPage from "./pages/completed/completed";

import './App.css';

function App() {
  return (
    <div className="app">
     
      <div className="app__slant"></div>
      <div className="app__container">
     <div className="app__main">
       <Switch>
         <Route exact path="/" component={PaymentPage}/>
         <Route exact path="/completed" component={CompletedPage}/>
       </Switch>
     </div>
     
     </div>
    
      
    </div>
  );
}

export default App;
