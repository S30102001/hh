// CoursesSection.js
import React from "react";
import { FaChartBar, FaFileExcel, FaLaptopCode, FaUserCog } from "react-icons/fa";
import "./CoursesSection.css";

const CoursesSection = () => {
  const courses = [
    {
      title: "Power BI",
      icon: <FaChartBar />,
      desc: "Equip yourself with interactive dashboard skills, dynamic reports & data-driven decision making.",
    },
    {
      title: "Financial Excel",
      icon: <FaFileExcel />,
      desc: "Go beyond spreadsheets: advanced formulas, forecasting & financial modeling to boost your career.",
    },
    {
      title: "MOS",
      icon: <FaLaptopCode />,
      desc: "Master Word, Excel, PowerPoint & more. Prove your skills and enhance your professional credibility.",
    },
    {
      title: "FDTC",
      icon: <FaUserCog />,
      desc: "Digital Transformation essentials: IT, Databases, Spreadsheets & Mobile apps for a modern career.",
    },
  ];

  return (
    <section className="courses">
      <h2 className="section-title">Upcoming Courses</h2>
      <div className="courses-grid">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <div className="course-icon">{course.icon}</div>
            <h3>{course.title}</h3>
            <p>{course.desc}</p>
          </div>
        ))}
      </div>
      <button className="book-btn"> <a href="/StudentBooking">Book Now</a></button>
    </section>
  );
};

export default CoursesSection;
