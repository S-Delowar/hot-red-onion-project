import React from 'react';
import './FoodItemDetails.css';
import { useParams } from 'react-router-dom';
import AllFoods from '../Data/foods.json';
import { useState } from 'react';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import Footer from '../Footer/Footer';
import Count from '../Count/Count';

const FoodItemDetails = () => {
    const { foodId } = useParams();

    const currentFood = AllFoods.find(fd => fd.id == foodId);
    console.log(currentFood);
    const { id, name, images, price, fullDescription } = currentFood;

    const [selectedBigImg, setSelectedBigImg] = useState(images[0]);

    return (
        <div>
            <div className="container foodItemDetails d-flex">
                <div className="row"><div className="col-6">
                    <h1>{name}</h1>
                    <p>{fullDescription}</p>
                    <div className="row d-flex">
                        <h3>${price}</h3>
                        <Count></Count>
                    </div>
                    <br/>
                    <button className="btn btn-danger">
                        <FontAwesomeIcon icon={faCartPlus} /> Add
                </button>
                    <div className="mt-4 d-flex ">
                        {
                            images.map((img, index) =>
                                <img onClick={() => setSelectedBigImg(images[index])}
                                    className={images[index] === selectedBigImg ? "mr-4 small-img active-small-img" : "mr-4 small-img"} src={img} alt="" />
                            )
                        }
                    </div>
                </div>
                    <div className="col-6 ">
                        <img className="shownImage" src={selectedBigImg} alt="" />
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default FoodItemDetails;