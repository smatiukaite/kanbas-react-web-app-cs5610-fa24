import { useEffect, useState } from 'react';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
// import { BiBorderRadius } from 'react-icons/bi';
import { CiCircleQuestion } from 'react-icons/ci';
import { FaPlus } from 'react-icons/fa6';
import { IoMdArrowDropright } from 'react-icons/io';
import { TiPencil } from 'react-icons/ti';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

export default function QuizPreview() {
    const navigate = useNavigate();
    const { cid, qid } = useParams<{ cid: string, qid: string }>();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const userRole = currentUser?.role;

    // Access quizzes from the Redux store
    const quizzes = useSelector((state: any) => state.quizReducer.quizzes);

    // Find the specific quiz using the `qid`
    const quiz = quizzes.find((q: any) => q._id === qid);

    // DEFAULT VALUES IF REDUX DOESN'T HAVE IT
    const [quizDetails, setQuizDetails] = useState({
        title: "",
        description: "",
        quizType: "Graded Quiz",
        assignmentGroup: "Quizzes",
        shuffleAnswers: true,
        isTimeLimit: true,
        timeLimit: 20,
        multipleAttempts: false,
        oneQuestionAtATime: true,
        showAnswers: false,
        webcam: false,
        lockQuestions: false,
        assignTo: "Everyone",
        accessCode: "",
        dueDate: "",
        availableFrom: "",
        until: "",
        points: 0,
        visibility: "Not published",
        viewResponses: "Always",
        respondusLockDown: false,
        requiredViewResults: false,
        questionData: [],
    });

    // Populate quiz details from Redux when the component mounts or `quiz` changes
    useEffect(() => {
        if (quiz) {
            setQuizDetails({
                title: quiz.title ?? "",
                description: quiz.description ?? "",
                quizType: quiz.quizType ?? "Graded Quiz",
                assignmentGroup: quiz.assignmentGroup ?? "Quizzes",
                shuffleAnswers: quiz.shuffleAnswers ?? true,
                isTimeLimit: quiz.isTimeLimit ?? true,
                timeLimit: quiz.timeLimit ?? 20,
                multipleAttempts: quiz.multipleAttempts ?? false,
                oneQuestionAtATime: quiz.oneQuestionAtATime ?? true,
                showAnswers: quiz.showAnswers ?? false,
                webcam: quiz.webcam ?? false,
                lockQuestions: quiz.lockQuestions ?? false,
                assignTo: quiz.assignTo ?? "Everyone",
                accessCode: quiz.accessCode ?? "",
                dueDate: quiz.due ?? "",
                availableFrom: quiz.availableFrom ?? "",
                until: quiz.until ?? "",
                points: quiz.points ?? 0,
                visibility: quiz.visibility ?? "Unpublished",
                viewResponses: quiz.viewResponses ?? "Always",
                respondusLockDown: quiz.respondusLockDown ?? false,
                requiredViewResults: quiz.requiredViewResults ?? false,
                questionData: quiz.questionData ?? [],
            });
        }
    }, [quiz]);

    if (userRole === "FACULTY") {
        return (
            <div>
                <div>
                    <h3>{quizDetails.title} Preview</h3>
                    <button
                        id="wd-add-quiz"
                        className="btn btn-md btn-danger me-2 float-end"
                        onClick={() => navigate(`/Kanbas/Courses/${cid}/Quizzes/`)}>
                        <FaPlus className="position-relative me-2 wd-bottom-padding" />
                        Edit
                    </button>
                </div>

                {/* CREATE A GREY LINE BELOW THE TOP PANEL */}
                <br></br>
                <hr></hr>

                {/* RED MESSAGE */}
                <div id="wd-css-background-colors">
                    <p style={{ color: 'red', background: '#ffddd4', borderRadius: '5px', padding: '15px' }}>
                        <AiOutlineExclamationCircle /> &nbsp;
                        This is a preview of the published version of the quiz</p>
                </div>

                {/* QUIZ START TIME */}
                {/* <div>
                    <p>
                        Started:
                    </p>
                </div> */}

                <h3>Quiz Instructions</h3>

                {/* CREATE A GREY LINE BELOW THE TOP PANEL */}

                <hr></hr>
                <br></br>
                <br></br>

                <div>
                    {/* TABLE */}
                    <div id="wd-css-responsive-tables"
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '10vh',
                        }}
                    >
                        <div className="table-responsive col-sm-8 mt-5">
                            <table className="table" border={1} cellPadding={4}>
                                <thead className='table-light'>
                                    <tr><th>Question 1</th><th></th><th></th><th></th><th></th><th>1 pts</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        An HTML label element can be associated with an HTML input element by setting their id attributes to the same value.
                                    </tr>
                                    <br>
                                    </br>
                                    <tbody>
                                        <tr>
                                            <td colSpan={6} style={{ padding: "16px" }}>
                                                <input type="radio" name="radio-genre" id="wd-radio-comedy" />
                                                <label htmlFor="wd-radio-comedy">True</label><br />

                                                <input type="radio" name="radio-genre" id="wd-radio-drama" />
                                                <label htmlFor="wd-radio-drama">False</label><br />
                                            </td>
                                        </tr>
                                    </tbody>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colSpan={6} style={{ padding: "16px" }}></td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>

                    <br></br>
                    <br></br>
                    <br></br>

                    {/* BUTTON */}
                    <div className='d-flex justify-content-center'>
                        <button
                            id="wd-add-quiz"
                            className="btn btn-md btn-secondary mt-3">
                            {/* onClick={() => navigate(`/Kanbas/Courses/${cid}/Quizzes/`)}> */}
                            Next
                            &nbsp;
                            <IoMdArrowDropright className="right-arrow wd-bottom-padding" />
                        </button>
                    </div>

                    <br></br>
                    <br></br>

                    {/* SUBMIT QUIZ */}
                    <div className="form-check d-flex align-items-center gap-3" >
                        <table className="table" border={1} cellPadding={6} cellSpacing={6}>
                            <button
                                id="wd-add-quiz"
                                className="btn btn-md btn-secondary m-3 float-end">
                                Submit Quiz
                            </button>
                        </table>
                    </div>

                    <div className="form-check d-flex align-items-center gap-3" >
                        <table className="table" border={1} cellPadding={6} cellSpacing={6}
                            style={{ color: 'black', background: '#f7f7f7', borderRadius: '5px', padding: '15px' }}>
                            <label className="form-check-label wd-regular-text-padding float-start background-gray" htmlFor="wd-time-limit">
                                <TiPencil className="position-relative me-2 wd-bottom-padding" />
                                Keep Editing This Quiz
                            </label>
                        </table>
                    </div>

                    <br></br>
                    {/* QESTIONS */}
                    <div className="mb-3 row">
                        <label className='ps-5'>
                            <b>Questions:</b>
                        </label>
                        <ul className='ps-5'>
                            &nbsp;
                            <CiCircleQuestion className="question-mark-icon me-1" />
                            Question
                        </ul>
                    </div>
                </div >

            </div>
        )
    }

    // THE REST OF THE USERS VIEW
    else {
        return (
            <div>
                <h3>Quiz Preview</h3>
                <button
                    id="wd-add-quiz"
                    className="btn btn-md btn-danger me-2 float-end"
                    onClick={() => navigate(`/Kanbas/Courses/${cid}/Quizzes/`)}>
                    <FaPlus className="position-relative me-2 wd-bottom-padding" />
                    Edit
                </button>
            </div>
        )
    }
}