import { Link } from "react-router-dom";
//This component renders a Home form for the SecureChat application.
const Home = () => {
  return (
    <div className="home">
        <header class="navbar">
            <h1 class="logo">SecureChat</h1>
            <nav class="nav-links">
                    <Link to="/login">LOGIN</Link>
                    <Link to="/signup">SIGN UP</Link>
                    <Link to="/"> HOME</Link>
            </nav>
        </header>
            <h1 >Welcome to Secure Chat</h1>
            <p>Your privacy-first messaging app. Chat securely with end-to-end <br />encryption and real-time features.</p>
            <button className="buttonHome">
                <Link to="/login">Login Page</Link>
            </button>
            <button className="buttonHome">
                <Link to="/signup">Signup Page</Link>
            </button>
     </div>
  );
}

export default Home;



