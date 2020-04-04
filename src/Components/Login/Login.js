import React from 'react';
import Auth from './useAuth'

const Login = () => {
    const auth = Auth()
    console.log(auth)
    const handleSigIn = () => {
        auth.signInWithGoogle()
        .then(res => {
            window.location.pathname = "/"
        })
    }
    const handleSignOut = () => {
        auth.signOut()
        .then(res => {
            window.location.pathname = "/"
        })
    }
    return (
        <div style={{marginTop: "150px"}}>
            <h1>This is login section</h1>
            
            {
                auth.user ?
                <button onClick={handleSignOut}>Sign Out</button>
                :
                <button onClick={handleSigIn}>Login With Google</button>
            }
            
        </div>
    ); 
};

export default Login;