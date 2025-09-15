import React from "react";
import "./IGCSEAccounting.css"; // CSS منفصل للتصميم

const IGCSEAccounting = () => {
  return (
    <div className="accounting-page">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">IGCSE Accounting</h1>
        <p className="hero-subtitle">
          Your gateway to mastering the fundamentals of Accounting
        </p>
      </section>

      {/* قسم المعلومات والفيديو */}
      <div className="content-container">
        {/* Info Card */}
        <div className="info-card">
          <h2>All you need to know about IGCSE Accounting</h2>
          <ul>
            <li>The fundamentals of accounting</li>
            <li>Sources and recording of data</li>
            <li>Verification of accounting records</li>
            <li>Accounting procedures</li>
            <li>Preparation of financial statements</li>
            <li>Analysis and interpretation</li>
            <li>Accounting concepts and modern practice</li>
          </ul>
        </div>

        {/* Video Card */}
        <div className="video-card">
          <video controls className="course-video">
  <source src="/k.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

          <div className="course-info">
              <div>
              <span className="label">Course Duration</span>
              <span className="value">40:50</span>
            </div>
            <div>
              <span className="label">Chapters</span>
              <span className="value">22</span>
            </div>
            <div>
              <span className="label">Sessions</span>
              <span className="value">53</span>
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
            Expert in Accounting with 10+ years of teaching experience.
          </p>
        </div>

        {/* شبكة التعلم */}
        {/* <div className="learning-grid">
          <h2>You Will Learn In This Course</h2>
          <div className="grid-container">
            <div className="grid-item">📘 Cashbook</div>
            <div className="grid-item">📝 Record in the Journal</div>
            <div className="grid-item">📊 Posting to Ledger</div>
            <div className="grid-item">📑 Prepare Trial Balance</div>
            <div className="grid-item">📂 Prepare Statement of Financial Position</div>
            <div className="grid-item">💰 Prepare Income Statement</div>
            <div className="grid-item">
              🏢 Special treatments for specific businesses
            </div>
            <div className="grid-item">📈 Business analysis and interpretation</div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default IGCSEAccounting;
