import React from 'react';
import './Home.css';
import { Jumbotron, Form, FormControl, Button } from 'react-bootstrap';
import FoodArea from '../FoodArea/FoodArea';

const Home = () => {
    return (
        <div className="home">
           
            <Jumbotron>
                <div className="banner">
                <h1>Best Food Waiting for your Belly</h1>
                <Form inline>
                    <FormControl type="text" placeholder="Search Food Item" className=" mr-sm-2 " style={{width:'500px'}} />
                    <Button className="btn btn-danger" type="submit">Search</Button>
                </Form>
                </div>
            </Jumbotron>
            <FoodArea></FoodArea>
        </div>

    );
};

export default Home;