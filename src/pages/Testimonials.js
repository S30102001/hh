import React from "react";
import "./Testimonials.css";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const students = [
    {
      name: "Fares Elsyed",
      feedback:
        "I want to sincerely thank you for your support and dedication throughout the IGCSE Accounting (0985) course at Victoria College. The June 2024 session was challenging, but your teaching made a real difference.",
      img: "https://i.pinimg.com/originals/a7/77/26/a777268f7701fbf12bdc2ed4175758d5.png",
    },
    {
      name: "Asmaa Mohamed",
      feedback:
        "Thank you so much for your great efforts throughout the course. I really learned a lot from you, and I appreciate how much you cared about making us practice and apply everything.",
      img: "https://i.pinimg.com/originals/a7/77/26/a777268f7701fbf12bdc2ed4175758d5.png",
    },
    {
      name: "Yahia Haitham",
      feedback:
        "Mrs. Zeninab helped me in studying accounting (0985) in June 2023. She is a very good teacher, and I really enjoyed my time with her.",
      img: "https://i.pinimg.com/originals/a7/77/26/a777268f7701fbf12bdc2ed4175758d5.png",
    },
    {
      name: "Salma Aboshall",
      feedback:
        "Thank you so much Dr. Zainab for your great effort and continuous support. Your simple and clear way of explaining made learning easier and more enjoyable.",
      img: "https://i.pinimg.com/originals/a7/77/26/a777268f7701fbf12bdc2ed4175758d5.png",
    },
  ];

  return (
    <div className="st-container">
      <section className="st-hero">
        <div className="st-hero-overlay">
          <h1 className="st-title"> Student Testimonials </h1>
          <p className="st-subtitle">What our students say about us</p>
        </div>
      </section>

      <div className="st-grid">
        {students.map((student, index) => (
          <div className="st-card" key={index}>
            <img src={student.img} alt={student.name} className="st-img" />
            <FaQuoteLeft className="st-quote" />
            <p className="st-feedback">“{student.feedback}”</p>
            <h2 className="st-name">- {student.name}</h2>
          </div>
        ))}
      </div>

      <footer className="st-footer">
        <h3>🌐 Get Connected</h3>
        <p>Follow us on social media to stay updated with our latest programs.</p>
      </footer>
    </div>
  );
};

export default Testimonials;
