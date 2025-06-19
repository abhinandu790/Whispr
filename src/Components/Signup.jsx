const Signup = (props) => {
    // This component renders a signup form for the SecureChat application.
    return(
        <div className="login"> 
            <div className="container2">
                <h1 className="secure">SecureChat</h1>
                <p className="welcome">Create your account</p>
                <form action="">
                    <div className="username">
                        <label htmlFor="">Username</label>
                        <input type="text" name="" id=""placeholder="Enter your Username" />
                    </div>
                <div className="email">
                    <label htmlFor="">Email</label><br />
                    <input type="email" name="" id=""  placeholder="Enter your email"/><br />

                </div>
                <div className="password">
                    <label htmlFor="">Password</label><br />
                    <input type="password" name="" id=""  placeholder="Enter your password"/>
                </div>
                <div>
                    <button className='buttonSign'>Create Account</button>
                </div>
                <p className="account">Don't have an account? <a href="/">Sign in</a></p>
                
                </form>
            
            
            </div>
        </div>
    )
        
}

export default Signup;