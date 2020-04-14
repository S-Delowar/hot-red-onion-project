import React from 'react';
import './Shipment.css';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../Login/useAuth';
import { loadStripe } from '@stripe/stripe-js';
import { getDatabaseCart, clearLocalShoppingCart } from '../../Utilities/databaseManager';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from '../CheckOutForm/CheckOutForm';

const Shipment = (props) => {
    const auth = useAuth();
    const { register, handleSubmit, errors } = useForm()
    const [orderId, setOrderId] = useState(null);
    const [shipInfo, setShipInfo] = useState(null);

    //payment
    const stripePromise = loadStripe('pk_test_q0DEs0NvtqrwkhPjtL2Thbth009TPtZ4pf');

    const onSubmit = data => {
        setShipInfo(data)
    }
    // const onSubmit = data => props.deliveryDetailsHandler(data)
    // const shipInfo = props.deliveryDetails;
    const savedCart = props.cart.map(cartItem => `id: ${cartItem.id}, name: ${cartItem.name}, quantity: ${cartItem.quantity}`)
    
    console.log(savedCart)
    console.log(props.cart)
    const handlePlaceOrder = (payment) => {
        //const savedCart = getDatabaseCart();
        const orderDetails = {
            email: auth.user.email,
            cart: savedCart,
            shipment: shipInfo,
            payment: payment
        };
        fetch('https://serene-crag-38555.herokuapp.com/placeOrder', {
            method: 'POST',
            body: JSON.stringify(orderDetails),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(res => res.json())
            .then(order => {
                console.log(order)
                setOrderId(order._id)
                clearLocalShoppingCart();
            })
    }




    const { toDoor, road, flat, businessName, address } = props.deliveryDetails;
    const reduceQuantity = (prdctId) => {
        props.checkOutItemHandler(prdctId);
    }
    const subTotal = props.cart.reduce((accumulator, currentValue) => {
        return accumulator + (currentValue.price * currentValue.quantity);
    }, 0);
    const totalQuantity = props.cart.reduce((acc, crr) => {
        return acc + crr.quantity;
    }, 0);
    console.log(totalQuantity)
    const tax = (subTotal / 100) * 5;
    const deliveryFee = totalQuantity * 2;
    const grandTotal = subTotal + tax + deliveryFee;

    return (
        <div style={{ marginTop: '200px', marginBottom: '200px' }}>
            <div style={{ display: shipInfo && 'none' }}>
                <div className="container ship-form d-flex justify-content-between">
                    <div>
                        <h2>Edit Delivery Details</h2>
                        <span style={{ fontWeight: "700" }}><hr /></span>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input name="name" defaultValue={toDoor} ref={register({ required: true })} placeholder="Delivery To Door" />
                            {
                                errors.name && <span className="error">This field is required</span>
                            }
                            <input name="roadNumber" defaultValue={road} ref={register({ required: true })} placeholder="Road No" />
                            {
                                errors.roadNumber && <span className="error">Road no is required</span>
                            }
                            <input name="flat" defaultValue={flat} ref={register({ required: true })} placeholder="Flat, Suite or Floor" />
                            {
                                errors.flat && <span className="error">This field is required</span>
                            }
                            <input name="businessName" defaultValue={businessName} ref={register({ required: true })} placeholder="Business Name" />
                            {
                                errors.businessName && <span className="error">Business name is required</span>
                            }
                            <input name="address" defaultValue={address} ref={register({ required: true })} placeholder="Address" />
                            {
                                errors.address && <span className="error">Address is required</span>
                            }
                            <br />
                            <button type="submit" className="btn btn-danger btn-block"> Save & Continue </button>
                        </form>
                    </div>
                    <div className="cart-section">
                        <div >
                            <p>From <strong>Gulshan Plazza Restaura GPR</strong></p>
                            <p>Arriving in 20-30 min</p>
                            <p>107 Road no- 8</p>
                        </div>
                        <br />
                        <div>
                            {
                                props.cart.map(item =>
                                    <div className="d-flex justify-content-between cart-added-item mb-2" >
                                        <img style={{ width: '100px', height: "auto", marginRight: "10px" }} src={item.images[0]} alt="" />
                                        <div className="mr-4">
                                            <h6>{item.name}</h6>
                                            <h4 className="text-danger">${item.price.toFixed(2)}</h4>
                                            <p>Delivery Fee</p>
                                        </div>
                                        <div className="pt-4">
                                            <button onClick={() => props.checkOutItemHandler(item.id, (item.quantity + 1))} className="btn mr-2">+</button>
                                            <button className="btn bg-white mr-2">{item.quantity}</button>
                                            <button onClick={() => props.checkOutItemHandler(item.id, (item.quantity - 1))} className="btn">-</button>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                        <div className="cart-calculation">
                            <p className="d-flex justify-content-between">
                                <span>Subtotal ({totalQuantity} item):</span>
                                <span>${subTotal.toFixed(2)}</span>
                            </p>
                            <p className="d-flex justify-content-between">
                                <span>Tax:</span>
                                <span>${tax.toFixed(2)}</span>
                            </p>
                            <p className="d-flex justify-content-between">
                                <span>Delivery</span>
                                <span>$2</span>
                            </p>
                            <h3 className="d-flex justify-content-between">
                                <span>Total</span>
                                <span>${grandTotal.toFixed(2)}</span>
                            </h3>
                            <br />
                            {/* <button disabled className="btn btn-danger btn-block">Fill Shipping Address & Continue</button> */}
                        </div>
                    </div>

                </div>
            </div>


            <div className="container" style={{ display: shipInfo ? 'block' : 'none' }}>
                <h2>Payment information</h2>
                <br />
                <Elements stripe={stripePromise}>
                    <CheckOutForm handlePlaceOrder={handlePlaceOrder} clearCart={props.clearCart} />
                </Elements>
                <br />
                {
                    orderId && <div>
                        <h3>Thank you for shopping with ema-john</h3>
                        <p>Your Order id is : {orderId}</p>
                        <Link to="/order-status" className="text-decoration-none">
                            <button  className="btn btn-danger">Track your order</button>
                        </Link>
                    </div>
                }

            </div>
        </div>

    )
};

export default Shipment;