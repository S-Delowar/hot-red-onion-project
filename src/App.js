import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Features from './Components/Features/Features';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div>
     <Header></Header>
     <Home></Home>
     <Features></Features>
     <Footer></Footer>
    </div>
  );
}

export default App;
