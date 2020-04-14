import React from 'react';
import './Features.css';
import AllFeatures from '../Data/features.json'
import { useState } from 'react';
import { useEffect } from 'react';
import SingleFeature from '../SingleFeature/SingleFeature';

const Features = () => {
    const[features, setFeatures] = useState([]);
    useEffect(()=>{
        fetch('https://serene-crag-38555.herokuapp.com/features')
        .then(res => res.json())
        .then(data => {
            setFeatures(data)
        })
        console.log(features)     
    },[features.length])
    //console.log(features);
    return (
        <div className="container features-area">
            <div className="row mb-4">
                <div className="col-md-6">
                    <h2>Why you Choose Us?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente eaque repellendus asperiores nisi! Architecto, praesentium eligendi consequatur inventore fuga eius totam officia adipisci. Nostrum quia soluta vel distinctio delectus!</p>
                </div>
            </div>
            <div className="row my-5">
                {
                    features.map(feature => <SingleFeature key={feature.id} feature={feature}></SingleFeature>)
                }
            </div>
        </div>
    );
};

export default Features;