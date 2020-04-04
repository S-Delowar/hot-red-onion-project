import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import FoodItemDetails from './Components/FoodItemDetails/FoodItemDetails';
import Footer from './Components/Footer/Footer';
import Banner from './Components/Banner/Banner';
import FoodArea from './Components/FoodArea/FoodArea';
import Features from './Components/Features/Features';
import { useState } from 'react';
import Login from './Components/Login/Login';
import { createContext } from 'react';
import { AuthContextProvider, PrivateRoute } from './Components/Login/useAuth';
import Shipment from './Components/Shipment/Shipment';


function App() {
  
  const [cart, setCart] = useState([]);
  const clearCart = () => {
    setCart([])
  }
  const cartHandler = (item) => {
    const alreadyAdded = cart.find(crt => crt.id === item.id);
    const newCart = [...cart, item];
    setCart(newCart);
    if (alreadyAdded) {
      const remainingCart = cart.filter(crt => cart.id != item);

      setCart(remainingCart)
    }
    else {
      const newCart = [...cart, item]
      setCart(newCart);
    }
  }


  return (
    <div>
      <AuthContextProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Header cart={cart}></Header>
              <Banner></Banner>
              <FoodArea></FoodArea>
              <Features></Features>
              <Footer></Footer>
            </Route>
            < Route path="/food/:foodId">
              <Header cart={cart}></Header>
              <FoodItemDetails cart={cart} cartHandler={cartHandler}></FoodItemDetails>
              <Footer></Footer>
            </Route>
            <Route path="/login">
              <Header cart={cart}></Header>
              <Login></Login>
            </Route>
            <PrivateRoute path="/shipment">
              <Shipment></Shipment>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
        </AuthContextProvider>
    </div>
  );
}

export default App;
