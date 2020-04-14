import React from 'react';
import './FoodItem.css';
import { Link } from 'react-router-dom';

const FoodItem = (props) => {
    const { id, name, shortDescription, price, images } = props.food;

    return (
        <div className="col-md-4 mb-4">
           
                <Link to={"/food/"+id} className=" text-decoration-none text-dark" >
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