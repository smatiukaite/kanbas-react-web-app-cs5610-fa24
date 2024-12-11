import { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import { TiPencil } from 'react-icons/ti';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function QuizEditor() {
    const { cid, qid } = useParams<{ cid: string, qid: string }>();
    const navigate = useNavigate();
    const quizzes = useSelector((state: any) => state.quizReducer.quizzes);
    const quiz = { ...quizzes.find((it: any) => it._id === cid) };
    const dispatch = useDispatch();
    const [timeLimit, setTimeLimit] = useState<number>(20);

    const [quizDetails, setQuizDetails] = useState({
        title: "",
        description: "",
        quizType: "Graded Quiz",
        quizGroup: "Quizzes",
        shuffleAnswers: true,
        timeLimit: 20,
        multipleAttempts: false,
        assignTo: "Everyone",
        dueDate: "",
        availableFrom: "",
        untilDate: "",
        points: 0,
        questionData: [],
    });

    return (
        <div id="wd-quiz wd-container-margins">

            <div className='wd-top-panel float-end'>
                <h3>Points {quiz.points} </h3>
            </div>

            {/* CREATE A GREY LINE BELOW THE TOP PANEL */}
            <br></br><br></br>
            <hr></hr>

            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link active" href="Details">
                        Details</a>
                </li>
                <li className="nav-item">
                    <Link to="Questions" className="nav-link">
                        <span className="wd-fg-color-red"> Questions </span>
                    </Link>
                </li>
            </ul>


            {/* SELECTIONS */}
            <div>
                <div id="wd-css-responsive-forms-1">
                    <div className="row wd-between-elements-margins mt-4 text-center">
                        <label htmlFor="wd-points"
                            className="col-sm-2 col-form-label text-end">
                            Quiz Type
                        </label>
                        <div className="col-sm-10">
                            <select id="wd-display-quiz-type-as" className="form-select">
                                <option selected>Graded Quiz</option>
                                <option value="PRACTICE QUIZE">Practice quiz</option>
                                <option value="GRADED SURVEY">Graded Survey</option>
                                <option value="UNGRADED SURVEY">Ungraded Survey</option>
                            </select>
                        </div>
                    </div>

                    <div className="row wd-between-elements-margins">
                        <label htmlFor="assignmentgroup"
                            className="col-sm-2 col-form-label text-end">
                            Points </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="wd-points"
                                placeholder="100" />
                        </div></div>

                    <div className="row wd-between-elements-margins">
                        <label htmlFor="grade"
                            className="col-sm-2 col-form-label text-end">
                            Assignment Group </label>
                        <div className="col-sm-10">
                            <select id="wd-display-grade-as" className="form-select">
                                <option selected>Quizzes</option>
                                <option value="EXAMS">Exams</option>
                                <option value="ASSIGNMENTS">Assignments</option>
                                <option value="PROJECT">Project</option>
                            </select>
                        </div>
                    </div>
                    <div className="row wd-between-elements-margins">
                        <label htmlFor="grade"
                            className="col-sm-2 col-form-label text-end">
                            Shuffle Answers </label>
                        <div className="col-sm-10">
                            <select id="wd-display-grade-as" className="form-select">
                                <option selected>Yes</option>
                                <option value="NO">No</option>
                            </select>
                        </div>
                    </div>

                    <div className="row wd-between-elements-margins">
                        <label htmlFor="grade"
                            className="col-sm-2 col-form-label text-end">
                            Time Limit </label>
                        <div className="col-sm-10">
                            <input
                                type="number"
                                id="timeLimit"
                                className="form-control"
                                min={20}
                                max={100}
                                value={timeLimit}
                                onChange={(e) => setTimeLimit(Number(e.target.value))} /><br />
                        </div>
                    </div>

                    <div className="row wd-between-elements-margins">
                        <label htmlFor="grade"
                            className="col-sm-2 col-form-label text-end">
                            Multiple Attempts </label>
                        <div className="col-sm-10">
                            <select id="wd-display-attempts-as" className="form-select">
                                <option selected>No</option>
                                <option value="YES">Yes</option>

                            </select>
                        </div>
                    </div>

                    <div className="row wd-between-elements-margins">
                        <label htmlFor="grade"
                            className="col-sm-2 col-form-label text-end">
                            How Many Attempts </label>
                        <div className="col-sm-10">
                            <select id="wd-display-attempts" className="form-select">
                                <option selected>1</option>
                                <option value="YES">Yes</option>

                            </select>
                        </div>
                    </div>

                    <div className="row wd-between-elements-margins">
                        <label htmlFor="grade"
                            className="col-sm-2 col-form-label text-end">
                            View Responses </label>
                        <div className="col-sm-10">
                            <select id="wd-display-grade-as" className="form-select">
                                <option selected>Select type</option>
                                <option value="NUMBER">Number</option>
                                <option value="PERCENTAGE">Percentage</option>
                            </select>
                        </div>
                    </div>

                    <div className="row wd-between-elements-margins">
                        <label htmlFor="grade"
                            className="col-sm-2 col-form-label text-end">
                            Show Correct Answers </label>
                        <div className="col-sm-10">
                            <select id="wd-display-grade-as" className="form-select">
                                <option selected>Select type</option>
                                <option value="NUMBER">Number</option>
                                <option value="PERCENTAGE">Percentage</option>
                            </select>
                        </div>
                    </div>

                    <div className="row wd-between-elements-margins">
                        <label htmlFor="grade"
                            className="col-sm-2 col-form-label text-end">
                            One Question at a Time </label>
                        <div className="col-sm-10">
                            <select id="wd-display-grade-as" className="form-select">
                                <option selected>Select type</option>
                                <option value="NUMBER">Number</option>
                                <option value="PERCENTAGE">Percentage</option>
                            </select>
                        </div>
                    </div>

                    <div className="row wd-between-elements-margins">
                        <label htmlFor="grade"
                            className="col-sm-2 col-form-label text-end">
                            Require Respondus Lockdown </label>
                        <div className="col-sm-10">
                            <select id="wd-display-grade-as" className="form-select">
                                <option selected>Select type</option>
                                <option value="NUMBER">Number</option>
                                <option value="PERCENTAGE">Percentage</option>
                            </select>
                        </div>
                    </div>

                    <div className="row wd-between-elements-margins">
                        <label htmlFor="grade"
                            className="col-sm-2 col-form-label text-end">
                            Browser </label>
                        <div className="col-sm-10">
                            <select id="wd-display-grade-as" className="form-select">
                                <option selected>Select type</option>
                                <option value="NUMBER">Number</option>
                                <option value="PERCENTAGE">Percentage</option>
                            </select>
                        </div>
                    </div>

                    <div className="row wd-between-elements-margins">
                        <label htmlFor="grade"
                            className="col-sm-2 col-form-label text-end">
                            Required to View Quiz Results </label>
                        <div className="col-sm-10">
                            <select id="wd-display-grade-as" className="form-select">
                                <option selected>Select type</option>
                                <option value="NUMBER">Number</option>
                                <option value="PERCENTAGE">Percentage</option>
                            </select>
                        </div>
                    </div>

                    <div className="row wd-between-elements-margins">
                        <label htmlFor="grade"
                            className="col-sm-2 col-form-label text-end">
                            Webcam Required </label>
                        <div className="col-sm-10">
                            <select id="wd-display-grade-as" className="form-select">
                                <option selected>Select type</option>
                                <option value="NUMBER">Number</option>
                                <option value="PERCENTAGE">Percentage</option>
                            </select>
                        </div>
                    </div>

                    <div className="row wd-between-elements-margins">
                        <label htmlFor="grade"
                            className="col-sm-2 col-form-label text-end">
                            Lock Questions After Answering </label>
                        <div className="col-sm-10">
                            <select id="wd-display-grade-as" className="form-select">
                                <option selected>Select type</option>
                                <option value="NUMBER">Number</option>
                                <option value="PERCENTAGE">Percentage</option>
                            </select>
                        </div>
                    </div>


                </div>
            </div>
            <div id="wd-css-responsive-tables">
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr><th>Due</th><th>For</th><th>Available From</th><th>of</th><th>Until</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Date</td><td>Everyone</td><td>Date</td><td>of</td><td>Date</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>



            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
                <button
                    id="wd-preview-quiz"
                    className="btn btn-md btn-secondary me-0"
                    onClick={() => navigate(`/Kanbas/Courses/${cid}/Quizzes/Preview/${qid}`)}
                >
                    Cancel
                </button>

                <button
                    id="wd-edit-quiz"
                    className="btn btn-md btn-danger me-2"
                // onClick={() => navigate(`/Kanbas/Courses/${cid}/Quizzes/Editor/${qid}`)}
                >
                    Save
                </button>
            </div>
        </div>
    )
}