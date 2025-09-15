import React, { useEffect, useState } from "react";

const Media = () => {
  const images = [
    "https://live.staticflickr.com/65535/53613467352_227e4172c6_z.jpg",
    "https://live.staticflickr.com/65535/54270988347_4b195a30f0_n.jpg",
    "https://live.staticflickr.com/65535/54265832431_9413a6faed_w.jpg",
    "https://live.staticflickr.com/65535/53590036131_5e60e388ae_w.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  // لتغيير الصور كل 2 ثانية
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="media-container">
      {/* إعلان أعلى الصفحة */}
      {/* <section
        className="hero"
        style={{
          width: "80%",
          marginLeft: "100px",
          backgroundImage: `url(kkkk.jpg)`,
        }}
      >
        <div className="hero-overlay"></div>
      </section> */}

      {/* فيديوهات + معرض متغير */}
      <section className="media-grid">
        {/* فيديوهات */}
        <div className="videos">
          <div className="video-item">
            <video controls>
              <source src="./k.mp4" type="video/mp4" />
              متصفحك لا يدعم تشغيل الفيديو.
            </video>
          </div>
          <div className="video-item">
            <video controls>
              <source src="" type="video/mp4" />
              متصفحك لا يدعم تشغيل الفيديو.
            </video>
          </div>
          <div className="video-item">
            <video controls>
              <source src="" type="video/mp4" />
              متصفحك لا يدعم تشغيل الفيديو.
            </video>
          </div>
          
        </div>

        {/* مربع الصور المتغيرة */}
        <div className="slideshow">
          <img
            src={images[currentIndex]}
            alt="Slideshow"
            className="slideshow-image"
          />
        </div>
      </section>

      {/* ستايل داخلي */}
      <style>{`
        /* Grid Layout */
        .media-grid {
          display: grid;
          grid-template-columns: 2fr 1fr; /* فيديوهات على الشمال + مربع صور على اليمين */
          gap: 20px;
          padding: 30px;
          max-width: 1200px;
          margin: auto;
        }

        /* فيديوهات */
        .videos {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }

        .video-item video {
          width: 100%;
          height: 220px;
          border-radius: 12px;
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
          object-fit: cover;
        }

        /* Slideshow */
        .slideshow {
          display: flex;
          align-items: center;
          justify-content: center;
          background: #eef3f9;
          border-radius: 15px;
          padding: 10px;
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
        }

        .slideshow-image {
          width: 100%;
          height: 100%;
          border-radius: 12px;
          object-fit: cover;
          animation: fadeIn 1s ease-in-out;
        }

        /* انميشن */
        @keyframes fadeIn {
          from { opacity: 0.3; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Media;
