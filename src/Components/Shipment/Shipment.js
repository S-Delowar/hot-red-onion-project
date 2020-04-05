import React from 'react';
import './Shipment.css';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Shipment = (props) => {
    const { register, handleSubmit, errors } = useForm()
    const onSubmit = data => props.deliveryDetailsHandler(data)
    console.log(props.deliveryDetails)

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
                    {
                        totalQuantity ?
                            props.deliveryDetails.address ?
                                <Link to="/order-status" className="text-decoration-none">
                                    <button onClick={() => props.clearCart()} className="btn btn-block btn-danger btn-secondary ">Place Order</button>
                                </Link>
                                :
                                <button disabled className="btn btn-danger btn-block">Fill Shipping Address & Continue</button>


                                :
                                <button disabled className="btn btn-danger btn-block">Nothig to Checkout</button>
                }
                </div>
            </div>

        </div>

    )
};

export default Shipment;