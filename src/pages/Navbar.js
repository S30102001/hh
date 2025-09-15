import React, { useState, useRef, useEffect } from "react";
import "./Navbars.css";

export default function ModernNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [role, setRole] = useState(localStorage.getItem("role") || null);
  const navRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleCourses = (e) => {
    e.stopPropagation();
    setCoursesOpen(!coursesOpen);
    setAboutOpen(false);
  };
  const toggleAbout = (e) => {
    e.stopPropagation();
    setAboutOpen(!aboutOpen);
    setCoursesOpen(false);
  };

  // إغلاق القوائم عند الضغط خارج
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setCoursesOpen(false);
        setAboutOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // تحديث role لو اتغير
  useEffect(() => {
    const handleStorageChange = () => {
      setRole(localStorage.getItem("role"));
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("token");
    setRole(null);
  };

  return (
    <nav className="modern-navbar" ref={navRef}>
      <div className="modern-navbar-container">
        <a href="/" className="modern-logo">
          {/* <h1 className="modern-brand">Zeinab_Ahmead</h1> */}
          <img src="/logo.png" alt="Zeinab" style={{height:"100px",width:"150px"}}/>
        </a>

        <ul className={isOpen ? "modern-menu active" : "modern-menu"}>
          <li className="modern-item">
            <a href="/" className="modern-link">
              <i className="fas fa-home"></i>
              <span>Home</span>
            </a>
          </li>

          {/* About Dropdown */}
          <li className="modern-item dropdown">
            <div className="modern-link dropdown-toggle" onClick={toggleAbout}>
              <i className="fas fa-user"></i>
              <span>Meet_Zeinab</span>
              <i className={`fas fa-chevron-${aboutOpen ? "up" : "down"} dropdown-arrow`}></i>
            </div>
            <ul className={`modern-dropdown ${aboutOpen ? "active" : ""}`}>
              <li><a href="/MeetNadeem">AboutZeinab</a></li>
              <li><a href="/Testimonials">Testimonials</a></li>
              <li><a href="/Conect">Contact</a></li>
            </ul>
          </li>

          {/* Courses Dropdown */}
          <li className="modern-item dropdown">
            <div className="modern-link dropdown-toggle" onClick={toggleCourses}>
              <i className="fas fa-chalkboard-teacher"></i>
              <span>Training_Courses</span>
              <i className={`fas fa-chevron-${coursesOpen ? "up" : "down"} dropdown-arrow`}></i>
            </div>
            <ul className={`modern-dropdown ${coursesOpen ? "active" : ""}`}>
              <li><a href="/Life-Courses">LIFE Courses</a></li>
              <li><a href="/CoursesSectionv">Online Courses</a></li>
            </ul>
          </li>

          <li className="modern-item"><a href="/IGCSE" className="modern-link"><i className="fas fa-book"></i>IGCSE</a></li>
          <li className="modern-item"><a href="/CoursesSectionv" className="modern-link"><i className="fas fa-calendar-alt"></i>Upcoming_Courses</a></li>
          <li className="modern-item"><a href="/Media" className="modern-link"><i className="fas fa-photo-video"></i>Media</a></li>

          {role === "Admin" && (
            <li className="modern-item">
              <a href="/AdminBookings" className="modern-link"><i className="fas fa-users"></i>Students</a>
            </li>
          )}

          {!role && (
            <>
              <li className="modern-item"><a href="/register" className="modern-btn">Register</a></li>
              <li className="modern-item"><a href="/login" className="modern-btn">Login</a></li>
            </>
          )}

          {role && (
            <li className="modern-item">
              <button onClick={handleLogout} className="modern-btn logout">Logout</button>
            </li>
          )}
        </ul>

        <div className="modern-icon" onClick={toggleMenu}>
          <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </nav>
  );
}
