import React from 'react';
import './SingleFeature.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

const SingleFeature = (props) => {
    const { id, icon, image, title, description } = props.feature;
    const [descriptionCollapse, setDescriptionCollapse] = useState(false);
    const showMore = () => {
        console.log("show More");
        setDescriptionCollapse(true)
    }
    const showLess = () => {
        console.log("Show Less");
        setDescriptionCollapse(false)
    }
    return (

        <div className="card text-justify col-md-4">
            <img className="card-img-top mb-4" src={image} alt="" />
            <div className="d-flex">

                <img className="mr-2 feature-icon" src={icon} alt="" />
                <div>
                    <h5>{title}</h5>
                    <br />
                    <p>{
                        descriptionCollapse? description: description.substr(0,100)
                    }
                    </p>
                    {
                        descriptionCollapse ?
                    <span onClick={showLess} className="card-link collapse-btn" >See Less <FontAwesomeIcon icon={faArrowAltCircleLeft} className="icon"/> </span> 
                    :
                    <span onClick={showMore} className="card-link collapse-btn">See More <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon"/> </span> 
                    }
                </div>
            </div>
        </div>

    );
};

export default SingleFeature;