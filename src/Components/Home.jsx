import { Link } from "react-router-dom";
//This component renders a Home form for the SecureChat application.
const Home = () => {
  return (
    <div className="home">
        <header className="navbar">
        <h1 className="logo">SecureChat</h1>
            <nav className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/features">Features</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/login" className="logout-btn">Login </Link>
            </nav>
      </header>
                <div className="homecenter">
                    <h1 >Welcome to Secure Chat</h1>
                    <p>Your privacy-first messaging app. Chat securely with end-to-end <br />encryption and real-time features.</p>
                    {/* <button className="buttonHome">
                        <Link to="/login">Login Page</Link>
                    </button>
                    <button className="buttonHome">
                        <Link to="/signup">Signup Page</Link>
                    </button> */}
                </div>
     </div>
  );
}

export default Home;



