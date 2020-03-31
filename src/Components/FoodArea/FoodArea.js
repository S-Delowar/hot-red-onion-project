import React from 'react';
import './FoodArea.css';
import { Nav, Container, CardDeck } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';
import AllFoods from '../Data/foods.json';
import FoodItem from '../FoodItem/FoodItem';

const FoodArea = () => {

    const [foods, setFoods] = useState([]);
    const [selectedFoodType, setSelectedFoodType] = useState('Breakfast');
    useEffect(() => {
        setFoods(AllFoods);
    }, [])
    const selectedFoods = foods.filter(food => food.type === selectedFoodType)

    return (
        <div className="container food-area my-5">
            <nav>
                <ul className="nav justify-content-center" >
                    <li onClick={()=> setSelectedFoodType("Breakfast")} className="nav-link">
                        <span to="breakfast" className={selectedFoodType === "Breakfast" ? "active nav-link" : "nav-link"}>Breakfast</span>
                    </li>
                    <li onClick={()=> setSelectedFoodType("Lunch")} className="nav-link">
                        <span to="breakfast" className={selectedFoodType === "Lunch" ? "active nav-link" : "nav-link"}>Lunch</span>
                    </li>
                    <li onClick={()=> setSelectedFoodType("Dinner")} className="nav-link">
                        <span to="breakfast" className={selectedFoodType === "Dinner" ? "active nav-link" : "nav-link"}>Dinner</span>
                    </li>
                </ul>
            </nav>

            <div className="row my-5">
                {
                    selectedFoods.map(food => <FoodItem key={food.id} food={food}></FoodItem>)
                }
            </div>
            <div className="text-center mt-3 ">
                <button className="btn btn-danger btn-secondary">Check Out Your Food</button>
            </div>
        </div>
    );
};

export default FoodArea;