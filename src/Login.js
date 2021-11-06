import React from 'react'
import "./Login.css"
function Login() {
    return (
        <div className ='login'>
             <img className="login__logo"
            src="https://i.ibb.co/r5krrdz/logo.png"
            />
            <div className='login_gradient'/>
            <form>
                <h1>Sign In</h1>
                <input placeholder='Email' type='email'/> 
                <input placeholder='Password' type='password'/>
                <button type='submit'>Sign In</button>
            </form>
        </div>
    )
}

export default Login
