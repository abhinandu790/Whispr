import { Link } from "react-router-dom";
//This component renders a Home form for the SecureChat application.
const Home = () => {
  return (
    <div className="home">
        <header className="navbar">
        <h1 className="logo">SecureChat</h1>
            <nav className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/">Features</Link>
                <Link to="/">Contact</Link>
                <Link to="/login" className="logout-btn">Login </Link>
            </nav>
      </header>
                {/* <div className="homecenter">
                    <h1 >Welcome to Secure Chat</h1>
                    <p>Your privacy-first messaging app. Chat securely with end-to-end <br />encryption and real-time features.</p>
                     <button className="buttonHome">
                        <Link to="/login">Login Page</Link>
                    </button>
                    <button className="buttonHome">
                        <Link to="/signup">Signup Page</Link>
                    </button> 
                </div> */}

                 <section class="hero">
    <h2>Welcome to SecureChat</h2>
    <p>Your privacy-first messaging app. Chat securely with end-to-end encryption and real-time features.</p>
    <Link to="/signup" class="cta-btn">Start Messaging</Link>
  </section>

  <section class="features">
    <h3>Key Features</h3>
    <div class="feature-grid">
      <div class="feature-card">
        <h4>🔒 End-to-End Encryption</h4>
        <p>Every message is encrypted for your safety.</p>
      </div>
      <div class="feature-card">
        <h4>⚡ Real-time Messaging</h4>
        <p>Instant delivery and typing indicators.</p>
      </div>
      <div class="feature-card">
        <h4>📱 Mobile Friendly</h4>
        <p>Chat from anywhere on any device.</p>
      </div>
    </div>
  </section>
     </div>
  );
}

export default Home;



