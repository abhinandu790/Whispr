import { useState } from "react";
import { Link } from "react-router-dom";

const Loginform = (props) => {
    // This component renders a login form for the SecureChat application.

    const [loginData, setLoginData] = useState({
        email: '',
        passsword: ''
    });

    const handleSubmit = ()=> {
        console.log(loginData);
    }

    
    return (
        <div className="login"> 
            <div className="container">
                <h1 className="secure">SecureChat</h1>
                <p className="welcome">Welcome back!</p>
                <form action="">
                <div className="email">
                    <label htmlFor="">Email</label><br />
                    <input type="email" name="" id=""   placeholder="Enter your email" onChange={(e)=> {
                        setLoginData({...loginData, email: e.target.value})
                    }}/><br />

                </div>
                <div className="password">
                    <label htmlFor="">Password</label><br />
                       <input type="password" name="" id="" onChange={(e)=> setLoginData({...loginData, passsword: e.target.value})} placeholder="Enter your password"/>
                        
                </div>
                <div>
                    <button className='buttonSign' onClick={handleSubmit} >Sign In</button>
                </div>
                <p className="account">Don't have an account? <Link  to="/signup">Signup </Link> </p>
                
                </form>
            
            
            </div>
        </div>
    )
}

export default Loginform;