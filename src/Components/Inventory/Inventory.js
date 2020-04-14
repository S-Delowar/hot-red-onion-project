import React from 'react';
import './Inventory.css';
import fakeData from '../Data/foods.json';
import AllFeatures from '../Data/features.json';

const Inventory = () => {

    const handleAddFood =() => {
        const product = fakeData[0];
        console.log(product)
        fetch('http://localhost:3000/addFood', {
            method: "POST",
            body: JSON.stringify(fakeData),
            headers: {
                'Content-Type': 'application/json'
              }
        })
        .then(res => res.json())
        .then(data => {
            console.log('Post successful')
        })
    }

    const handleAddFeature = ()=> {
            fetch('http://localhost:3000/addFeature', {
            method: 'POST',
            body: JSON.stringify(AllFeatures),
            headers: {
                'Content-Type': 'application/json'
              }
        })
        .then(res => res.json())
        .then(data => {
            console.log('Features added successfully', data)
        })
    }

    return (
        <div className="container inventory-section">
            <h2>Add Foods to sell more..</h2>
            <button className="btn btn-primary mr-4" onClick={handleAddFood}>Add Food</button>
            <button className="btn btn-success" onClick={handleAddFeature}>Add Feature</button>

            
            
        </div>
    );
};

export default Inventory;