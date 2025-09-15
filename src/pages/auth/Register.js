import React, { useState } from "react";
import api from "../api/api"; // Import the API instance (change path if needed)
import "./Register.css"; // Keep your CSS

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const payload = {
        FullName: formData.name, // Map name
        Email: formData.email,
        Password: formData.password,
        Role: "Student" // You can change role here
      };

      const res = await api.post("/Auth/register", payload);
      alert(res.data || "Account created successfully!");
      setFormData({ name: "", email: "", password: "" });
    } catch (err) {
      alert(err.response?.data || "An error occurred during registration");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="register-container">
      {/* Background image */}
      <div className="background-image">
        <img
          src="https://png.pngtree.com/thumb_back/fh260/background/20230718/pngtree-3d-illustration-depicting-a-conceptual-network-of-electronic-devices-image_3907550.jpg"
          alt="Tech Background"
        />
      </div>

      {/* Overlay */}
      <div className="overlay"></div>

      {/* Tech decorative elements */}
      <div className="tech-elements">
        <div className="circuit-line line-1"></div>
        <div className="circuit-line line-2"></div>
        <div className="circuit-line line-3"></div>
        <div className="tech-icon">⚡</div>
        <div className="tech-icon">🔌</div>
        <div className="tech-icon">💻</div>
      </div>

      {/* Main form */}
      <div className="register-form">
        <div className="form-header">
          <h2>Create Your Tech Account</h2>
          <p>Join the world of innovation and advanced technology</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
            <label>Full Name</label>
          </div>

          <div className="input-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
            <label>Email</label>
          </div>

          <div className="input-group">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
            <label>Password</label>
          </div>

          <button type="submit" className="submit-btn" disabled={isLoading}>
            <span>{isLoading ? "Submitting..." : "Register"}</span>
            <div className="btn-glow"></div>
          </button>
        </form>

        <div className="form-footer">
          <p>
            Already have an account? <a href="/login">Login here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
