import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import FoodItemDetails from './Components/FoodItemDetails/FoodItemDetails';



function App() {
  return (
    <div>
     <Header></Header>
     
     <Router>
       <Switch>
         <Route path="/home">
            <Home></Home>
         </Route>
         <Route exact path="/">
              <Home></Home>
         </Route>
         <Route path="/food/:foodId">
            <FoodItemDetails></FoodItemDetails>
         </Route>
         <Route path="*">
           <NotFound></NotFound>
         </Route>
       </Switch>
     </Router>
     
    </div>
  );
}

export default App;
