// src/pages/IGCSE.js
import React from "react";
import { Link } from "react-router-dom";

const IGCSE = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "'Poppins', sans-serif",
        flexDirection: "column",
        padding: "20px",
      }}
    >
      <h1
        style={{
          color: "#fff",
          fontSize: "3rem",
          textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Embark on your IGCSE journey!
      </h1>

      {/* Content Section */}
      <div
        style={{
          maxWidth: "800px",
          textAlign: "center",
          color: "#f0f0f0",
        }}
      >
        <p style={{ fontSize: "1.2rem", marginBottom: "15px" }}>
          Ready to build your financial future? <strong>Click Accounting</strong>{" "}
          to explore the principles of managing money and master the language of
          business.
        </p>
        <p style={{ fontSize: "1.2rem", marginBottom: "30px" }}>
          Curious about the digital world? <strong>Click ICT</strong> to learn
          Microsoft Office programs, and all the tech skills you need.
        </p>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <Link to="/IGCSEAccounting">
            <button
              style={{
                padding: "15px 35px",
                fontSize: "1.2rem",
                fontWeight: "600",
                background:
                  "linear-gradient(135deg, #936dfaff, #1a3344ff)",
                color: "#fff",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "translateY(-5px)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              Accounting
            </button>
          </Link>
          <Link to="/IGCSEict">
            <button
              style={{
                padding: "15px 35px",
                fontSize: "1.2rem",
                fontWeight: "600",
                background:
                  "linear-gradient(135deg, #936dfaff, #1a3344ff)",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "translateY(-5px)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              ICT
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IGCSE;
