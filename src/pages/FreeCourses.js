// src/pages/FreeCourses.js
import React from "react";
import { FaFileExcel, FaFileWord, FaEnvelope, FaFilePowerpoint } from "react-icons/fa";
import { Link } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "Excel Course",
    icon: <FaFileExcel size={50} color="#1D6F42" />,
    description: "Learn Excel from basics to advanced.",
    link: "/courses"
  },
  {
    id: 2,
    title: "Word Course",
    icon: <FaFileWord size={50} color="#2B579A" />,
    description: "Master Microsoft Word for documents.",
    link: "/Word"
  },
  {
    id: 3,
    title: "Outlook Course",
    icon: <FaEnvelope size={50} color="#0072C6" />,
    description: "Organize your emails and calendar.",
    link: "/outlook"
  },
  {
    id: 4,
    title: "PowerPoint Course",
    icon: <FaFilePowerpoint size={50} color="#D24726" />,
    description: "Create professional presentations.",
    link: "/Porpoint"
  }
];

const FreeCourses = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #141e30, #243b55)",
        color: "#fff",
        padding: "50px 20px",
        fontFamily: "'Poppins', sans-serif",
        textAlign: "center"
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "10px" ,color:"#fff" }}>Free Courses</h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "50px" }}>
        Explore our free courses to enhance your skills.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px",
          justifyItems: "center"
          ,color:"#fff"
        }}
      >
        {courses.map((course) => (
          <Link
            to={course.link}
            key={course.id}
            style={{
              textDecoration: "none",
              color: "#fff",
              background: "rgba(255, 255, 255, 0.05)",
              borderRadius: "15px",
              padding: "30px 20px",
              width: "100%",
              maxWidth: "300px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
              transition: "all 0.3s ease",
            }}
          >
            <div style={{ marginBottom: "20px" }}>{course.icon}</div>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "10px" ,color:"#fff"}}>
              {course.title}
            </h2>
            <p style={{ fontSize: "1rem", color: "#ddd" }}>{course.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FreeCourses;
