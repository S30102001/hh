// src/pages/AdminBookings.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminBookings.css";

const AdminBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [courses, setCourses] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [showStudentModal, setShowStudentModal] = useState(false);
  const [showCourseModal, setShowCourseModal] = useState(false);

  const [newStudent, setNewStudent] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Courses: "",
    Paid: false,
  });

  const [newCourse, setNewCourse] = useState({
    Title: "",
    Description: "",
    IsPaid: false,
    Type: "",
  });

  // Fetch data
  const fetchBookings = async () => {
    try {
      const res = await axios.get("https://localhost:7155/api/bookings");
      setBookings(res.data);
    } catch (err) {
      setBookings([]);
    }
  };

  const fetchCourses = async () => {
    try {
      const res = await axios.get("https://localhost:7155/api/courses");
      setCourses(res.data);
    } catch (err) {
      setCourses([]);
    }
  };

  useEffect(() => {
    fetchBookings();
    fetchCourses();
  }, []);

  // Toggle payment
  const togglePaid = async (b) => {
    try {
      await axios.put(`https://localhost:7155/api/bookings/${b.Id}`, {
        ...b,
        Paid: !b.Paid,
      });
      fetchBookings();
    } catch (err) {
      console.error(err);
    }
  };

  // Delete student
  const deleteBooking = async (id) => {
    try {
      await axios.delete(`https://localhost:7155/api/bookings/${id}`);
      fetchBookings();
    } catch (err) {
      console.error(err);
    }
  };

  // Add course
  const addCourse = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.post("https://localhost:7155/api/courses/add", newCourse, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setNewCourse({ Title: "", Description: "", IsPaid: false, Type: "" });
      setShowCourseModal(false);
      fetchCourses();
    } catch (err) {
      console.error(err);
      alert("Failed to add course");
    }
  };

  // Add student
  const addStudent = async () => {
    try {
      await axios.post("https://localhost:7155/api/bookings", newStudent);
      setNewStudent({
        Name: "",
        Email: "",
        Phone: "",
        Courses: "",
        Paid: false,
      });
      setShowStudentModal(false);
      fetchBookings();
    } catch (err) {
      console.error(err);
      alert("Failed to add student");
    }
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="tables-section">
        {/* Students Table */}
        <div className="card-table">
          <h2>Students</h2>
          <button
            className="btn btn-add"
            onClick={() => setShowStudentModal(true)}
          >
            ➕ Add Student
          </button>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Paid</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b) => (
                <tr key={b.Id} onClick={() => setSelectedBooking(b)}>
                  <td>{b.Name}</td>
                  <td>{b.Email}</td>
                  <td>{b.Paid ? "Yes" : "No"}</td>
                  <td>
                    <button
                      className="btn btn-toggle"
                      onClick={(e) => {
                        e.stopPropagation();
                        togglePaid(b);
                      }}
                    >
                      {b.Paid ? "Mark Unpaid" : "Mark Paid"}
                    </button>
                    <button
                      className="btn btn-delete"
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteBooking(b.Id);
                      }}
                    >
                      ❌ Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Courses Table */}
        <div className="card-table">
          <h2>Courses</h2>
          <button
            className="btn btn-add"
            onClick={() => setShowCourseModal(true)}
          >
            ➕ Add Course
          </button>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Paid</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((c) => (
                <tr key={c.Id}>
                  <td>{c.Title}</td>
                  <td>{c.IsPaid ? "Yes" : "No"}</td>
                  <td>{c.Type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Student Modal */}
      {showStudentModal && (
        <div className="modal-overlay" onClick={() => setShowStudentModal(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h2>Add Student</h2>
            <label>Name</label>
            <input
              type="text"
              value={newStudent.Name}
              onChange={(e) =>
                setNewStudent({ ...newStudent, Name: e.target.value })
              }
            />
            <label>Email</label>
            <input
              type="email"
              value={newStudent.Email}
              onChange={(e) =>
                setNewStudent({ ...newStudent, Email: e.target.value })
              }
            />
            <label>Phone</label>
            <input
              type="text"
              value={newStudent.Phone}
              onChange={(e) =>
                setNewStudent({ ...newStudent, Phone: e.target.value })
              }
            />
            <label>Courses</label>
            <input
              type="text"
              value={newStudent.Courses}
              onChange={(e) =>
                setNewStudent({ ...newStudent, Courses: e.target.value })
              }
            />
            <div className="modal-actions">
              <button className="btn btn-save" onClick={addStudent}>
                Save
              </button>
              <button
                className="btn btn-cancel"
                onClick={() => setShowStudentModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Course Modal */}
      {showCourseModal && (
        <div className="modal-overlay" onClick={() => setShowCourseModal(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h2>Add Course</h2>
            <label>Title</label>
            <input
              type="text"
              value={newCourse.Title}
              onChange={(e) =>
                setNewCourse({ ...newCourse, Title: e.target.value })
              }
            />
            <label>Description</label>
            <textarea
              value={newCourse.Description}
              onChange={(e) =>
                setNewCourse({ ...newCourse, Description: e.target.value })
              }
            ></textarea>
            <label>Type</label>
            <input
              type="text"
              value={newCourse.Type}
              onChange={(e) =>
                setNewCourse({ ...newCourse, Type: e.target.value })
              }
            />
            <label>
              <input
                type="checkbox"
                checked={newCourse.IsPaid}
                onChange={(e) =>
                  setNewCourse({ ...newCourse, IsPaid: e.target.checked })
                }
              />{" "}
              Paid
            </label>
            <div className="modal-actions">
              <button className="btn btn-save" onClick={addCourse}>
                Save
              </button>
              <button
                className="btn btn-cancel"
                onClick={() => setShowCourseModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminBookings;
