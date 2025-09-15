import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import MeetNadeem from "./pages/MeetNadeem";
import Testimonials from "./pages/Testimonials"
import Conect from "./pages/Conect"
import LifeCourses from "./pages/LifeCourses"
import CoursesSectionv from "./pages/CoursesSectionv"
import StudentBooking from "./pages/StudentBooking"
import Media from "./pages/Media"
import CoursesSection from "./pages/CoursesSection"
import Courses from "./pages/Courses"
import Porpoint from "./pages/Porpoint"
import Outlook from "./pages/Outlook"
import Word from "./pages/word"
import FreeCourses from "./pages/FreeCourses"
import IGCSE from "./pages/IGCSE"
import IGCSEAccounting from "./pages/IGCSEAccounting"
import IGCSEict from "./pages/IGCSEict"
import AdminBookings from "./pages/AdminBookings"
// باقي الصفحات 
import './App.css'
function App() {
  return (
    <div  className="App">
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/home" element={<Home />} />
          <Route path="/MeetNadeem" element={<MeetNadeem />} />
  <Route path="/AdminBookings" element={<AdminBookings />} />

          <Route path="/Testimonials" element={<Testimonials />} />
          <Route path="/IGCSEict" element={<IGCSEict />} />
          <Route path="/IGCSE" element={<IGCSE />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Conect" element={<Conect />} />
        <Route path="/Life-Courses" element={<LifeCourses  />} />
        <Route path="/CoursesSectionv" element={<CoursesSectionv  />} />
        <Route path="/StudentBooking" element={<StudentBooking  />} />
        <Route path="/CoursesSection" element={<CoursesSection  />} />
         <Route path="/IGCSEAccounting" element={<IGCSEAccounting  />} />
           <Route path="/Media" element={<Media  />} />
           <Route path="/Courses" element={<Courses  />} />
  <Route path="/Porpoint" element={<Porpoint  />} />
  <Route path="/Outlook" element={<Outlook  />} />
   <Route path="/Word" element={<Word  />} />
   <Route path="/FreeCourses" element={<FreeCourses  />} />
        {/* باقي الصفحات */}
      </Routes>
    </div>
  );
}

export default App;
