import { BsGripVertical } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { RxRocket } from "react-icons/rx";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { RiProhibited2Line } from "react-icons/ri";
import { setQuizzes, deleteQuiz } from "./reducer";
import { useEffect, useState } from "react";
import * as db from "../../Database"
import QuizControls from "./QuizControls";

export default function ListScreen() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const userRole = currentUser?.role;
    const { cid } = useParams<{ cid: string }>();
    const navigate = useNavigate();
    const { quizzes, isInitialized } = useSelector((state: any) => state.quizReducer);
    const dispatch = useDispatch();
    const [quizName, setQuizName] = useState("");
    const [quiz, setQuiz] = useState(db.quizzes);

    const createQuiz = () => {
        setQuizzes([...quizzes, {
            _id: new Date().getTime().toString(),
            name: quizName, course: cid, lesson: []
        }]);
    };

    //   const [assignments] = useState<any[]>(
    //     db.assignments.filter((assignment) => assignment.course === cid)
    //   );

    const getNextId = () => {
        if (quizzes.length === 0) return 1; // Default to 1 if no assignments
        const maxId = Math.max(...quizzes.map((quiz: any) => Number(quiz._id || 0)));
        return maxId + 1;
    };

    const fetchQuizzes = async () => {
        const dbQuizzes = db.quizzes.filter((quizzes: any) => quizzes.course === cid)
        dispatch(setQuizzes(dbQuizzes));
    };

    useEffect(() => {
        if (!isInitialized) {
            fetchQuizzes();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (userRole === "FACULTY") {
        return (
            <div id="wd-quiz wd-container-margins">
                <div>
                    <QuizControls cid={cid!} />
                </div>

                {/* TOP BUTTONS AND THE SEARCH */}
                {/* Two buttons */}
                {/* <button id="wd-add-assignment-group" className="btn btn-md btn-secondary me-2 float-end">
                    <IoEllipsisVertical />
                </button>

                {/* <button id="wd-add-quiz"
                    className="btn btn-md btn-danger me-2 float-end"
                    onClick={() => navigate(/Kanbas/Courses/${cid}/Quizzes/QuizEditor)}>
                    <FaPlus className="position-relative me-2 wd-bottom-padding" />
                    Quiz
                </button> */}

                {/* <div> */}
                {/* Search and the magnifier */}
                {/* <div className="wd-container">
                        <div className="wd-search-container">
                            <CiSearch className="wd-search-icon" />
                            <input
                                id="wd-search-quizzes"
                                placeholder="Search for Quiz"
                                className="wd-search-input" />
                        </div>
                    </div>
                </div> */}

                <hr />

                {/* QUIZES */}
                <ul id="wd-quizzes" className="list-group rounded-0">
                    <li className="wd-module list-group-item p-0 mb-3 fs-5 m-3 border-gray">
                        <div className="wd-title p-3 ps-2 bg-secondary">
                            <BsGripVertical className="me-2 fs-3" />
                            <b>Assignment Quizzes</b>
                            {/* <ModuleControlButtons
                moduleId="quiz-module-id" // replace with actual ID if available
                deleteModule={(id) => console.log("Delete module with ID:", id)}
                editModule={(id) => console.log("Edit module with ID:", id)}
              /> */}
                        </div>
                        {quizzes.map((quiz: any) => (
                            <ul key={quiz._id} className="wd-lessons list-group rounded-0">
                                <li className="wd-lesson list-group-item p-3 ps-1">

                                    <div>&nbsp;&nbsp;
                                        <RxRocket color="green" /> &nbsp;&nbsp;
                                    </div>
                                    &nbsp;

                                    {/* CREATING DIFFERENT QUIZ INFORMATION BASED ON AVAILABILITY */}
                                    <div className="wd-float-left wd-padding">
                                        {quiz.availability === "Closed" ? (
                                            <>
                                                <a className="wd-assignment-link wd-title-texts"
                                                    href={`#/Kanbas/Courses/${cid}/Quizzes/Detail/${quiz._id}`}>
                                                    <h4><b>{quiz.title}</b></h4>
                                                </a>
                                                <p>
                                                    <b>{quiz.availability}</b> &nbsp; | &nbsp;<b>Due</b> {quiz.due}
                                                    &nbsp; | &nbsp; {quiz.points} &nbsp; | &nbsp;  Questions
                                                </p>
                                            </>
                                        ) : quiz.availability === "Not available until" ? (
                                            <>
                                                <a className="wd-assignment-link wd-title-texts"
                                                    href={`#/Kanbas/Courses/${cid}/Quizzes/Detail/${quiz._id}`}>
                                                    <h4><b>{quiz.title}</b></h4>
                                                </a>

                                                <p>
                                                    <b>{quiz.availability}</b> {quiz.until} &nbsp; | &nbsp;
                                                    <b> Due</b> {quiz.due} &nbsp; | &nbsp; {quiz.points} &nbsp; | &nbsp; Questions
                                                </p>
                                            </>
                                        ) : quiz.availability === "Available" ? (
                                            <>
                                                <a className="wd-assignment-link wd-title-texts"
                                                    href={`#/Kanbas/Courses/${cid}/Quizzes/Detail/${quiz._id}`}>
                                                    <h4><b>{quiz.title}</b></h4>
                                                </a>

                                                <p>
                                                    <b>{quiz.availability}</b>
                                                    <span className="wd-fg-color-red"> &nbsp;Multiple dates</span> &nbsp; | &nbsp;
                                                    <b> Due</b> <span className="wd-fg-color-red"> Multiple dates</span>
                                                    &nbsp;  | &nbsp; {quiz.points}&nbsp; | &nbsp; Questions
                                                </p>
                                            </>
                                        ) : (
                                            <p className="wd-title-texts text-red">
                                                No status
                                            </p>
                                        )}
                                    </div>

                                    <div className="wd-float-right">
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
                                                <li><a className="dropdown-item" href={`#/Kanbas/Courses/${cid}/Quizzes/Detail/${quiz._id}`}>Edit</a></li>
                                                <li><a className="dropdown-item" onClick={() => dispatch(deleteQuiz(quiz._id))}
                                                    id="wd-delete-click">Delete</a></li>
                                                <li><a className="dropdown-item" onClick={() => dispatch(deleteQuiz(quiz._id))}
                                                    id="wd-change-published-click">Publish</a></li>
                                                <li><a className="dropdown-item" href="#Copy">Copy</a></li>
                                                <li><a className="dropdown-item" href="#Sort">Sort</a></li>
                                            </ul>
                                        </div>

                                        {/* GREEN AND RED ICONS */}
                                        {quiz.visibility === "Unpublished" ? (
                                            < div className="float-end">
                                                <RiProhibited2Line color="red" size={23} />
                                            </div>
                                        ) : (
                                            <div className="float-end">
                                                <GreenCheckmark />
                                            </div>
                                        )}
                                    </div>


                                </li>
                            </ul>
                        ))}
                    </li>
                </ul >
            </div >
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
                    Group
                </button>

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
                            // onClick={() => navigate(`/Kanbas/Courses/${cid}/Quizzes/quizDetails`)}
                            // style={{ cursor: "pointer" }}
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
