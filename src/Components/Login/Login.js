import React from 'react';
import './Login.css'
import Auth, { useAuth } from './useAuth'
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Logo from '../../Image/logo2.png';
import { Link } from 'react-router-dom';

const Login = () => {
    const auth = useAuth();

    const [isReturningUser, setIsReturningUser] = useState(false);

    const { register, handleSubmit, watch, errors } = useForm()
    const onSubmit = data => {
        if (isReturningUser) {
            if (data.email && data.password) {
                auth.signIn(data.email, data.password)
                .then(res => {
                    window.location.pathname = "/"
                })
            }
        }
        else {
            if (data.name && data.email && data.password && data.confirm_password) {
                auth.signUp(data.email, data.password, data.name)
                .then(res => {
                    window.location.pathname = "/"
                })
            }
        }
    }


    return (
        <div className="sign-up-page">
            <div className=" container">
                <div className="logo text-center">
                    <Link to="/">
                        <img src={Logo} alt="" />
                    </Link>
                </div>
                {
                    isReturningUser ?
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input name="email" className="form-control" ref={register({ required: true })} placeholder="Email" />
                            {errors.email && <span className="error">Email is required</span>}

                            <input name="password" type="password" className="form-control" ref={register({ required: true })} placeholder="Password" />
                            {errors.password && <span className="error">Password is required</span>}

                            <input type="submit" className="btn btn-danger" placeholder="SignIn"/>
                            <br/>
                            <button onClick={()=>setIsReturningUser(false)} className="btn text-center"
                            >Create New Account</button>
                        </form>

                        :
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input name="name" className="form-control" ref={register({ required: true })} placeholder="Name" />
                            {errors.name && <span className="error">Name is required</span>}

                            <input name="email" className="form-control" ref={register({ required: true })} placeholder="Email" />
                            {errors.email && <span className="error">Email is required</span>}

                            <input name="password" type="password" className="form-control" ref={register({ required: true })} placeholder="Password" />
                            {errors.password && <span className="error">Password is required</span>}

                            <input name="confirm_password" type="password" className="form-control" ref={register({ validate: (value)=> value === watch("password") })} placeholder="Confirm Password" />
                            {errors.confirm_password && <span className="error">Password doesn't match</span>}

                            <input type="submit" className="btn btn-danger" placeholder="Sign Up" />
                            <br/>
                            <button onClick={()=>setIsReturningUser(true)} className="btn text-center"
                            >Already Have an Account</button>
                        
                        </form>
            }
            </div>
        </div>
    )



    // const auth = Auth()
    // console.log(auth)
    // const handleSigIn = () => {
    //     auth.signInWithGoogle()
    //     .then(res => {
    //         window.location.pathname = "/"
    //     })
    // }
    // const handleSignOut = () => {
    //     auth.signOut()
    //     .then(res => {
    //         window.location.pathname = "/"
    //     })
    // }
    // return (
    //     <div style={{marginTop: "150px"}}>
    //         <h1>This is login section</h1>

    //         {
    //             auth.user ?
    //             <button onClick={handleSignOut}>Sign Out</button>
    //             :
    //             <button onClick={handleSigIn}>Login With Google</button>
    //         }

    //     </div>
    // ); 
};

export default Login;