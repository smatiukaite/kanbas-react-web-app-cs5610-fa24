import { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import FillInTheBlank from './FillInTheBlank';
import MultipleChoices from './MultipleChoices';
import TrueFalse from './TrueFalse';
import { addQuestion, deleteQuiz, setQuizzes, updateQuiz } from './reducer';

export default function QuizEditor() {
    const { cid, qid } = useParams<{ cid: string, qid: string }>();
    // Access quizzes from the Redux store
    const quizzes = useSelector((state: any) => state.quizReducer.quizzes);
    // Find the specific quiz using the `qid`
    const quiz = { ...quizzes.find((it: any) => it._id === qid) };
    // const quiz = { ...quizzes.find((q: any) => q._id === qid) };

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSave = () => {
        dispatch(updateQuiz(quiz)); // Dispatch the updated quiz details to Redux
        navigate(`/Kanbas/Courses/${cid}/Quizzes/`); // Redirect to the quizzes list after saving
    };

    const handleSaveAndPublish = () => {
        dispatch(updateQuiz({ ...quiz, visibility: "Published" })); // Update and set visibility to "Published"
        navigate(`/Kanbas/Courses/${cid}/Quizzes`); // Redirect to the quizzes list after saving
    };

    const handleCancel = () => {
        // Dispatch deleteAssignment if the assignment is newly created
        if (qid) {
            dispatch(deleteQuiz(qid));
        }
        navigate(`/Kanbas/Courses/${cid}/Quizzes/`);
    };

    const handleCheckboxChange = (field: string, checked: boolean) => {
        const updatedQuiz = {
            ...quiz,
            [field]: checked,
        };
        dispatch(updateQuiz(updatedQuiz)); // Update Redux state
    };

    // State to track the active tab
    const [activeTab, setActiveTab] = useState('Details');

    // const handleFieldChange = (field: string, value: any) => {
    //     setQuizDetails({ ...quizDetails, [field]: value });
    // };

    // State to track the visibility for the New Question templates
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [isNewQuestionVisible, setIsNewQuestionVisible] = useState(true); // Track button visibility
    const [isQuestionFormVisible, setIsQuestionFormVisible] = useState(false); // Track form visibility
    const [questionType, setQuestionType] = useState("MULTIPLE CHOICE");

    const handleAddQuestionClick = () => {
        // const newQuestion = {
        //     _id: new Date().getTime().toString(), // Generate a unique ID
        //     type: questionType,
        //     title: "", 
        //     options: [], // For multiple-choice or other questions
        //     correctAnswer: null,
        // };
    
        // // Dispatch the action to save the new question to the store
        // dispatch(addQuestion({ quizId: qid, question: newQuestion }));

        setIsNewQuestionVisible(false); // Hide the button
        setIsQuestionFormVisible(true); // Show the form
    };

    // SWITCH FOR THE QUESTIONS
    const renderQuestionTemplate = () => {
        switch (questionType) {
            case "MULTIPLE CHOICE":
                return <MultipleChoices />;
            case "TRUE FALSE":
                return <TrueFalse />;
            case "FILL IN THE BLANK":
                return <FillInTheBlank />;
            default:
                return null;
        }
    };

    // const [todos, setTodos] = useState([
    //     { id: "1", title: "Learn React" },
    //     { id: "2", title: "Learn Node" }]);
    // const [todo, setTodo] = useState({ id: "-1", title: "Learn Mongo" });
    // const addTodo = (todo: any) => {
    //     const newTodos = [...todos, {
    //         ...todo,
    //         id: new Date().getTime().toString()
    //     }];
    //     setTodos(newTodos);
    //     setTodo({ id: "-1", title: "" });
    // };
    // const deleteTodo = (id: string) => {
    //     const newTodos = todos.filter((todo) => todo.id !== id);
    //     setTodos(newTodos);
    // };
    // const updateTodo = (todo: any) => {
    //     const newTodos = todos.map((item) =>
    //         (item.id === todo.id ? todo : item));
    //     setTodos(newTodos);
    //     setTodo({ id: "-1", title: "" });
    // };

    return (
        <div id="wd-quiz wd-container-margins">
            <div className='wd-top-panel float-end'>
                <h3>Points {quiz.points}  &nbsp; &nbsp;
                    <span style={{ color: 'gray' }}>
                        {quiz.visibility}
                    </span></h3>
            </div>

            {/* CREATE A GREY LINE BELOW THE TOP PANEL */}
            <br></br><br></br>
            <hr></hr>

            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <button
                        style={{
                            color: activeTab === 'Details' ? 'black' : 'red', // Active tab is blue, inactive is black
                        }}
                        className={`nav-link ${activeTab === 'Details' ? 'active' : ''}`}
                        onClick={() => setActiveTab('Details')}
                    >
                        Details
                    </button>
                </li>
                <li className="nav-item">
                    <button
                        style={{
                            color: activeTab === 'Questions' ? 'black' : 'red', // Active tab is blue, inactive is black
                        }}
                        className={`nav-link ${activeTab === 'Questions' ? 'active' : ''}`}
                        onClick={() => setActiveTab('Questions')}
                    >
                        <span className="wd-fg">Questions</span>
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
                                placeholder="Enter Quiz Title"
                                value={quiz.title}
                                onChange={(e) => {
                                    quiz.title = e.target.value;
                                    // dispatch(updateQuiz(quiz));
                                }}
                            />
                        </div>

                        {/* {quiz.map((quiz: any) => ( */}
                        <div className="wd-between-elements-margins">
                            <label htmlFor="wd-quiz-instructions" className="form-label">
                                Quiz Instructions:
                            </label>
                            <textarea
                                value={quiz.description}
                                className="form-control"
                                id="wd-quiz-instructions"
                                onChange={(e) => {
                                    quiz.instructions = e.target.value;
                                    // dispatch(updateQuiz(quiz));
                                }}>
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
                                            value={quiz.quizType}
                                            onChange={(e) => {
                                                // quiz.quizType = e.target.value;
                                                // dispatch(updateQuiz(quiz));
                                                const updatedQuiz = { ...quiz, quizType: e.target.value };
                                                dispatch(updateQuiz(updatedQuiz))
                                            }}>
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
                                            value={quiz.assignmentGroup}
                                            onChange={(e) => {
                                                // quiz.assignmentGroup = e.target.value;
                                                // dispatch(updateQuiz(quiz));

                                                const updatedQuiz = { ...quiz, assignmentGroup: e.target.value };
                                                dispatch(updateQuiz(updatedQuiz))
                                            }}>
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
                                                        checked={quiz.shuffleAnswers}
                                                        onChange={(e) => {
                                                            quiz.shuffleAnswers = e.target.checked
                                                            // dispatch(updateQuiz(quiz));
                                                        }}
                                                    />
                                                    <label className="form-check-label wd-regular-text-padding" htmlFor="wd-shuffle-answers">
                                                        Shuffle Answers </label>
                                                </div>

                                                <div className="form-check d-flex align-items-center gap-3">
                                                    <div>
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="wd-time-limit-checkbox"
                                                            checked={quiz.isTimeLimit}
                                                            onChange={(e) => {
                                                                // const updatedQuiz = { ...quiz, isTimeLimit: e.target.checked };
                                                                // dispatch(updateQuiz(updatedQuiz));
                                                                handleCheckboxChange("isTimeLimit", e.target.checked)
                                                            }}
                                                        />
                                                        <label className="form-check-label wd-regular-text-padding" htmlFor="wd-time-limit-checkbox">
                                                            Time Limit
                                                        </label>
                                                    </div>
                                                    &nbsp; &nbsp;
                                                    <div>
                                                        <input
                                                            className="form-control"
                                                            type="number"
                                                            id="wd-time-limit-minutes"
                                                            value={quiz.timeLimit}
                                                            onChange={(e) => {
                                                                const updatedQuiz = { ...quiz, timeLimit: Number(e.target.value) };
                                                                dispatch(updateQuiz(updatedQuiz));
                                                            }}
                                                            min="5"
                                                            max="180"
                                                            disabled={!quiz.isTimeLimit}
                                                        />
                                                    </div>
                                                    <span>Minutes</span>
                                                </div>

                                                <div className="form-check wd-quiz-custom-border">
                                                    <div className="col-sm-8">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="wd-file-upload"
                                                            checked={quiz.multipleAttempts}
                                                            onChange={(e) => {
                                                                // quiz.multipleAttempts = e.target.checked;
                                                                // dispatch(updateQuiz(quiz));
                                                                handleCheckboxChange("multipleAttempts", e.target.checked)
                                                            }} />
                                                        <label className="form-check-label wd-regular-text-padding" htmlFor="wd-file-upload">
                                                            Allow Multiple Attempts
                                                        </label>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <input
                                                            className="form-control"
                                                            type="number"
                                                            id="wd-number-input"
                                                            value={quiz.attempts}
                                                            onChange={(e) => {
                                                                // quiz.attempts = e.target.value;
                                                                // dispatch(updateQuiz(quiz));
                                                                handleCheckboxChange("attempts", e.target.checked)
                                                            }}
                                                            min="1"
                                                            max="10"
                                                            disabled={!quiz.attempts}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="row wd-between-elements-margins">
                                                    <div className="col-sm-10">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="wd-website-url"
                                                            checked={quiz.showAnswers}
                                                            onChange={(e) => {
                                                                // quiz.showAnswers = e.target.checked;
                                                                // dispatch(updateQuiz(quiz));
                                                                handleCheckboxChange("showAnswers", e.target.checked)
                                                            }}
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
                                                            checked={quiz.oneQuestionAtATime}
                                                            onChange={(e) => {
                                                                // quiz.oneQuestionAtATime = e.target.checked;
                                                                // dispatch(updateQuiz(quiz));
                                                                handleCheckboxChange("oneQuestionAtATime", e.target.checked)
                                                            }}
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
                                                            checked={quiz.webcam}
                                                            onChange={(e) => {
                                                                // quiz.webcam = e.target.checked;
                                                                // dispatch(updateQuiz(quiz));
                                                                handleCheckboxChange("webcam", e.target.checked)
                                                            }} />
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
                                                            checked={quiz.lockQuestions}
                                                            onChange={(e) => {
                                                                // quiz.lockQuestions = e.target.checked;
                                                                // dispatch(updateQuiz(quiz));
                                                                handleCheckboxChange("lockQuestions", e.target.checked)
                                                            }} />
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
                                                            value={quiz.accessCode}
                                                            onChange={(e) => {
                                                                // quiz.accessCode = e.target.value;
                                                                // dispatch(updateQuiz(quiz));
                                                                handleCheckboxChange("accessCode", e.target.checked)
                                                            }} />
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
                                                value={quiz.dueDate}
                                                onChange={(e) => {
                                                    quiz.dueDate = e.target.value;
                                                    dispatch(updateQuiz(quiz));
                                                }} />
                                        </div>

                                        <div className="wd-custom-date-container">
                                            <div className="wd-two-custom-date-containers">
                                                <label htmlFor="wd-available-from" className="wd-regular-text-padding wd-bold-text">Available from</label>
                                                <input
                                                    id="wd-available-from"
                                                    type='text'
                                                    placeholder="Example: May 13, 2024 at 11:59 pm"
                                                    value={quiz.availableFrom}
                                                    onChange={(e) => {
                                                        quiz.availableFrom = e.target.value;
                                                        dispatch(updateQuiz(quiz));
                                                    }}
                                                    className="form-control mb-2" />
                                            </div>
                                            <div className="wd-two-custom-date-containers">
                                                <label htmlFor="wd-available-until" className="wd-regular-text-padding wd-bold-text">Until</label>
                                                <input id="wd-available-until"
                                                    type="text"
                                                    className="form-control mb-2"
                                                    placeholder="Example: May 13, 2024 at 11:59 pm"
                                                    value={quiz.until}
                                                    onChange={(e) => {
                                                        quiz.until = e.target.value;
                                                        dispatch(updateQuiz(quiz));
                                                    }}
                                                />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
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
                                onClick={handleSave}
                            >
                                Save
                            </button>

                            <button
                                id="wd-save-and-publish-quiz"
                                className="btn btn-md btn-success me-0"
                                onClick={handleSaveAndPublish}
                            >
                                Save & Publish
                            </button>
                        </div>
                    </div>
                )}



                {/* QUESTION TAB */}
                {activeTab === 'Questions' &&
                    (
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
                            {/* {quizDetails.questionData.length === 0 ? (
                            <> */}
                            {isNewQuestionVisible && (
                                <div>
                                    <button
                                        id="wd-add-question"
                                        className="btn btn-md btn-secondary m-5"
                                        onClick={handleAddQuestionClick} // Call the toggle function
                                    >
                                        <FaPlus className="position-relative me-2 wd-bottom-padding" />
                                        Add Question
                                    </button>

                                    <div>
                                        <button
                                            id="wd-cancel-new-quiz"
                                            className="btn btn-md btn-secondary me-0"
                                            onClick={() => navigate(`/Kanbas/Courses/${cid}/Quizzes`)}>
                                            Cancel
                                        </button>
                                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                                        <button
                                            id="wd-save-quiz"
                                            className="btn btn-md btn-danger me-0"
                                        // onClick={() => navigate(`/Kanbas/Courses/${cid}/Quizzes/Editor/${qid}`)}
                                        >
                                            Save
                                        </button>
                                    </div>
                                </div>
                            )}
                            {/* Two buttons */}

                            <br></br>

                            {/* QUESTION TEMPLATE */}
                            {isQuestionFormVisible && ( // Conditionally render the form
                                <div className="tab-content">
                                    <div id="question-tab">
                                        <div className="wd-between-elements-margins" key={quiz._id}>

                                            <div className="row align-items-center">
                                                {/* Question Title */}
                                                <div className="col-md-6">
                                                    <input className="form-control"
                                                        type="text"
                                                        placeholder='Question title'
                                                        typeof="text"
                                                    // onChange={(e) =>
                                                    //     setQuizDetails({ ...quizDetails, title: e.target.value })
                                                    // } 

                                                    />
                                                </div>

                                                {/* Select Dropdown */}
                                                <div className="col-md-6">
                                                    {/* <select id="wd-display-quiz-type-as" className="form-select"
                                                        value={quizDetails.quizType}
                                                        onChange={(e) =>
                                                            setQuizDetails({ ...quizDetails, quizType: e.target.value })
                                                        }>
                                                        <option value="MULTIPLE CHOICE">Multiple Choice</option>
                                                        <option value="TRUE FALSE">True/False</option>
                                                        <option value="FILL IN THE BLANK">Fill in the Blank</option>
                                                    </select> */}

                                                    <select
                                                        value={questionType}
                                                        onChange={(e) => setQuestionType(e.target.value)}
                                                        className="form-select ms-3"
                                                    >
                                                        <option value="MULTIPLE CHOICE">Multiple Choice</option>
                                                        <option value="TRUE FALSE">True/False</option>
                                                        <option value="FILL IN THE BLANK">Fill in the Blank</option>
                                                    </select>
                                                </div>

                                                {renderQuestionTemplate()}
                                            </div>
                                        </div>


                                        <hr></hr>

                                    </div>

                                    {/* Two buttons */}
                                    <div style={{ display: "flex", justifyContent: "right", alignItems: "center", gap: "10px" }}>
                                        <button onClick={handleCancel}
                                            type="button"
                                            className="btn btn-secondary">
                                            Cancel
                                        </button>

                                        <button
                                            id="wd-save-quiz"
                                            className="btn btn-md btn-success me-0"
                                        // onClick={() => updateTodo(todo)}
                                        >
                                            Update Question
                                        </button>

                                        <button
                                            id="wd-add-question"
                                            className="btn btn-md btn-danger"
                                            onClick={handleAddQuestionClick} // Call the toggle function
                                        >
                                            <FaPlus className="position-relative me-2 wd-bottom-padding" />
                                            Add Another Question
                                        </button>
                                    </div>
                                </div>
                            )}

                        </div>
                    )
                }

            </div>

        </div >
    )
}