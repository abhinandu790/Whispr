import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [signupData, setSignupData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      userName: signupData.username,
      userEmail: signupData.email.toLowerCase(),
      userPassword: signupData.password
    };

    try {
      const res = await axios.post("http://localhost:5000/api/v1/register", payload);
      console.log("✅ Registration successful:", res.data);

      const { token, refresh } = res.data;
      localStorage.setItem("accessToken", token);
      localStorage.setItem("refreshToken", refresh);

      navigate("/main");
    } catch (err) {
      console.error("❌ Registration failed:", err.response?.data?.message || err.message);
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="login">
      <div className="container2">
        <h1 className="secure">SecureChat</h1>
        <p className="welcome">Create your account</p>

        <form onSubmit={handleSubmit}>
          <div className="username">
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter your Username"
              value={signupData.username}
              onChange={(e) => setSignupData({ ...signupData, username: e.target.value })}
              required
            />
          </div>

          <div className="email">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={signupData.email}
              onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
              required
            />
          </div>

          <div className="password">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={signupData.password}
              onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
              required
            />
          </div>

          <div>
            <button className="buttonSign" type="submit">
              Create Account
            </button>
          </div>

          <p className="account">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
