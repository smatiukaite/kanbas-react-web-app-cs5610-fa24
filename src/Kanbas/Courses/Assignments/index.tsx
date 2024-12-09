// import ModuleControlButtons from "../Modules/ModuleControlButtons";
import LessonControlButtons from "../Modules/LessonControlButton";
import { BsGripVertical } from "react-icons/bs";
import { GrNotes } from "react-icons/gr";
import { IoEllipsisVertical } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { useParams } from "react-router";
import * as db from "../../Database"
import { useSelector } from "react-redux";
import { useState } from "react";
// import AssignmentControls from "./AssignmentControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { addAssignment, editAssignment, updateAssignment, deleteAssignment } from "./reducer";

export default function Assignments() {
  const { cid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const userRole = currentUser?.role;

  const [assignments, setAssignments] = useState<any[]>(
    db.assignments.filter((assignment: any) => assignment.course === cid)
  );

  const [assignmentName, setAssignmentName] = useState("");
  const addAssignment = () => {
    setAssignments([...assignments, {
      _id: new Date().getTime().toString(),
      name: assignmentName, course: cid, lessons: []
    }]);
    setAssignmentName("");
  };
  // const [assignmentName, setAssignmentName] = useState("");
  // const addModule = () => {
  //   setAssignments([...assignments, {
  //     _id: new Date().getTime().toString(),
  //     name: assignmentName, course: cid, lessons: []
  //   }]);
  //   setAssignmentName("");
  // };

  // const deleteAssignment = (assignmentId: string) => {
  //   setAssignments(assignments.filter((a) => a._id !== assignmentId));
  // };

  if (userRole === "FACULTY") {
    return (
      <div id="wd-assignments wd-container-margins">
        {/* Two buttons */}

        {/* <AssignmentControls setAssignmentName={setAssignmentName} assignmentName={assignmentName} addAssignment={addAssignment} /> */}
        {/* ASSIGNMENTS */}
        <ul id="wd-modules" className="list-group rounded-0 mt-2">
          <li className="wd-module list-group-item p-0 mb-3 fs-5 m-3 border-gray">
            <div className="wd-title p-2 ps-1 bg-secondary">
              <div>
                <div className="wd-float-left">
                  <BsGripVertical className="me-2 fs-3" />
                </div>
                <div className="wd-float-left wd-bold-text2">
                  ASSIGNMENTS
                </div>
                <div className="wd-float-right">
                  <IoEllipsisVertical className="fs-4 mt-2 me-2 float-end" />
                </div>
                <div className="wd-float-right">
                  <button id="wd-add-btn" className="btn btn-md btn-secondary float-end">
                    <FaPlus className="position-relative me-2 wd-bottom-padding" /></button>
                </div>
                {/* <div className="wd-border-text" id="wd-assignments-title">
                  40% of Total
                </div> */}
                <div className="wd-float-done"></div>
              </div>
            </div>

            {/* A1 */}
            {assignments.map((assignment: any) => (
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
                        <AssignmentControlButtons
                          assignmentId={assignment._id}
                          deleteAssignment={deleteAssignment} />

                      </div>
                      <div className="wd-float-done"></div>
                    </div>
                  </div>
                </li>
              </ul>
            ))}
          </li>
        </ul>
      </div>
    );
  }

  // THE REST OF THE USERS VIEW
  else {
    return (
      <div id="wd-assignments wd-container-margins">

        {/* Button and search */}
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
            <div className="wd-title p-2 ps-1 bg-secondary">
              <div>
                <div className="wd-float-left">
                  <BsGripVertical className="me-2 fs-3" />
                </div>
                <div className="wd-float-left wd-bold-text2">
                  ASSIGNMENTS
                </div>
                <div className="wd-float-right">
                  <IoEllipsisVertical className="fs-4 mt-2 me-2 float-end" />
                </div>
                <div className="wd-float-right">
                  <button id="wd-add-btn" className="btn btn-md btn-secondary float-end">
                    <FaPlus className="position-relative me-2 wd-bottom-padding" /></button>
                </div>
                {/* <div className="wd-border-text" id="wd-assignments-title">
                  40% of Total
                </div> */}
                <div className="wd-float-done"></div>
              </div>
            </div>

            {/* A1 */}
            {assignments.map((assignment: any) => (
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
                        <a href={`/assignments/${assignment.id}`} className="wd-assignment-link wd-title-texts">
                          {assignment.title}
                        </a>
                        <p>
                          <a href={`/modules/${assignment.moduleId}`} className="wd-assignment-link wd-title-texts wd-subtext">
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

      </div>
    );
  }
}