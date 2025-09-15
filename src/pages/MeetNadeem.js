import React from 'react';
import { Link } from "react-router-dom";

import './MeetNadeem.css'
import { useEffect } from "react";
const MeetNadeem = () => {
  const handleContactClick = () => {
    // In a real application, this would scroll to a contact form or open a modal
    alert("Let's connect! This would open a contact form in a real application.");
  };
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll(".intro-text, .intro-image").forEach((el) =>
    observer.observe(el)
  );
}, []);
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll(".service-card").forEach((el) =>
    observer.observe(el)
  );
}, []);

  return (
    <div className='hhh'>

 <div style={styles.container} >
      {/* Hero Section */}
   <section className='g hero-flip' style={styles.heroSection}>
  <div style={styles.heroOverlay}></div>
  <div style={styles.floatingIcon}>
    <i className="fas fa-laptop-code" style={styles.icon}></i>
  </div>

  <div style={styles.heroContent}>
    {/* الصورة الكبيرة على الشمال */}
    <div style={styles.heroImageWrapper}>
      <img
        src="/zz.png" // حطي رابط الصورة اللي عايزاها
        alt="Zeinab Hero"
        style={styles.heroImage}
      />
    </div>

    {/* النص */}
    <div style={styles.heroTextWrapper}>
      <h1 style={styles.heroTitle}>
        <span style={styles.titleLine}>M E E T</span>
        <span style={styles.titleName}>ZEINAB</span>
      </h1>
      <h2 style={styles.heroSubtitle}>EDUCATOR & ICT SPECIALIST</h2>
    </div>
  </div>
</section>




      {/* Intro Section */}
     <section className="intro-sec">
  <div className="intro-content">
    {/* النص */}
    <div className="intro-text">
      <p>
        Zeinab is a passionate educator and ICT specialist with over 15 years
        of diverse teaching and training experience. She has taught IGCSE
        Accounting and ICT, and delivered more than 1700 hours of ICT training
        at leading institutions including Pharos University and New Horizons.
      </p>
      <p>
        Zeinab is also a certified Microsoft Technology Specialist since 2009
        and a researcher in media and information literacy. She authored a
        UNESCO-participated training course and spoke at the UNESCO MIL
        conference in Jordan in 2023 as part of "Agents of Change."
      </p>
    </div>

    {/* الصورة */}
    {/* الصورة + أيقونات التواصل */}
<div className="intro-image">
  <img
    src="z1.jpg"
    alt="Zeinab Profile"
  />

  {/* أيقونات التواصل */}
 <div className="social-icons">
  <a href="https://www.linkedin.com/in/zeinab-abdel-rehim-a4592513b/" target="_blank" rel="noreferrer">
    <i className="fab fa-linkedin-in"></i>
  </a>
  <a href="https://www.youtube.com/@zeinababdel-rehim9800" target="_blank" rel="noreferrer">
    <i className="fab fa-youtube"></i>
  </a>
  <a href="https://www.tiktok.com/@ms.zeinab.a.rehim?is_from_webapp=1&sender_device=pc" target="_blank" rel="noreferrer">
    <i className="fab fa-tiktok"></i>
  </a>
  <a href="https://www.flickr.com/photos/187819121@N05/" target="_blank" rel="noreferrer">
    <i className="fab fa-flickr"></i>
  </a>
  <a href="mailto:example@email.com">
    <i className="fas fa-envelope"></i>
  </a>
</div>

</div>

  </div>
</section>




      {/* Services Section */}
   <section className="services-sec">
  <h2 className="services-title">How Zeinab Can Help You</h2>
  <h3 className="services-subtitle">PROFESSIONAL SERVICES</h3>

  <div className="services-grid">
    <div className="service-card">
      <div className="service-icon">
        <i className="fas fa-comments"></i>
      </div>
      <h4 className="service-title">Teaching IGCSE</h4>

      <img src="/camb.jpg" alt="Teaching IGCSE" className="service-image" />

      <p className="service-description">
        Give your teen the edge they need in IGCSE with our one-on-one tutoring.
        We offer flexible face-to-face or online sessions for:
        <br />1. Accounting <br />2. ICT
        <br />
        <br />
        We provide everything your student needs to master the material:
        <br />1. Handout notes for easy review
        <br />2. Detailed PowerPoint presentations
        <br />3. Comprehensive classified past papers
      </p>
    </div>

    <div className="service-card">
      <div className="service-icon">
        <i className="fas fa-hands-helping"></i>
      </div>
      <h4 className="service-title">Digital Training</h4>

      <img src="/maicro.jpg" alt="Digital Training" className="service-image" />

      <p className="service-description">
        Courses with a focus on practical strategies and real-world scenarios.
        <br />
        Our bundle includes:
        <br />1. Data Analysis using Power BI
        <br />2. Data Analysis using Excel
        <br />3. MOS FDTC
      </p>
    </div>
  </div>
</section>



      {/* Testimonials Section */}
    <section className="testimonials-sec">
  <h2 className="testimonials-title">What They Say About Zeinab</h2>
  <h3 className="testimonials-subtitle">TESTIMONIALS</h3>

  <div className="testimonials-wrapper">
    {/* الصورة على الشمال */}
    <div className="testimonials-image">
      <img src="/z.jpg" alt="Testimonials" />
    </div>

    {/* الماركيه على اليمين */}
    <div className="testimonial-marquee">
      <div className="marquee-track">
        {/* الكروت */}
        <div className="testimonial-card">
          <div className="card-inner">
            <div className="card-front">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">
                I want to sincerely thank you for your support and dedication throughout the IGCSE Accounting course.
              </p>
              <div className="testimonial-author">
                <p className="author-name">Fares Elsyed</p>
                <p className="author-title">Student</p>
              </div>
            </div>
            <div className="card-back">
              <p className="testimonial-review">⭐⭐⭐⭐⭐ Highly recommend!</p>
            </div>
            
            
          </div>
        </div>
        <div className="testimonial-card">
          <div className="card-inner">
            <div className="card-front">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">
                I want to sincerely thank you for your support and dedication throughout the IGCSE Accounting course.
              </p>
              <div className="testimonial-author">
                <p className="author-name">Fares Elsyed</p>
                <p className="author-title">Student</p>
              </div>
            </div>
            <div className="card-back">
              <p className="testimonial-review">⭐⭐⭐⭐⭐ Highly recommend!</p>
            </div>
            
            
          </div>
        </div>
        <div className="testimonial-card">
          <div className="card-inner">
            <div className="card-front">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">
                I want to sincerely thank you for your support and dedication throughout the IGCSE Accounting course.
              </p>
              <div className="testimonial-author">
                <p className="author-name">Fares Elsyed</p>
                <p className="author-title">Student</p>
              </div>
            </div>
            <div className="card-back">
              <p className="testimonial-review">⭐⭐⭐⭐⭐ Highly recommend!</p>
            </div>
            
            
          </div>
        </div><div className="testimonial-card">
          <div className="card-inner">
            <div className="card-front">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">
                I want to sincerely thank you for your support and dedication throughout the IGCSE Accounting course.
              </p>
              <div className="testimonial-author">
                <p className="author-name">Fares Elsyed</p>
                <p className="author-title">Student</p>
              </div>
            </div>
            <div className="card-back">
              <p className="testimonial-review">⭐⭐⭐⭐⭐ Highly recommend!</p>
            </div>
            
            
          </div>
        </div><div className="testimonial-card">
          <div className="card-inner">
            <div className="card-front">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">
                I want to sincerely thank you for your support and dedication throughout the IGCSE Accounting course.
              </p>
              <div className="testimonial-author">
                <p className="author-name">Fares Elsyed</p>
                <p className="author-title">Student</p>
              </div>
            </div>
            <div className="card-back">
              <p className="testimonial-review">⭐⭐⭐⭐⭐ Highly recommend!</p>
            </div>
            
            
          </div>
        </div><div className="testimonial-card">
          <div className="card-inner">
            <div className="card-front">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">
                I want to sincerely thank you for your support and dedication throughout the IGCSE Accounting course.
              </p>
              <div className="testimonial-author">
                <p className="author-name">Fares Elsyed</p>
                <p className="author-title">Student</p>
              </div>
            </div>
            <div className="card-back">
              <p className="testimonial-review">⭐⭐⭐⭐⭐ Highly recommend!</p>
            </div>
            
            
          </div>
        </div><div className="testimonial-card">
          <div className="card-inner">
            <div className="card-front">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">
                I want to sincerely thank you for your support and dedication throughout the IGCSE Accounting course.
              </p>
              <div className="testimonial-author">
                <p className="author-name">Fares Elsyed</p>
                <p className="author-title">Student</p>
              </div>
            </div>
            <div className="card-back">
              <p className="testimonial-review">⭐⭐⭐⭐⭐ Highly recommend!</p>
            </div>
            
            
          </div>
        </div><div className="testimonial-card">
          <div className="card-inner">
            <div className="card-front">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">
                I want to sincerely thank you for your support and dedication throughout the IGCSE Accounting course.
              </p>
              <div className="testimonial-author">
                <p className="author-name">Fares Elsyed</p>
                <p className="author-title">Student</p>
              </div>
            </div>
            <div className="card-back">
              <p className="testimonial-review">⭐⭐⭐⭐⭐ Highly recommend!</p>
            </div>
            
            
          </div>
        </div>

        {/* كرري باقي الكروت هنا */}
      </div>
    </div>
  </div>
</section>



    

      {/* Contact Section */}
     <section style={{ ...styles.contactSection, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '50px', flexWrap: 'wrap' }}>
  {/* النص */}
  <div style={{ maxWidth: '500px', textAlign: 'left' }}>
    <h2 style={styles.sectionTitle}>Get in Touch</h2>
    <p style={styles.contactDescription}>
      Zeinab is looking forward to connecting with you. Let's talk about your next step!
    </p>
    <Link style={styles.contactButton} to="/Conect" className="btn btn-primary">
      Contact Zeinab
    </Link>
  </div>

  {/* الصورة */}
  <div style={{ maxWidth: '500px' }}>
    <img 
      src="/z33.png" 
      alt="Zeinab Profile" 
      style={{ width: '100%', borderRadius: '15px', objectFit: 'cover' }}
    />
  </div>
</section>

    </div>
    </div>
   
  );
};

// Styles
const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    color: '#f1ebebff',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0',
    overflowX: 'hidden',
    
  },
  heroSection: {
    position: 'relative',
    height: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    background: `linear-gradient(135deg, #eef2ff5d, #181a2065)`,
    color: 'white',
    overflow: 'hidden',

   
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: 1,
  },
  floatingIcon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '10rem',
    opacity: '0.1',
    zIndex: 1,
  },
  icon: {
    color: 'white',
  },
  heroContent: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '800px',
    padding: '0 20px',
  },
  heroTitle: {
    fontSize: '4rem',
    marginBottom: '10px',
    letterSpacing: '8px',
    fontWeight: '300',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
  },
  titleLine: { 
    display: 'block',
    fontSize: '1.8rem',
    letterSpacing: '10px',
    marginBottom: '10px',
    color:"#ffffff33"
  },
  titleName: { 
    display: 'block', 
    fontWeight: 'bold', 
    color: '#fff',
    fontSize: '5rem',
    letterSpacing: '5px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  },
  heroSubtitle: {
    fontSize: '1.5rem',
    marginBottom: '30px',
    letterSpacing: '3px',
    fontWeight: '300',
    color:"#ffffff79"
  },
  introSection: {
    padding: '80px 20px',
    backgroundColor: '#ffffff3f',
  },
  introContent: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  heroDescription: {
    lineHeight: '1.8',
    fontSize: '1.1rem',
  },
  paragraph: {
    marginBottom: '25px',
    color:"rgb(75, 109, 143)",
    fontFamily: "Oleo Script",
    fontSize:"30PX"

  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: '2.5rem',
    marginBottom: '15px',
    fontWeight: '300',
    letterSpacing: '2px',
    color:'#fff'
  },
  sectionSubtitle: {
    textAlign: 'center',
    fontSize: '1.8rem',
    marginBottom: '60px',
    color: 'rgba(30, 34, 37, 1)',
    textTransform: 'uppercase',
    letterSpacing: '3px',
    fontWeight: '500',
    fontFamily:"DM Serif Display"
  },
  servicesSection: { 
    fontFamily: "DM Serif Display",
  
    padding: '80px 20px', 
     background: `linear-gradient(135deg, #eef2ff, #181a20)`
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '40px',
    maxWidth: '1200px',
    margin: '0 auto',
    
fontFamily:"Oleo Script"
  },
  serviceCard: {
    backgroundColor: '#fff',
    padding: '40px 30px',
    borderRadius: '10px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
    textAlign: 'center',
    transition: 'transform 0.3s, box-shadow 0.3s',
    position: 'relative',
    overflow: 'hidden',
  },
  serviceIcon: {
    marginBottom: '20px',
    color: 'rgb(75, 109, 143)',
  },
  cardIcon: {
    fontSize: '3rem',
  },
  serviceTitle: { 
    fontSize: '1.5rem', 
    marginBottom: '20px', 
    color: 'rgb(75, 109, 143)',
    letterSpacing: '2px',
    fontFamily:"DM Serif Display"
  },
  serviceDescription: { 
    lineHeight: '1.7',
    color: '#000',
  },
  testimonialsSection: { 
    padding: '80px 20px',
    backgroundColor: '#fff',
  },
  testimonialsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '40px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  testimonialCard: {
    backgroundColor: '#f9f9f9',
    padding: '40px 30px',
    borderRadius: '10px',
    boxShadow: '0 5px 20px rgba(0, 0, 0, 0.05)',
    position: 'relative',
  },
  quoteIcon: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    fontSize: '4rem',
    color: 'rgb(75, 109, 143)',
    opacity: '0.2',
    fontFamily: 'Georgia, serif',
  },
  testimonialText: { 
    lineHeight: '1.7', 
    marginBottom: '25px',
    fontStyle: 'italic',
    color: '#444',
    fontSize: '1.2rem',
    paddingTop: '20px',
    fontFamily:"Oleo Script"
  },
  testimonialAuthor: { 
    textAlign: 'right' 
  },
  authorName: { 
    fontWeight: 'bold', 
    marginBottom: '5px',
    color: 'rgb(75, 109, 143)',
  },
  authorTitle: { 
    color: '#666', 
    fontSize: '0.9rem' 
  },
  contactSection: {
    padding: '80px 20px',
    background: `linear-gradient(135deg, #eef2ff, #181a20)`,
    textAlign: 'center',
  },
  contactDescription: { 
    marginBottom: '40px', 
    fontSize: '1.8rem',
    maxWidth: '600px',
    marginLeft: 'auto',
    marginRight: 'auto',
    lineHeight: '1.6',
    color: '#1b1717ff',
  },
  contactButton: {
    backgroundColor: 'rgb(75, 109, 143)',
    color: 'white',
    border: 'none',
    padding: '15px 40px',
    fontSize: '1.1rem',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.2s',
    fontWeight: '500',
    letterSpacing: '1px',
  },
  heroContent: {
  position: 'relative',
  zIndex: 2,
  display: 'flex', // مهم عشان الصورة والنص جنب بعض
  alignItems: 'center',
  justifyContent: 'space-between',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px',
},

heroImageWrapper: {
  flex: '0 0 50%', // الصورة تاخد نص مساحة الهيرو
},

heroImage: {
  width: '100%',
  height: 'auto',
  borderRadius: '15px',
  boxShadow: '0 15px 35px rgba(0,0,0,0.3)',
},

heroTextWrapper: {
  flex: '0 0 45%', // النص ياخد النص الباقي
  textAlign: 'left',
  color: '#fff',
},


};

// Add hover effects for service cards
const serviceCardHover = {
  transform: 'translateY(-10px)',
  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
};

// Apply hover effects
Object.assign(styles.serviceCard, {
  ':hover': serviceCardHover
});

export default MeetNadeem;