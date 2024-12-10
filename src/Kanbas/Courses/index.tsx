import Modules from "./Modules";
import CoursesNavigation from "./Navigation";
import Home from "./Home";
import Assignments from "./Assignments";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";
import ListScreen from "./Quizzes/ListScreen";
import QuizDetails from "./Quizzes/QuizDetails";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import QuizEditor from "./Quizzes/QuizEditor";
import QuizPreview from "./Quizzes/QuizPreview";

// Use the courses that are passed to us
export default function Courses({ courses }: { courses: any[]; }) {
  const { cid } = useParams();
  const course = courses.find((course: any) => course._id === cid);
  const { pathname } = useLocation();

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name} &gt; {pathname.split("/")[4]}</h2><hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/Detail/:aid" element={<AssignmentEditor />} />
            <Route path="Quizzes" element={<ListScreen />} />
            <Route path="Quizzes/Detail/:qid" element={<QuizDetails />} />
            <Route path="Quizzes/Editor/:qid" element={<QuizEditor />} />
            <Route path="Quizzes/Preview/:qid" element={<QuizPreview />} />
            <Route path="People" element={<PeopleTable />} />
          </Routes>
        </div></div>
    </div>
  );
}