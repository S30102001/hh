import React from "react";
import "./Home.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains("about-img")) {
            entry.target.classList.add("show-img");
          } else if (entry.target.classList.contains("about-text")) {
            entry.target.classList.add("show-text");
          }
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll(".about-img, .about-text").forEach((el) =>
    observer.observe(el)
  );
}, []);
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content animate-fadeIn">
          <h3>ONE OF YOUR RIGHTS IS TO LEARN RIGHT</h3>
          <h1>
            A HIGHEST SCORE WITH <br />
            <span>Zeinab Abdel-Rehim</span>
          </h1>
          <div className="hero-buttons">
  <Link to="/IGCSE" className="btn btn-primary">IGCSE</Link>
  <Link to="/CoursesSectionv" className="btn btn-outline">TRAINING</Link>
</div>
        </div>
        <div className="floating-icon animate-float">
          <i className="fas fa-laptop-code"></i>
        </div>
      </section>

      {/* About Section */}
   <section className="about">
  <div className="about-img hidden">
    <img src="/z.jpg" alt="Zeinab" style={{ height: "500px" }} />
  </div>
  <div className="about-text hidden">
    <h2>
      MEET <span>Zeinab</span>
    </h2>
    <p style={{ fontSize: "25px" }}>
      Zeinab is an Accomplished Educator and Trainer with 15 years of
      experience teaching IGCSE Accounting and ICT, specializing in pedagogy
      and professional development...
    </p>
    <Link to="/Conect" className="btns">
      Know More About Zeinab
    </Link>
  </div>
</section>



      {/* Courses Section */}
      <section className="star-sec">
  <div className="star-content">
    <div className="star-text">
      <h2>How to Get Star ?</h2>
      <p>
        This is a golden question every student wants to answer.{" "}
        <b>LEARN WITH MS. ZEINAB</b> is your starting point, whether you
        have a background in <b>ICT</b> or <b>Accounting</b>, or even don’t
        have any. You are in the right place to answer this question and
        achieve it.
      </p>
      <button className="star-btn">REGISTER NOW</button>
    </div>

    <div className="star-gallery">
      <div className="star-img-card">
        <div className="star-img-inner">
          <div className="star-img-front">
            <img
              src="https://live.staticflickr.com/65535/53613503372_658eb9bdb7_w.jpg"
              alt="ICT Class"
            />
          </div>
          <div className="star-img-back">
            <h3>ICT Class</h3>
            <p>Interactive and modern learning experience.</p>
          </div>
        </div>
      </div>

      <div className="star-img-card">
        <div className="star-img-inner">
          <div className="star-img-front">
            <img
              src="https://live.staticflickr.com/65535/53614581738_c14883ff7c.jpg"
              alt="Accounting Class"
            />
          </div>
          <div className="star-img-back">
            <h3>Accounting Class</h3>
            <p>Learn accounting step by step with guidance.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Consultation Section */}
     {/* <section className="consultation" >
  <div className="consultation-text" style={{display:"flex",float:"left"}}>
<div>
 <h2>PROFESSIONAL DEVELOPMENT</h2>
    <p>
       
      With over 15 years of experience as a technology trainer, I specialize in enhancing employee efficiency in onsite corporate environments. My expertise lies in designing and delivering tailored Office 365 training programs to meet organizational needs and help teams thrive in a rapidly changing business landscape. I create engaging, in-person training sessions and comprehensive materials to ensure your employees gain the practical skills they need to succeed in the modern workplace.
    </p>
   
    <button className="btns">Book Your Training Course</button>
</div>
<div>
 <img style={{width:"300px",height:"400px",borderRadius:"20px"}}
            src="./z1.jpg"
            alt="ICT Class"
          />
</div>
   
  </div>
 
</section> */}


      {/* Journey Section */}
      <section className="journey-slider-section">
  <h2 className="journey-slider-title">PROFESSIONAL JOURNEY</h2>
  <div className="journey-slider-wrapper">
    <div className="journey-slider-track">
      {[
        { img: "/1.jpg", title: "British Council" },
        { img: "/5.jpg", title: "Pharos University" },
        { img: "/51.jpg", title: "Alexandria University" },
        { img: "/525.jpg", title: "CSI" },
      ].map((item, index) => (
        <div className="journey-slider-card" key={index}>
          <img src={item.img} alt={item.title} />
          <h3>{item.title}</h3>
          <button className="journey-slider-btn">Learn More</button>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Subscribe Section */}
      <section className="subscribe">
        <h2>STAY UP-TO-DATE</h2>
        <p>Get the latest updates, free resources, and learning materials.</p>
        <div className="subscribe-box">
          <input type="email" placeholder="Enter your email" />
          <button className="btn-sub">Subscribe</button>
        </div>
      </section>
    </div>
  );
}
