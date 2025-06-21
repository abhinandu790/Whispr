import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Loginform = (props) => {
    

    // This component renders a login form for the SecureChat application.
    const navigate = useNavigate(); 
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    // const loginFunc = async()

    const handleSubmit = async (e)=> {

        e.preventDefault()
        console.log(loginData);

       await axios.post('http://localhost:5000/api/v1/login', {...loginData}).then((res)=> {
        console.log(res.data, 'response')
        navigate('/main')

        // if (res.data.status) {
        //     alert('this is auth user')
        // } else {
        //     alert('this is not auth user')
        // }
       }).catch((err)=> {
            console.log(err)
           
       })
    }
 

    
    return (
        <div className="login"> 
            <div className="container">
                <h1 className="secure">SecureChat</h1>
                <p className="welcome">Welcome back!</p>
                <form action="" onSubmit={handleSubmit}>
                <div className="email">
                    <label htmlFor="">Email</label><br />
                    <input type="email" name="" id=""   placeholder="Enter your email" onChange={(e)=> {
                        setLoginData({...loginData, email: e.target.value})
                    }}/><br />

                </div>
                <div className="password">
                    <label htmlFor="">Password</label><br />
                       <input type="password" name="" id="" onChange={(e)=> setLoginData({...loginData, password: e.target.value})} placeholder="Enter your password"/>
                        
                </div>
                <div>
                    <button className='buttonSign' type="submit" >Sign In</button>
                </div>
                <p className="account">Don't have an account? <Link  to="/signup">Signup </Link> </p>
                
                </form>
            
            
            </div>
        </div>
    )
}


export default Loginform;















