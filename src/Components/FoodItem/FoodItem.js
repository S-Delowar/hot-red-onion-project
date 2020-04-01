import React from 'react';
import './FoodItem.css';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FoodItem = (props) => {
    const { id, name, shortDescription, price, images } = props.food;

    const cardStyle = {
        
    
    }
    const cardFooterStyle ={
        border: 'none',
        backgroundColor: 'white'
    }
    const cardImageStyle ={
        width: "60%",
        height: "60%",
    display: "block",
    paddingTop: "10px",
    margin: "0 auto"
    }

    return (
        <div className="col-md-4 mb-4">
           
                <Link to={"/food/"+id} >
                <div className="card text-center">
                    <img src={images[0]} alt="" className="card-img"/>
                    <div className="card-body">
                        <h5>{name}</h5>
                        <p>{shortDescription}</p>
                        <h4>${price}</h4>
                    </div>
                </div>
                </Link>
            
        </div>
    );
};

export default FoodItem;