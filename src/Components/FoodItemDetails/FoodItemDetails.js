import React from 'react';
import './FoodItemDetails.css';
import { useParams } from 'react-router-dom';

const FoodItemDetails = () => {
    const {foodId} = useParams();

    return (
        <div className="container foodItemDetails">
            <h1>Food item details section</h1>
        </div>
    );
};

export default FoodItemDetails;