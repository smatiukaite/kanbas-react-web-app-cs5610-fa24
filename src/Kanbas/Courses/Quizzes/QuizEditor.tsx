import { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function QuizEditor() {
    const { cid, qid } = useParams<{ cid: string, qid: string }>();
    const navigate = useNavigate();

    // Access quizzes from the Redux store
    const quizzes = useSelector((state: any) => state.quizReducer.quizzes);
    // const quiz = { ...quizzes.find((it: any) => it._id === cid) };

    // Find the specific quiz using the `qid`
    const quiz = quizzes.find((q: any) => q._id === qid);

    const dispatch = useDispatch();
    const [activeTab, setActiveTab] = useState('Details'); // State to track the active tab

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

    return (
        <div id="wd-quiz wd-container-margins">

            <div className='wd-top-panel float-end'>
                <h3>Points {quizDetails.points}  &nbsp; &nbsp;
                    <span style={{ color: 'gray' }}>
                        {quizDetails.visibility}
                    </span></h3>
            </div>

            {/* CREATE A GREY LINE BELOW THE TOP PANEL */}
            <br></br><br></br>
            <hr></hr>

            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <button
                        className={`nav-link ${activeTab === 'Details' ? 'active' : ''}`}
                        onClick={() => setActiveTab('Details')}
                    >
                        Details
                    </button>
                </li>
                <li className="nav-item">
                    <button
                        className={`nav-link ${activeTab === 'Questions' ? 'active' : ''}`}
                        onClick={() => setActiveTab('Questions')}
                    >
                        <span className="wd-fg-color-red">Questions</span>
                    </button>
                </li>
            </ul>

            <div className="tab-content">
                {activeTab === 'Details' && (
                    <div id="details-tab">
                        <div className="wd-between-elements-margins" key={quiz._id}>
                            <label htmlFor="wd-name" className="form-label">
                            </label>
                            <input className="form-control" type="text"
                                placeholder='Unnamed Quiz'
                                value={quizDetails.title}
                                onChange={(e) =>
                                    setQuizDetails({ ...quizDetails, title: e.target.value })
                                } />
                        </div>

                        {/* {quiz.map((quiz: any) => ( */}
                        <div className="wd-between-elements-margins">
                            <label htmlFor="wd-quiz-instructions" className="form-label">
                                Quiz Instructions:
                            </label>
                            <textarea
                                value={quizDetails.description}
                                className="form-control"
                                id="wd-quiz-instructions"
                                onChange={(e) => setQuizDetails({ ...quizDetails, description: e.target.value })
                                }>
                            </textarea>

                            {/* 2nd part of the page */}
                            <div id="wd-css-responsive-forms-1">
                                <div className="row wd-between-elements-margins mt-3">
                                    <label htmlFor="wd-points"
                                        className="col-md-4 col-form-label text-end">
                                        Quiz Type
                                    </label>
                                    <div className="col-sm-8">
                                        <select id="wd-display-quiz-type-as" className="form-select"
                                            value={quizDetails.quizType}
                                            onChange={(e) =>
                                                setQuizDetails({ ...quizDetails, quizType: e.target.value })
                                            }>
                                            <option value="GRADED QUIZE">Graded Quiz</option>
                                            <option value="PRACTICE QUIZE">Practice Quiz</option>
                                            <option value="GRADED SURVEY">Graded Survey</option>
                                            <option value="UNGRADED SURVEY">Ungraded Survey</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="row wd-between-elements-margins">
                                    <label htmlFor="assignmentgroup"
                                        className="col-md-4 col-form-label text-end">
                                        Assignment Group </label>
                                    <div className="col-sm-8">
                                        <select id="wd-display-grade-as" className="form-select"
                                            value={quizDetails.assignmentGroup}
                                            onChange={(e) =>
                                                setQuizDetails({ ...quizDetails, assignmentGroup: e.target.value })}>
                                            <option value="QUIZZES">Quizes</option>
                                            <option value="EXAMS">Exams</option>
                                            <option value="ASSIGNMENTS">Assignments</option>
                                            <option value="PROJECT">Project</option>
                                        </select>
                                    </div></div>

                                <div className="row wd-between-elements-margins">
                                    <label htmlFor="submissiontype"
                                        className="col-sm-4 col-form-label text-end">
                                    </label>
                                    <div className="col-sm-8 wd-quiz-custom-box">
                                        <div>
                                            <div className="col-sm-5 offset-sm-0">
                                                <label htmlFor="wd-text-entry" className="wd-bold-text">
                                                    Options
                                                </label>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="wd-text-entry"
                                                        checked={quizDetails.shuffleAnswers}
                                                        onChange={(e) =>
                                                            setQuizDetails({ ...quizDetails, shuffleAnswers: e.target.checked })}
                                                    />
                                                    <label className="form-check-label wd-regular-text-padding" htmlFor="wd-shuffle-answers">
                                                        Shuffle Answers </label>
                                                </div>

                                                <div className="form-check d-flex align-items-center gap-3">
                                                    <div>
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="wd-website-url"
                                                            checked={quizDetails.isTimeLimit}
                                                            onChange={(e) =>
                                                                setQuizDetails({ ...quizDetails, isTimeLimit: e.target.checked })
                                                            } />
                                                        <label className="form-check-label wd-regular-text-padding" htmlFor="wd-time-limit">
                                                            Time Limit
                                                        </label>
                                                    </div>
                                                    &nbsp; &nbsp;
                                                    <div>
                                                        <input
                                                            className="form-control"
                                                            type="number"
                                                            id="wd-number-input"
                                                            value={quizDetails.timeLimit}
                                                            onChange={(e) =>
                                                                setQuizDetails({ ...quizDetails, timeLimit: Number(e.target.value) })}
                                                            min="5"
                                                            max="180"
                                                            disabled={!quizDetails.isTimeLimit}
                                                        />
                                                    </div>
                                                    <span>Minutes</span>
                                                </div>

                                                <div className="form-check wd-quiz-custom-border">
                                                    <div className="col-sm-10">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="wd-file-upload"
                                                            checked={quizDetails.multipleAttempts}
                                                            onChange={(e) =>
                                                                setQuizDetails({ ...quizDetails, multipleAttempts: e.target.checked })
                                                            } />
                                                        <label className="form-check-label wd-regular-text-padding" htmlFor="wd-file-upload">
                                                            Allow Multiple Attempts
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className="row wd-between-elements-margins">
                                                    <div className="col-sm-10">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="wd-website-url"
                                                            checked={quizDetails.showAnswers}
                                                            onChange={(e) =>
                                                                setQuizDetails({ ...quizDetails, showAnswers: e.target.checked })}
                                                        />&nbsp;
                                                        <span> Show Correct Answers </span>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row wd-between-elements-margins">
                                    <label htmlFor="submissiontype"
                                        className="col-sm-4 col-form-label text-end">
                                    </label>
                                    <div className="col-sm-8 wd-quiz-custom-box">
                                        <div>
                                            <div className="col-sm-5 offset-sm-0">
                                                <label htmlFor="wd-text-entry" className="wd-bold-text">
                                                    Quiz Restrictions
                                                </label>
                                                <div className="row wd-between-elements-margins">
                                                    <div className="col-sm-10">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="wd-website-url"
                                                            checked={quizDetails.oneQuestionAtATime}
                                                            onChange={(e) =>
                                                                setQuizDetails({ ...quizDetails, oneQuestionAtATime: e.target.checked })}
                                                        />&nbsp;&nbsp;
                                                        <label htmlFor="grade">
                                                            Show one Question at a Time </label>
                                                    </div>
                                                </div>

                                                <div className="row wd-between-elements-margins">
                                                    <div className="col-sm-10">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="wd-website-url"
                                                            checked={quizDetails.webcam}
                                                            onChange={(e) =>
                                                                setQuizDetails({ ...quizDetails, webcam: e.target.checked })} />
                                                        &nbsp;&nbsp;
                                                        <label htmlFor="grade">
                                                            Webcam Required </label>
                                                    </div>
                                                </div>

                                                <div className="row wd-between-elements-margins">
                                                    <div className="col-sm-10">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="wd-website-url"
                                                            checked={quizDetails.lockQuestions}
                                                            onChange={(e) =>
                                                                setQuizDetails({ ...quizDetails, lockQuestions: e.target.checked })} />
                                                        &nbsp;&nbsp;
                                                        <label htmlFor="grade">
                                                            Lock Questions After Answering </label>
                                                    </div>
                                                </div>

                                                <div className="row wd-between-elements-margins">
                                                    <div className="col-sm-10">
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            placeholder="Access Code"
                                                            value={quizDetails.accessCode}
                                                            onChange={(e) =>
                                                                setQuizDetails({ ...quizDetails, accessCode: e.target.value })
                                                            } />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-3 row">
                                    <label htmlFor="assign"
                                        className="col-sm-4 col-form-label text-end">
                                        Assign
                                    </label>
                                    <div className="col-sm-8 wd-custom-box wd-between-elements-margins">
                                        <label htmlFor="wd-assign-to" className="wd-bold-text">
                                            Assign to
                                        </label>
                                        <div className="wd-between-elements-margins">
                                            <select id="wd-assign-to" className="form-select">
                                                <option selected>Everyone</option>
                                                {/* <option value="EVERYONE">Everyone</option> */}
                                                <option value="PAULNUNEZ">Paul Nunez</option>
                                                <option value="LINDSEYCLARK">Lindsey Clark</option>
                                                <option value="SERGSMITH">Serg Smith</option>
                                                <option value="MONICAROLLS">Monika Rolls</option>
                                            </select>
                                        </div>

                                        {/* Two dates */}
                                        <div className="wd-between-elements-margins">
                                            <label htmlFor="wd-due-date" className="wd-regular-text-padding wd-bold-text ">Due</label>
                                            <input
                                                className="form-control mb-2"
                                                type="text"
                                                placeholder="Example: May 13, 2024 at 11:59 pm"
                                                value={quizDetails.dueDate}
                                                onChange={(e) =>
                                                    setQuizDetails({ ...quizDetails, dueDate: e.target.value })
                                                } />
                                        </div>

                                        <div className="wd-custom-date-container">
                                            <div className="wd-two-custom-date-containers">
                                                <label htmlFor="wd-available-from" className="wd-regular-text-padding wd-bold-text">Available from</label>
                                                <input
                                                    id="wd-available-from"
                                                    type='text'
                                                    placeholder="Example: May 13, 2024 at 11:59 pm"
                                                    value={quizDetails.availableFrom}
                                                    onChange={(e) =>
                                                        setQuizDetails({ ...quizDetails, availableFrom: e.target.value })
                                                    }
                                                    className="form-control mb-2" />
                                            </div>
                                            <div className="wd-two-custom-date-containers">
                                                <label htmlFor="wd-available-until" className="wd-regular-text-padding wd-bold-text">Until</label>
                                                <input id="wd-available-until"
                                                    type="text"
                                                    className="form-control mb-2"
                                                    placeholder="Example: May 13, 2024 at 11:59 pm"
                                                    value={quizDetails.until}
                                                    onChange={(e) =>
                                                        setQuizDetails({ ...quizDetails, until: e.target.value })
                                                    }
                                                />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                )}
                {activeTab === 'Questions' && (
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
                        {/* {quizDetails.questionData.length === 0 ? (
                            <> */}
                        <button
                            id="wd-add-question"
                            className="btn btn-md btn-secondary m-5"
                        // onClick={() => {
                        //     const newQuestion = {
                        //         id: quizDetails.questionData.length + 1,
                        //         text: 'New Question',
                        //         options: [],
                        //     };
                        //     setQuizDetails({
                        //         ...quizDetails,
                        //         questionData: [...quizDetails.questionData, newQuestion],
                        //     })
                        //     ;
                        // }}
                        >
                            <FaPlus className="position-relative me-2 wd-bottom-padding" />
                            Add Question
                        </button>
                        {/* </>
                        ) : (
                            <div>
                                <h3>Questions:</h3>
                                <ul>
                                    {quizDetails.questionData.map((question, index) => (
                                        <li key={index}>{question.text}</li>
                                    ))}
                                </ul>
                                <button
                                    id="wd-add-another-question"
                                    className="btn btn-md btn-secondary m-5"
                                    onClick={() => {
                                        const newQuestion = {
                                            id: quizDetails.questionData.length + 1,
                                            text: `Question ${quizDetails.questionData.length + 1}`,
                                            options: [],
                                        };
                                        setQuizDetails({
                                            ...quizDetails,
                                            questionData: [...quizDetails.questionData, newQuestion],
                                        });
                                    }}
                                >
                                    <FaPlus className="position-relative me-2 wd-bottom-padding" />
                                    Add Another Question
                                </button>
                            </div>
                        )} */}

                        <div>



                        </div>


                    </div>
                )}

            </div>

            {/* CREATE A GREY LINE BELOW THE TOP PANEL */}
            <br></br>
            <hr></hr>

            {/* Three buttons */}
            <div style={{ display: "flex", justifyContent: "right", alignItems: "center", gap: "10px" }}>
                <button
                    id="wd-cancel-new-quiz"
                    className="btn btn-md btn-secondary me-0"
                    onClick={() => navigate(`/Kanbas/Courses/${cid}/Quizzes`)}>
                    Cancel
                </button>

                <button
                    id="wd-save-quiz"
                    className="btn btn-md btn-danger me-0"
                // onClick={() => navigate(`/Kanbas/Courses/${cid}/Quizzes/Editor/${qid}`)}
                >
                    Save
                </button>

                <button
                    id="wd-save-and-publish-quiz"
                    className="btn btn-md btn-success me-0"
                    onClick={() => navigate(`/Kanbas/Courses/${cid}/Quizzes/Preview/${qid}`)}
                >
                    Save & Publish
                </button>
            </div>

        </div>
    )
}