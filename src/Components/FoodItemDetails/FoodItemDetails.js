import React from 'react';
import './FoodItemDetails.css';
import { useParams } from 'react-router-dom';
import AllFoods from '../Data/foods.json';
import { useState } from 'react';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import Footer from '../Footer/Footer';




const FoodItemDetails = (props) => {
    const { foodId } = useParams();

    const currentFood = AllFoods.find(fd => fd.id == foodId);
    //console.log(currentFood);
    const { id, name, images, price, fullDescription } = currentFood;

    const [selectedBigImg, setSelectedBigImg] = useState(images[0]);

    const [count, setCount] = useState(1);
    const [isSuccess, setIsSuccess] = useState(false);

    useState(() => {
        if (currentFood.count) {
            setCount(currentFood.count)
        }
    }, [currentFood.count])

    const handleAddFood = (crrFd) => {
        //console.log("Food Added",  currentFood)
        crrFd.quantity = count;
        //console.log(currentFood);
        props.cartHandler(crrFd)
        setIsSuccess(true);

    }
    if (isSuccess) {
        setTimeout(() => {
            setIsSuccess(false)
        }, 1500);
    }

    // const finalCartHandler = (currentFood) => {
    //     currentFood.quantity = count;
    //     props.cartHandler(currentFood);
    //    // setIsSuccess(true);

    // }

    return (
        <div className="food-details-section" >
            <div className="container foodItemDetails d-flex">
                <div className="row"><div className="col-6">
                    <h1>{name}</h1>
                    <p>{fullDescription}</p>
                    <div className="row d-flex">
                        <h3>${price}</h3>
                        <div className="count ">
                            <button onClick={() => setCount(count === 1 ? 1 : count - 1)} className="btn mr-2 ">-</button>
                            {count}
                            <button onClick={() => setCount(count + 1)} className="btn ml-2">+</button>

                        </div>
                    </div>
                    <br />
                    <div className="d-flex">
                        <button className="btn btn-danger mr-4" onClick={() => handleAddFood(currentFood)} >
                            <FontAwesomeIcon icon={faCartPlus} /> Add
                    </button>
                        {
                            isSuccess && <p className="success-message text-success" >Item added to list successfully</p>
                        }
                    </div>
                    <div className="mt-4 d-flex ">
                        {
                            images.map((img, index) =>
                                <img id={id} onClick={() => setSelectedBigImg(images[index])}
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

        </div>
    );
};

export default FoodItemDetails;