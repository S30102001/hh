import React from "react";
import "./Conect.css";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Conect = () => {
  return (
    <div className="connect-wrapper" style={{backgroundColor:"white"}}>
      <div className="connect-container">
        {/* ===== Header ===== */}
        <header className="connect-header">
          <h1 className="connect-title">Get in Touch</h1>
          <p className="connect-subtitle">I’d love to hear from you</p>
        </header>

        {/* ===== Info Cards ===== */}
        <div className="connect-cards">
          <div className="connect-card">
            <div className="icon-box phone">
              <FaPhoneAlt />
            </div>
            <h3>Call Me</h3>
            <p className="main-info">+20 114 403 2118</p>
            <p className="secondary-info">Sat - Thu | 9am - 6pm</p>
          </div>

          <div className="connect-card">
            <div className="icon-box email">
              <FaEnvelope />
            </div>
            <h3>Email Me</h3>
            <p className="main-info">sabreenattalh@gmail.com</p>
            <p className="secondary-info">Replies within 24 hours</p>
          </div>
        </div>

        {/* ===== Contact Form ===== */}
        <section className="connect-form-section">
          <h2 className="form-title">Send a Message</h2>
          <form
            className="connect-form"
            action="mailto:sabreenattalh@gmail.com"
            method="post"
            encType="text/plain"
          >
            <div className="form-row">
              <div className="input-box">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="input-box">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            <div className="input-box">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="What is this about?"
              />
            </div>
            <div className="input-box">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Write your message..."
                required
              ></textarea>
            </div>
            <button type="submit" className="form-submit-btn">
              Send Message
            </button>
          </form>
        </section>

        {/* ===== WhatsApp ===== */}
        <footer className="connect-footer">
          <h3>Chat on WhatsApp</h3>
          <p>For fast and direct communication</p>
          <a
            href="https://wa.me/201110403000"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-link"
          >
            <FaWhatsapp className="whatsapp-icon" /> Start Chat
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Conect;
