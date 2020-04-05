import React from 'react';
import './OrderComplete.css';
import mapPhoto from '../../Image/ordercomplete.png';
import ShippingPhoto from '../../Image/Group 1151.png';
import RiderPhoto from '../../Image/Group 1152.png';

const OrderComplete = () => {
    return (
        <div className="container d-flex justify-content-between order-complete">
            <div className="mapImage">
                <img style={{ width: "80%", height: "auto" }} src={mapPhoto} alt="" />
            </div>
            <div className="order-status">
                <img style={{ width: "100px", height: "auto" }} src={ShippingPhoto} alt="" />
                <div className="bg-white p-3 mt-2 mb-2">
                    <h5>Your Location</h5>
                    <span>108, Nilkhet. Road-8</span>
                    <br /><br/>
                    <h5>Shop Address</h5>
                    <span>34/A Ajimpur</span>
                </div>
                <h1>10:30 PM</h1>
                <p>Estimated Delivery Time</p>
                <div className="d-flex bg-white p-3">
                    <img style={{ width: "50px", height: "50px" }} src={RiderPhoto} alt="" />
                    <div className="ml-2">
                        <h5>Hamim</h5>
                        <p>Your raider</p>
                    </div>
                </div>
                <br/>
                <button className="btn btn-danger btn-secondary btn-block">Contact</button>
            </div>
        </div>
    );
};

export default OrderComplete;