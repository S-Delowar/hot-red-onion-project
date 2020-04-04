import React from 'react';
import './Shipment.css';
import { useForm } from 'react-hook-form';

const Shipment = () => {
    const { register, handleSubmit, watch, errors } = useForm()
    const onSubmit = data => { console.log(data) }

    console.log(watch('example'))

    return (
        <div className="container ship-form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="name" ref={register({ required: true })} placeholder="Delivery To Door" />
                {
                    errors.name  && <span className="error">This field is required</span>
                }
                <input name="roadNumber" ref={register({ required: true })} placeholder="Road No" />
                {
                    errors.roadNumber && <span className="error">Road no is required</span>
                }
                <input name="flat" ref={register({ required: true })} placeholder="Flat, Suite or Floor" />
                {
                    errors.flat && <span className="error">This field is required</span>
                }
                <input name="businessName" ref={register({ required: true })} placeholder="Business Name" />
                {
                    errors.businessName && <span className="error">Business name is required</span>
                }
                <input name="adress" ref={register({ required: true })} placeholder="Adress" />
                {
                    errors.adress && <span className="error">Adress is required</span>
                }

                <input type="submit" className="btn btn-danger" />
            </form>
        </div>

    )
};

export default Shipment;