// StudentBooking.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./StudentBooking.css";

const StudentBooking = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    courses: [],
    level: "",
    notes: "",
  });

  const [coursesList, setCoursesList] = useState([]);
  const [submitting, setSubmitting] = useState(false);

  // 🔹 جلب الكورسات من الباك عند تحميل الصفحة
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get("https://localhost:7155/api/courses");
        setCoursesList(res.data);
      } catch (err) {
        console.error("❌ Failed to fetch courses:", err);
        setCoursesList([]);
      }
    };
    fetchCourses();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      let updatedCourses = [...formData.courses];
      if (checked) updatedCourses.push(value);
      else updatedCourses = updatedCourses.filter(c => c !== value);
      setFormData({ ...formData, courses: updatedCourses });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // إرسال البيانات للباك
      await axios.post("https://localhost:7155/api/bookings", {
        Name: formData.fullName,
        Email: formData.email,
        Phone: formData.phone,
        Courses: formData.courses,
        Level: formData.level,
        Notes: formData.notes,
        Paid: false,
      });

      alert("✅ Booking submitted successfully!");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        dob: "",
        gender: "",
        courses: [],
        level: "",
        notes: "",
      });
    } catch (err) {
      console.error("❌ Submission error:", err);
      alert("❌ Failed to submit booking. Check console for details.");
    }

    setSubmitting(false);
  };

  return (
    <div className="booking-container">
      <h1>حجز دورة للطلاب</h1>
      <form onSubmit={handleSubmit}>
        <input name="fullName" value={formData.fullName} onChange={handleChange} placeholder="الاسم الكامل" required />
        <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="البريد الإلكتروني" required />
        <input name="phone" value={formData.phone} onChange={handleChange} placeholder="الهاتف" required />
        <input name="dob" type="date" value={formData.dob} onChange={handleChange} />
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="">--اختر الجنس--</option>
          <option value="Male">ذكر</option>
          <option value="Female">أنثى</option>
          <option value="Other">أخرى</option>
        </select>

        {/* 🔹 عرض الكورسات */}
        <div className="checkbox-group">
          {coursesList.length > 0 ? (
            coursesList.map((c) => (
              <label key={c.Id}>
                <input
                  type="checkbox"
                  name="courses"
                  value={c.Title}
                  checked={formData.courses.includes(c.Title)}
                  onChange={handleChange}
                />
                {c.Title} {c.IsPaid ? "(مدفوع)" : "(مجاني)"}
              </label>
            ))
          ) : (
            <p>جاري تحميل الكورسات...</p>
          )}
        </div>

        <select name="level" value={formData.level} onChange={handleChange}>
          <option value="">--اختر المستوى--</option>
          <option value="Beginner">مبتدئ</option>
          <option value="Intermediate">متوسط</option>
          <option value="Advanced">متقدم</option>
        </select>

        <textarea name="notes" value={formData.notes} onChange={handleChange} placeholder="ملاحظات إضافية" />

        <button type="submit" disabled={submitting}>
          {submitting ? "جاري الإرسال..." : "إرسال الحجز"}
        </button>
      </form>
    </div>
  );
};

export default StudentBooking;
