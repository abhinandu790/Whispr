
const Loginform = (props)=>{
    return(
        <div className="login"> 
            <div className="container">
                <h1 className="Secure">SecureChat</h1>
                <p className="welcome">Welcome back!</p>
                <form action="">
                <div className="email">
                    <label htmlFor="">Email</label><br />
                    <input type="email" name="" id=""  placeholder="Enter your email"/><br />

                </div>
                <div className="password">
                    <label htmlFor="">Password</label><br />
                    <input type="password" name="" id=""  placeholder="Enter your password"/>
                </div>
                <div>
                    <button className='buttonSign'>Sign In</button>
                </div>
                <p className="account">Don't have an account? <a href="">Sign up</a></p>
                
                </form>
            
            
            </div>
        </div>
    )
}

export default Loginform;