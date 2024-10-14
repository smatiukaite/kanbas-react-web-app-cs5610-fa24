import { Link, useParams, useLocation } from "react-router-dom";
import { courses } from "../Database";

export default function CoursesNavigation() {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const location = useLocation();

  const links = [
    { name: "Home", path: "Home" },
    { name: "Modules", path: "Modules" },
    { name: "Piazza", path: "Piazza" },
    { name: "Zoom", path: "Zoom" },
    { name: "Assignments", path: "Assignments" },
    { name: "Quizzes", path: "Quizzes" },
    { name: "Grades", path: "Grades" },
    { name: "People", path: "People" }
  ];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/Courses/${course?._id}/${link.path}`}
          className={`list-group-item border-0 ${location.pathname.includes(link.path) ? "active" : "text-danger"}`}>
          {link.name}
        </Link>
      ))}
    </div>
  );
}
