import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = (props) => {

    // This component renders a signup form for the SecureChat application.
    const [signupData, setSignupData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const handleSubmit = (e) => {
        console.log(signupData);
    }
    return (
        <div className="login"> 
            <div className="container2">
                <h1 className="secure">SecureChat</h1>
                <p className="welcome">Create your account</p>
                <form action="">
                    <div className="username">
                        <label htmlFor="">Username</label>
                        <input type="text" name="" id=""placeholder="Enter your Username" onChange={(e)=> setSignupData({...signupData,username: e.target.value})} />
                    </div>
                <div className="email">
                    <label htmlFor="">Email</label><br />
                    <input type="email" name="" id=""  placeholder="Enter your email" onChange={(e)=> setSignupData({...signupData, email: e.target.value})}/><br />

                </div>
                <div className="password">
                    <label htmlFor="">Password</label><br />
                    <input type="password" name="" id=""  placeholder="Enter your password" onChange={(e)=> setSignupData({...signupData, password: e.target.value})}/>
                </div>
                <div>
                    <button className='buttonSign' onClick={handleSubmit}>Create Account</button>
                </div>
                <p className="account">Already have an account? <Link  to="/login">Login</Link> </p>
                
                </form>
            
            
            </div>
        </div>
    )
        
}

export default Signup;