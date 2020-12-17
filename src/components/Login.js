import { ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import "../styles/Login.css"
const Login = () => {
    return (
        <div className="login">
           <div className="login--image"><img src="https://images.unsplash.com/photo-1513094735237-8f2714d57c13?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=jon-ly-Xn7GvimQrk8-unsplash.jpg&w=1920" alt="GoodyBag Ecommerce Store" /></div> 

            <div className="login--form">
                <h1>GoodyBags <ShoppingCartOutlined/></h1>
                <h2>Log In</h2>
                <form className="login--details">
                    <label for="Username">Username</label>
                    <input type="username" name="Username"
                    />
                    <label for="Password">Password</label>
                    <input type="password" name="Password"
                    />
                    <div className="login--mid">
                    <button className="loginBtn">LOG IN</button>
                    <p>Don't have an account? <span className="login--signupBtn">Sign Up</span></p>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default Login
