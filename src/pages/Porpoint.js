import React, { useState } from "react";
import YouTube from "react-youtube";

const videos = [
  "ogvJD7Aw434", // الفيديو الأول
  "Y-Is2M0P7i0", // الفيديو الثاني
  // أضف باقي الفيديوهات هنا بنفس الطريقة
];

const Porpoint = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleEnded = () => {
    if (currentVideo < videos.length - 1) {
      setCurrentVideo(currentVideo + 1);
    }
  };

  const handleNext = () => {
    if (currentVideo < videos.length - 1) {
      setCurrentVideo(currentVideo + 1);
    }
  };

  const handlePrev = () => {
    if (currentVideo > 0) {
      setCurrentVideo(currentVideo - 1);
    }
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  const opts = {
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        background: "#0d1117",
        color: "#fff",
        padding: "20px",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>
        📊 PowerPoint Course Video {currentVideo + 1} / {videos.length}
      </h2>

      {/* الفيديو */}
      <div style={{ width: "100%", maxWidth: "900px", aspectRatio: "16/9" }}>
        <YouTube
          videoId={videos[currentVideo]}
          opts={opts}
          onEnd={handleEnded}
          style={{ borderRadius: "12px", overflow: "hidden" }}
        />
      </div>

      {/* أزرار التنقل */}
      <div style={{ marginTop: "20px", display: "flex", gap: "15px" }}>
        <button
          onClick={handlePrev}
          disabled={currentVideo === 0}
          style={{
            padding: "10px 20px",
            border: "none",
            borderRadius: "8px",
            cursor: currentVideo === 0 ? "not-allowed" : "pointer",
            background: currentVideo === 0 ? "#444" : "#ff6a00",
            color: "#fff",
          }}
        >
          ⬅️ السابق
        </button>
        <button
          onClick={handleNext}
          disabled={currentVideo === videos.length - 1}
          style={{
            padding: "10px 20px",
            border: "none",
            borderRadius: "8px",
            cursor: currentVideo === videos.length - 1 ? "not-allowed" : "pointer",
            background: currentVideo === videos.length - 1 ? "#444" : "#ff6a00",
            color: "#fff",
          }}
        >
          التالي ➡️
        </button>
      </div>

      {/* قسم التعليقات */}
      <div style={{ marginTop: "40px", width: "100%", maxWidth: "700px" }}>
        <h3>💬 التعليقات</h3>
        <form
          onSubmit={handleAddComment}
          style={{
            display: "flex",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          <input
            type="text"
            placeholder="اكتب تعليقك..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              border: "none",
              borderRadius: "8px",
              background: "#ff6a00",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            إضافة
          </button>
        </form>

        <ul style={{ listStyle: "none", padding: 0 }}>
          {comments.map((comment, index) => (
            <li
              key={index}
              style={{
                background: "rgba(255,255,255,0.1)",
                padding: "10px",
                borderRadius: "8px",
                marginBottom: "10px",
              }}
            >
              • {comment}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Porpoint;
