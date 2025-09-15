// src/pages/IGCSEict.js
import React from "react";
import "./IGCSEAccounting.css"; // تقدرِ تستعملي نفس ملف CSS

const IGCSEict = () => {
  return (
    <div className="accounting-page">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">IGCSE ICT</h1>
        <p className="hero-subtitle">
          Your gateway to mastering the fundamentals of ICT
        </p>
      </section>

      {/* قسم المعلومات والفيديو */}
      <div className="content-container">
        {/* Info Card */}
        <div className="info-card">
          <h2>All you need to know about IGCSE ICT Class topics</h2>
          <ol>
            <li>
              Paper 1 :-Theory
              
            </li>
            <li>
              Paper 2 :- Word / PowerPoint / Access
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </li>
            <li>
              Paper 3 :- Excel / Expression Web | Dreamweaver
              <ul>
                <li></li>
                <li></li>
              </ul>
            </li>
          </ol>
        </div>

        {/* Video Card */}
        <div className="video-card">
          <video controls className="course-video">
            <source src="/ph1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="course-info">
            <div>
              <span className="label">Course Duration</span>
              <span className="value">40:50</span>
            </div>
            <div>
              <span className="label">Chapters</span>
              <span className="value">21</span>
            </div>
            <div>
              <span className="label">Sessions</span>
              <span className="value">---</span>
            </div>
          </div>
        </div>
      </div>

      {/* زر الحجز */}
      <button
        className="book-button"
        onClick={() => (window.location.href = "/StudentBooking")}
      >
        Book Now
      </button>

      {/* قسم نظرة عامة على الكورس */}
      <div className="course-overview-page">
        {/* معلومات المدرس */}
        <div className="instructor-info">
          <img src="/z1.jpg" alt="Instructor" className="instructor-image" />
          <h2 className="instructor-name">DR/Zeinab Abdel-Rehim</h2>
          <p className="instructor-bio">
            Expert in ICT with 10+ years of teaching experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IGCSEict;
