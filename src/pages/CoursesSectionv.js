import React from "react";
import {
  FaChartBar,
  FaFileExcel,
  FaLaptopCode,
  FaUserCog,
} from "react-icons/fa";
import "./CoursesSectionv.css";

const CoursesSectionv = () => {
  const courses = [
    {
      title: "Power BI",
      icon: <FaChartBar />,
      desc: "Equip yourself with interactive dashboards, dynamic reports & data-driven decision making.",
      img: "https://www.plainconcepts.com/wp-content/uploads/2022/09/power-bi-que-es-1.jpg",
    },
    {
      title: "Financial Excel",
      icon: <FaFileExcel />,
      desc: "Advanced formulas, forecasting & financial modeling to boost your career.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPL3CAeOM-tggPi2eMHNyBeZpYuXvxTWhDNg&s",
    },
    {
      title: "MOS",
      icon: <FaLaptopCode />,
      desc: "Master Word, Excel, PowerPoint & more. Prove your skills and grow professionally.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTHneyt4t2jtxyyGb1kOL3e1MsayueHMG2LA&s",
    },
    {
      title: "FDTC",
      icon: <FaUserCog />,
      desc: "Digital Transformation: IT, Databases, Spreadsheets & Mobile apps for a modern career.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMHdWepUVJyQif6tuNhLLgsPGrdXxGpZL6ng&s",
    },
  ];

  return (
    <section className="courses">
      <h2 className="section-title">Upcoming Courses</h2>
      <div className="courses-grid">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <img src={course.img} alt={course.title} className="course-img" />
            <div className="course-content">
              <div className="course-icon">{course.icon}</div>
              <h3>{course.title}</h3>
              <p>{course.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="book-btn">
        <a href="/StudentBooking">Book Now</a>
      </button>
    </section>
  );
};

export default CoursesSectionv;
