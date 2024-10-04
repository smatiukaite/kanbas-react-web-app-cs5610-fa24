import { Link } from "react-router-dom";

export default function CoursesNavigation() {
  return (
    <div id="wd-courses-navigation">
      <Link id="wd-course-home-link" to="/Kanbas/Courses/5610/Home">Home</Link><br />
      <Link id="wd-course-modules-link" to="/Kanbas/Courses/5610/Modules">Modules
      </Link><br />
      <Link id="wd-course-piazza-link" to="/Kanbas/Courses/5610/Piazza">Piazza</Link><br />
      <Link id="wd-course-zoom-link" to="/Kanbas/Courses/5610/Zoom">Zoom</Link><br />
      <Link id="wd-course-quizzes-link" to="/Kanbas/Courses/5610/Assignments">
        Assignments</Link><br />
      <Link id="wd-course-assignments-link" to="/Kanbas/Courses/5610/Quizzes">Quizzes
      </Link><br />
      <Link id="wd-course-grades-link" to="/Kanbas/Courses/5610/Grades">Grades</Link><br />
      <Link id="wd-course-people-link" to="/Kanbas/People">People</Link><br />
    </div>
  );
}
