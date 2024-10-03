import ModuleControlButtons from "../Modules/ModuleControlButtons";
import LessonControlButtons from "../Modules/LessonControlButton";
import { BsGripVertical } from "react-icons/bs";
import { GrNotes } from "react-icons/gr";
import { IoEllipsisVertical } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";

export default function Assignments() {
  return (
    <div id="wd-assignments"><CiSearch />
      <input id="wd-search-assignment" placeholder="Search..." />

      <button id="wd-add-assignment" className="btn btn-md btn-danger me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment</button>
      <button id="wd-add-assignment-group" className="btn btn-md btn-secondary me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group</button>

      {/* ASSIGNMENTS */}
      <ul id="wd-modules" className="list-group rounded-0 ">
        <li className="wd-module list-group-item p-0 mb-3 fs-5 m-3 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            ASSIGNMENTS

            <IoEllipsisVertical className="fs-4 float-end" />
            <button id="wd-add-btn" className="btn btn-md btn-secondary me-1 float-end">
              <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} /></button>
            <h6 id="wd-assignments-title"> 40% of Total </h6>
          </div>


          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <GrNotes />
              <a className="wd-assignment-link"
                href="#/Kanbas/Courses/CS5010/Assignments/123"> A1 - ENV + HTML
              </a>

              <div>
                Multiple modules | <b>Not available until </b> May 6 at 12:00 am |
                <br />
                <b>Due</b> May 13 at 11:59 pm | 100 pts
              </div>
              <LessonControlButtons />
            </li>

            {/* A2 */}
            <li className="wd-content-item list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <GrNotes />
              <a className="wd-assignment-link"
                href="#/Kanbas/Courses/CS5010/Assignments/123">
                A2 - CSS + BOOTSTRAP
              </a>
              <div>
                Multiple modules | <b>Not available until </b> May 13 at 12:00 am |
                <br />
                <b>Due</b> May 20 at 11:59 pm | 100 pts
              </div>
              <LessonControlButtons />
            </li>

            {/* A3 */}
            <li className="wd-content-item list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <GrNotes />
              <a className="wd-assignment-link"
                href="#/Kanbas/Courses/CS5010/Assignments/123">
                A3 - JAVASCRIPT + REACT
              </a>
              <div>
                Multiple modules | <b>Not available until </b> May 20 at 12:00 am |
                <br />
                <b>Due</b> May 27 at 11:59 pm | 100 pts
              </div>
              <LessonControlButtons />
            </li>

            {/* A4 */}
            <li className="wd-content-item list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <GrNotes />
              <a className="wd-assignment-link"
                href="#/Kanbas/Courses/CS5010/Assignments/123">
                A4 - GITHUB ACTIONS
              </a>
              <div>
                Multiple modules | <b>Not available until </b> May 28 at 12:00 am |
                <br />
                <b>Due</b> June 06 at 11:59 pm | 100 pts
              </div>
              <LessonControlButtons />
            </li>

            {/* A5 */}
            <li className="wd-content-item list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <GrNotes />
              <a className="wd-assignment-link"
                href="#/Kanbas/Courses/CS5010/Assignments/123">
                A5 - NETLIFY
              </a>
              <div>
                Multiple modules | <b>Not available until </b> June 06 at 12:00 am |
                <br />
                <b>Due</b> June 12 at 11:59 pm | 100 pts
              </div>
              <LessonControlButtons />
            </li>

            {/* A6 */}
            <li className="wd-content-item list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <GrNotes />
              <a className="wd-assignment-link"
                href="#/Kanbas/Courses/CS5010/Assignments/123">
                A6 - NODE JS
              </a>
              <div>
                Multiple modules | <b>Not available until </b> June 12 at 12:00 am |
                <br />
                <b>Due</b> June 16 at 11:59 pm | 100 pts
              </div>
            </li>
          </ul>
        </li>
      </ul>


      {/* QUIZES */}
      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-3 fs-5 m-3 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            QUIZES
            <ModuleControlButtons />
          </div>


          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <GrNotes /> Quiz 1
              <LessonControlButtons />
            </li>
            <li className="wd-content-item list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <GrNotes /> Quiz 2
              <LessonControlButtons />
            </li>
            <li className="wd-content-item list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <GrNotes /> Quiz 3
              <LessonControlButtons />
            </li>
            <li className="wd-content-item list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <GrNotes /> Quiz 3
              <LessonControlButtons />
            </li>
            <li className="wd-content-item list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <GrNotes /> Quiz 3
              <LessonControlButtons />
            </li>
            <li className="wd-content-item list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <GrNotes /> Quiz 3
              <LessonControlButtons />
            </li>
          </ul>
        </li>
      </ul>

      {/* EXAMS */}
      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-3 fs-5 m-3 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            EXAMS
            <ModuleControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <GrNotes /> Exam 1
              <LessonControlButtons />
            </li>
            <li className="wd-content-item list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <GrNotes /> Exam 2
              <LessonControlButtons />
            </li>
          </ul>
        </li>
      </ul>

    </div>
  );
}

