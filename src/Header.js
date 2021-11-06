import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
function header() {
    return (
        
        <div className='header'> 
         <div className='logo'>   
            <img className="header__logo"
            src="https://i.ibb.co/r5krrdz/logo.png"
            />
            <div className='signin_button'>
            <a href ="/main" className="btn btn-rounded">Sign In</a>
            </div>
            <img className = "background"
            />
            
            <div className="header_gradient"/>

            <div class="showcase-body">
                <>
            <h1>Unlimited movies, TV shows and more</h1>
            <p>Watch anywhere. Cancel Anytime</p>
            {/* <a href="#" class="btn btn-xl">
                Watch Free For 30 Days <em class="fas fa-chevron-right btn-icon"></em>
            </a> */}
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
            <div className='login_input'>
                <form>
                    <input placeholder='Email address' type='email'/>
                    
                    <a href ="/main" className="getStarted"> GET STARTED</a>
                   
                </form>
            </div>
            </>
        </div> 
        </div>  
 
        </div> 
        
        
      
    )
}

export default header
