import React from "react";
import "./LifeCourses.css";
import { Link } from "react-router-dom";
import {
  FaWordpress,
  FaFileExcel,
  FaFilePowerpoint,
  FaEnvelopeOpenText,
  FaChartPie,
  FaCalculator,
  FaMedal,
  FaChalkboardTeacher,
} from "react-icons/fa";

const LifeCourses = () => {
  const freeCourses = [
    { name: "Word", icon: <FaWordpress color="#2b579a" />, path: "/Word" },
    { name: "Excel", icon: <FaFileExcel color="#217346" />, path: "/courses" },
    {
      name: "PowerPoint",
      icon: <FaFilePowerpoint color="#d24726" />,
      path: "/Porpoint",
    },
    {
      name: "Outlook",
      icon: <FaEnvelopeOpenText color="#0072c6" />,
      path: "/Outlook",
    },
  ];

  const liveCourses = [
    {
      name: "Power BI",
      icon: <FaChartPie color="#f2c811" />,
      path: "/courses/powerbi",
    },
    {
      name: "Financial Excel",
      icon: <FaCalculator color="#217346" />,
      path: "/courses/financial-excel",
    },
    { name: "MOS", icon: <FaMedal color="#ff9800" />, path: "/courses/mos" },
    {
      name: "FDTC",
      icon: <FaChalkboardTeacher color="#6c63ff" />,
      path: "/courses/fdtc",
    },
  ];

  return (
    <section className="life-courses-section">
      <div className="life-courses-header">
        <h1 className="section-title">
          Looking to boost your skills and career?
        </h1>
        <p className="section-subtitle">
          Zeinab Abdel-Rehim, with 16+ years of teaching and training
          experience, provides <b>Free Recorded</b> and <b>Live Training</b>{" "}
          programs to fit your learning style and career goals.
        </p>
      </div>

      <div className="courses-container">
        {/* Free Recorded */}
        <div className="course-category">
          <h2 className="category-title">Free Recorded</h2>
          <div className="course-grid">
            {freeCourses.map((course, index) => (
              <Link key={index} to={course.path} className="course-card">
                <div className="icon">{course.icon}</div>
                <p>{course.name}</p>
              </Link>
            ))}
          </div>
          <Link to="/FreeCourses" className="category-btn">
            Start Free
          </Link>
        </div>

        {/* Live */}
        <div className="course-category">
          <h2 className="category-title live">Live</h2>
          <div className="course-grid">
            {liveCourses.map((course, index) => (
              <Link key={index} to={course.path} className="course-card">
                <div className="icon">{course.icon}</div>
                <p>{course.name}</p>
              </Link>
            ))}
          </div>
          <Link to="/CoursesSectionv" className="category-btn">
            Join Live
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LifeCourses;
