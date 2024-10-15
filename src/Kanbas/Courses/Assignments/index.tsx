import ModuleControlButtons from "../Modules/ModuleControlButtons";
import LessonControlButtons from "../Modules/LessonControlButton";
import { BsGripVertical } from "react-icons/bs";
import { GrNotes } from "react-icons/gr";
import { IoEllipsisVertical } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { useParams } from "react-router";
import * as db from "../../Database"

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === cid);

  return (
    <div id="wd-assignments wd-container-margins">

      {/* Two buttons */}
      <button id="wd-add-assignment" className="btn btn-md btn-danger me-3 float-end">
        <FaPlus className="position-relative me-2 wd-bottom-padding" />
        Assignment</button>
      <button id="wd-add-assignment-group" className="btn btn-md btn-secondary me-2 float-end">
        <FaPlus className="position-relative me-2 wd-bottom-padding" />
        Group</button>

      <div>
        {/* Search and the magnifier */}
        <div className="wd-flex-containe">
          <div className="wd-search-container">
            <CiSearch className="wd-search-icon" />
            <input
              id="wd-search-assignment"
              placeholder="Search..."
              className="wd-search-input" />
          </div>
        </div>
      </div>

      {/* ASSIGNMENTS */}
      <ul id="wd-modules" className="list-group rounded-0 mt-2">
        <li className="wd-module list-group-item p-0 mb-3 fs-5 m-3 border-gray">
          <div className="wd-title p-2 ps-2 bg-secondary">
            <div>
              <div className="wd-float-left">
                <BsGripVertical className="me-2 fs-3" />
              </div>
              <div className="wd-float-left wd-bold-text2">
                ASSIGNMENTS
              </div>
              <div className="wd-float-right">
                <IoEllipsisVertical className="fs-4 float-end" />
              </div>
              <div className="wd-float-right">
                <button id="wd-add-btn" className="btn btn-md btn-secondary me-1 float-end">
                  <FaPlus className="position-relative me-2 wd-bottom-padding" /></button>
              </div>
              <div className="wd-float-right wd-border-text" id="wd-assignments-title"> 40% of Total
              </div>
              <div className="wd-float-done"></div>
            </div>
          </div>

          {/* A1 */}
          {assignments.map((assignment) => (
            <ul key={assignment._id} className="wd-lessons list-group rounded-0">
              <li className="wd-lesson list-group-item p-3 ps-1">
                <div>
                  <div>
                    <div className="wd-float-left">
                      <BsGripVertical className="me-2 fs-3" />
                    </div>

                    <div className="wd-float-left">
                      <GrNotes />
                    </div>

                    <div className="wd-float-left wd-padding">
                      <a className="wd-assignment-link wd-title-texts"
                        href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                        {assignment.title}
                      </a>
                      <p>
                        <a className="wd-assignment-link wd-title-texts wd-subtext"
                          href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                          Multiple modules
                        </a>
                        &nbsp;|&nbsp; <b>Not available until </b> {assignment.until} |<br></br>
                        <b>Due</b> {assignment.due} | {assignment.points}
                      </p>
                    </div>
                    <div className="wd-float-right">
                      <LessonControlButtons />
                    </div>
                    <div className="wd-float-done"></div>
                  </div>
                </div>
              </li>
            </ul>
          ))}
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
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <GrNotes /> Quiz 2
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <GrNotes /> Quiz 3
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <GrNotes /> Quiz 3
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <GrNotes /> Quiz 3
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <GrNotes /> Quiz 3
              <LessonControlButtons />
            </li>
          </ul>
        </li>
      </ul>

      {/* EXAMS */}
      <ul id="wd-modules-exams" className="list-group rounded-0">
        <li className="wd-module-exams list-group-item p-0 mb-3 fs-5 m-3 border-gray">
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
            <li className="wd-lesson list-group-item p-3 ps-1">
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