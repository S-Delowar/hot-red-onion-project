import React from 'react';
import './Banner.css';
import { Jumbotron, Form, FormControl, Button } from 'react-bootstrap';
import FoodArea from '../FoodArea/FoodArea';
import Features from '../Features/Features';
import Footer from '../Footer/Footer';
import { useState } from 'react';
import { useEffect } from 'react';
import AllFoods from '../Data/foods.json';
import { Link } from 'react-router-dom';


const Banner = () => {
    const [searchQuery , setSearchQuery] = useState(null)
    const getQuery = e => setSearchQuery(e.target.value);

    return (
        <div className="home">
           
            <Jumbotron>
                <div className="banner">
                <h1>Best Food Waiting for your Belly</h1>
                <Form inline>
                    <FormControl type="text" onChange={getQuery} placeholder="Search Food Item" className=" mr-sm-2 " style={{width:'500px'}}/>
                    <Link to={"/search="+searchQuery}>
                        <button onClick={() => window.scrollBy(0, 500)} className="btn btn-danger search-btn btn-rounded">Search</button>
                    </Link>
                    
                </Form>
                </div>
            </Jumbotron>
            
        </div>

    );
};

export default Banner;