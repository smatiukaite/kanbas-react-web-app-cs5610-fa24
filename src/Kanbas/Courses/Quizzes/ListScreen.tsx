import { BsGripVertical } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { useParams } from "react-router";
// import * as db from "../../Database"
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
// import { useState } from "react";
import { RxRocket } from "react-icons/rx";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { RiProhibited2Line } from "react-icons/ri";

export default function ListScreen() {
    const { cid } = useParams<{ cid: string }>();
    const navigate = useNavigate();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const userRole = currentUser?.role;

    //   const [assignments] = useState<any[]>(
    //     db.assignments.filter((assignment) => assignment.course === cid)
    //   );

    if (userRole === "FACULTY" || userRole === "ADMIN") {
        return (
            <div id="wd-quiz wd-container-margins">

                {/* TOP BUTTONS AND THE SEARCH */}
                {/* Two buttons */}
                <button id="wd-add-assignment-group" className="btn btn-md btn-secondary me-2 float-end">
                    <IoEllipsisVertical />
                </button>

                <button id="wd-add-quiz"
                    className="btn btn-md btn-danger me-2 float-end"
                    onClick={() => navigate(`/Kanbas/Courses/${cid}/Quizzes/QuizEditor`)}>
                    <FaPlus className="position-relative me-2 wd-bottom-padding" />
                    Quiz
                </button>

                <div>
                    {/* Search and the magnifier */}
                    <div className="wd-container">
                        <div className="wd-search-container">
                            <CiSearch className="wd-search-icon" />
                            <input
                                id="wd-search-quizzes"
                                placeholder="Search for Quiz"
                                className="wd-search-input" />
                        </div>
                    </div>
                </div>

                <hr />

                {/* QUIZES */}
                <ul id="wd-quizzes" className="list-group rounded-0">
                    <li className="wd-module list-group-item p-0 mb-3 fs-5 m-3 border-gray">
                        <div className="wd-title p-3 ps-2 bg-secondary">
                            <BsGripVertical className="me-2 fs-3" />
                            Assignment Quizzes
                            {/* <ModuleControlButtons
                moduleId="quiz-module-id" // replace with actual ID if available
                deleteModule={(id) => console.log("Delete module with ID:", id)}
                editModule={(id) => console.log("Edit module with ID:", id)}
              /> */}
                        </div>

                        {/* <ul className="wd-lessons list-group rounded-0">
              <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <RxRocket color="green" /> */}
                        <ul className="wd-lessons list-group rounded-0">
                            <li
                                className="wd-lesson list-group-item p-3 ps-1"
                                onClick={() => navigate(`/Kanbas/Courses/${cid}/Quizzes/QuizDetails`)}
                                style={{ cursor: "pointer" }}
                            >
                                &nbsp;
                                Quiz 1

                                {/* <div className="wd-float-left wd-padding">
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
                      <div className="wd-float-right"> */}

                                {/* GREEN AND RED ICONS */}
                                <div className="float-end">
                                    <GreenCheckmark />
                                    <RiProhibited2Line color="red" size={23} />

                                    {/* DROPDOWN MENU FOR EDITING A QUIZ */}
                                    <div className="dropdown float-end">
                                        <IoEllipsisVertical
                                            className="fs-4 dropdown-toggle"
                                            type="button"
                                            id="dropdownMenuButton"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                            onClick={(e) => e.stopPropagation()} // Prevents the click from propagating to the parent `li`
                                        />
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <li><a className="dropdown-item" href="#Edit">Edit</a></li>
                                            <li><a className="dropdown-item" href="#Delete">Delete</a></li>
                                            <li><a className="dropdown-item" href="#Publish">Publish</a></li>
                                            <li><a className="dropdown-item" href="#Copy">Copy</a></li>
                                            <li><a className="dropdown-item" href="#Sort">Sort</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>

            </div>
        );
    }

    // THE REST OF THE USERS VIEW
    else {
        return (
            <div id="wd-quizzes wd-container-margins">

                {/* Two buttons */}
                <button id="wd-add-quizzes-group"
                    className="btn btn-md btn-secondary me-2 float-end">
                    <FaPlus className="position-relative me-2 wd-bottom-padding" />
                    Group</button>

                <div>
                    {/* Search and the magnifier */}
                    <div className="wd-flex-containe">
                        <div className="wd-search-container">
                            <CiSearch className="wd-search-icon" />
                            <input
                                id="wd-search-quizzes"
                                placeholder="Search for Quiz"
                                className="wd-search-input" />
                        </div>
                    </div>
                </div>


                {/* QUIZES */}
                <ul id="wd-modules" className="list-group rounded-0">
                    <li className="wd-module list-group-item p-0 mb-3 fs-5 m-3 border-gray">
                        <div className="wd-title p-3 ps-2 bg-secondary">
                            <BsGripVertical className="me-2 fs-3" />
                            Assignment Quizzes
                        </div>

                        <ul className="wd-lessons list-group rounded-0">
                            <li
                                className="wd-lesson list-group-item p-3 ps-1"
                                onClick={() => navigate(`/Kanbas/Courses/${cid}/Quizzes/quizDetails`)}

                                style={{ cursor: "pointer" }}
                            >
                                <BsGripVertical className="me-2 fs-3" />
                                <RxRocket color="green" />
                                &nbsp;
                                Quiz 1
                                <div className="float-end">
                                    <GreenCheckmark />
                                    <IoEllipsisVertical className="fs-4" />
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>

            </div>
        );
    }
}
