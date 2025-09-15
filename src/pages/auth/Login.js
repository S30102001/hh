import api from '../api/api';
import './Register.css';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ UserName: "", Password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const payload = {
        UserName: formData.UserName,
        Email: formData.UserName, // covers case when admin logs in with email
        Password: formData.Password,
      };

      const res = await api.post("/Auth/login", payload);

      // Save token and role
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);

      alert("Login successful!");

      // Redirect based on role
      if (res.data.role === "Admin") {
        navigate("/AdminBookings");
      } else {
        navigate("/home");
      }
    } catch (err) {
      alert(err.response?.data || "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="register-container">
      <div className="background-image">
        <img
          src="https://png.pngtree.com/thumb_back/fh260/background/20230718/pngtree-3d-illustration-depicting-a-conceptual-network-of-electronic-devices-image_3907550.jpg"
          alt="Tech Background"
        />
      </div>
      <div className="overlay"></div>

      <div className="tech-elements">
        <div className="circuit-line line-1"></div>
        <div className="circuit-line line-2"></div>
        <div className="circuit-line line-3"></div>
        <div className="tech-icon">⚡</div>
        <div className="tech-icon">🔌</div>
        <div className="tech-icon">💻</div>
      </div>

      <div className="register-form">
        <div className="form-header">
          <h2>Login</h2>
          <p>Enter your details to join the world of innovation & technology</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="UserName"
              value={formData.UserName}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
            <label>Email or Username</label>
          </div>

          <div className="input-group">
            <input
              type="password"
              name="Password"
              value={formData.Password}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
            <label>Password</label>
          </div>

          <button type="submit" className="submit-btn" disabled={isLoading}>
            <span>{isLoading ? "Logging in..." : "Login"}</span>
            <div className="btn-glow"></div>
          </button>
        </form>

        <div className="form-footer">
          <p>
            Don’t have an account? <a href="/register">Register</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
