import { TiPencil } from "react-icons/ti";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { quizzes } from "../../Database";
import { useSelector } from "react-redux";
// import { quizzes } from "../../Database";

export default function QuizDetails() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const userRole = currentUser?.role;
    const navigate = useNavigate();
    const { cid, qid } = useParams<{ cid: string, qid: string }>();
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
        attempts: 1,
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
        visibility: "Unpublished",
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
                shuffleAnswers: quiz.shuffleAnswers ?? true, // Keep true/false
                isTimeLimit: quiz.isTimeLimit ?? true,
                timeLimit: quiz.timeLimit ?? 20,
                multipleAttempts: quiz.multipleAttempts ?? false, // Keep true/false
                attempts: quiz.attempts ?? 1,
                oneQuestionAtATime: quiz.oneQuestionAtATime ?? true,
                showAnswers: quiz.showAnswers ?? false,
                webcam: quiz.webcam ?? false,
                lockQuestions: quiz.lockQuestions ?? false,
                assignTo: quiz.assignTo ?? "Everyone",
                accessCode: quiz.accessCode ?? "",
                dueDate: quiz.dueDate ?? "",
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
            <div id="wd-quiz wd-container-margins">

                {/* TWO BUTTONS AT THE TOP */}
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
                    <button
                        id="wd-preview-quiz"
                        className="btn btn-md btn-secondary me-0"
                        onClick={() => navigate(`/Kanbas/Courses/${cid}/Quizzes/Preview/${qid}`)}
                    >
                        Preview
                    </button>

                    <button
                        id="wd-edit-quiz"
                        className="btn btn-md btn-secondary me-2"
                        onClick={() => navigate(`/Kanbas/Courses/${cid}/Quizzes/Editor/${qid}`)}
                    >
                        <TiPencil className="position-relative me-2 wd-bottom-padding" />
                        Edit
                    </button>
                </div>

                {/* CREATE A GREY LINE BELOW THE TOP PANEL */}
                <br></br>
                <hr></hr>

                {/* INFORMATION ABOUT THE QUIZ */}
                <div className="mb-4">
                    <div id="wd-css-responsive-forms-1">
                        <div className="row mt-4">
                            <h5><b> {quizDetails.title} </b></h5>
                            <label htmlFor="wd-points"
                                className="col-sm-5 col-form-label text-end">
                                <b>Quiz Type</b>
                            </label>
                            <div className="col-sm-7 col-form-label text-start">
                                <label htmlFor="wd-points"
                                    className="wd-type">
                                    {quizDetails.quizType}
                                </label>
                            </div>
                        </div>

                        <div className="row">
                            <label htmlFor="assignmentgroup"
                                className="col-sm-5 text-end">
                                <b>Points</b>
                            </label>
                            <div className="col-sm-7 text-start">
                                <label htmlFor="wd-points"
                                    className="wd-type">
                                    {quizDetails.points}
                                </label>
                            </div>
                        </div>

                        <div className="row">
                            <label htmlFor="grade"
                                className="col-sm-5 col-form-label text-end">
                                <b>Assignment Group</b>
                            </label>
                            <div className="col-sm-7 col-form-label text-start">
                                <label htmlFor="wd-points"
                                    className="wd-type">
                                    {quizDetails.assignmentGroup}
                                </label>
                            </div>
                        </div>

                        <div className="row ">
                            <label htmlFor="grade"
                                className="col-sm-5 col-form-label text-end">
                                <b>Shuffle Answers</b>
                            </label>
                            <div className="col-sm-7 col-form-label text-start">
                                <label htmlFor="wd-points"
                                    className="wd-type">
                                    {quizDetails.shuffleAnswers ? "Yes" : "No"}
                                </label>
                            </div>
                        </div>

                        <div className="row">
                            <label htmlFor="grade"
                                className="col-sm-5 col-form-label text-end">
                                <b>Time Limit</b>
                            </label>
                            <div className="col-sm-7 col-form-label text-start">
                                <label htmlFor="wd-points"
                                    className="wd-type">
                                    {quizDetails.timeLimit}
                                </label>
                            </div>
                        </div>

                        <div className="row">
                            <label htmlFor="grade"
                                className="col-sm-5 col-form-label text-end">
                                <b>Multiple Attempts</b>
                            </label>
                            <div className="col-sm-7 col-form-label text-start">
                                <label htmlFor="wd-points"
                                    className="wd-type">
                                    {quizDetails.multipleAttempts ? "Yes" : "No"}
                                </label>
                            </div>
                        </div>

                        <div className="row">
                            <label htmlFor="grade"
                                className="col-sm-5 col-form-label text-end">
                                <b>View Responses</b>
                            </label>
                            <div className="col-sm-7 col-form-label text-start">
                                <label htmlFor="wd-points"
                                    className="wd-type">
                                    {quizDetails.viewResponses}
                                </label>
                            </div>
                        </div>

                        <div className="row">
                            <label htmlFor="grade"
                                className="col-sm-5 col-form-label text-end">
                                <b>Show Correct Answers</b>
                            </label>
                            <div className="col-sm-7 col-form-label text-start">
                                <label htmlFor="wd-points"
                                    className="wd-type">
                                   {quizDetails.showAnswers ? "Yes" : "No"}
                                </label>
                            </div>
                        </div>

                        <div className="row">
                            <label htmlFor="grade"
                                className="col-sm-5 col-form-label text-end">
                                <b>One Question at a Time</b>
                            </label>
                            <div className="col-sm-7 col-form-label text-start">
                                <label htmlFor="wd-points"
                                    className="wd-type">
                                   {quizDetails.oneQuestionAtATime ? "Yes" : "No"}
                                </label>
                            </div>
                        </div>

                        <div className="row">
                            <label htmlFor="grade"
                                className="col-sm-5 col-form-label text-end">
                                <b>Require Respondus Lockdown Browser</b>
                            </label>
                            <div className="col-sm-7 col-form-label text-start">
                                <label htmlFor="wd-points"
                                    className="wd-type">
                                    {quizDetails.respondusLockDown ? "Yes" : "No"}
                                </label>
                            </div>
                        </div>

                        <div className="row">
                            <label htmlFor="grade"
                                className="col-sm-5 col-form-label text-end">
                                <b>Required to View Quiz Results</b>
                            </label>
                            <div className="col-sm-7 col-form-label text-start">
                                <label htmlFor="wd-points"
                                    className="wd-type">
                                    {quizDetails.requiredViewResults ? "Yes" : "No"}
                                </label>
                            </div>
                        </div>

                        <div className="row">
                            <label htmlFor="grade"
                                className="col-sm-5 col-form-label text-end">
                                <b>Webcam Required</b>
                            </label>
                            <div className="col-sm-7 col-form-label text-start">
                                <label htmlFor="wd-points"
                                    className="wd-type">
                                    {quizDetails.webcam ? "Yes" : "No"}
                                </label>
                            </div>
                        </div>

                        <div className="row">
                            <label htmlFor="grade"
                                className="col-sm-5 col-form-label text-end">
                                <b>Lock Questions After Answering</b>
                            </label>
                            <div className="col-sm-7 col-form-label text-start">
                                <label htmlFor="wd-points"
                                    className="wd-type">
                                    {quizDetails.lockQuestions ? "Yes" : "No"}
                                </label>
                            </div>
                        </div>

                        <div className="row">
                            <label htmlFor="grade"
                                className="col-sm-2 col-form-label text-end">
                           
                            </label>
                            <div className="col-sm-7 col-form-label text-start">
                                <label htmlFor="wd-points"
                                    className="wd-type">
                                    {quizDetails.description}
                                </label>
                            </div>
                        </div>

                    </div>
                </div>


                {/* THE BOTTOM TABLE */}
                <div id="wd-css-responsive-tables"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '10vh',
                    }}
                >
                    <div className="table-responsive col-sm-8">
                        <table className="table">
                            <thead>
                                <tr><th>Due</th><th>For</th><th>Available From</th><th>Until</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{quizDetails.dueDate}</td><td>{quizDetails.assignTo}</td><td>{quizDetails.until}</td><td>{quizDetails.dueDate}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        )
    }

    else {
        return (
            <div id="wd-quiz wd-container-margins">

                {/* TWO BUTTONS AT THE TOP */}
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
                    <button
                        id="wd-preview-quiz"
                        className="btn btn-md btn-secondary me-0"
                        onClick={() => navigate(`/Kanbas/Courses/${cid}/Quizzes/Preview/${qid}`)}
                    >
                        Take a Quiz
                    </button>
                </div>

                {/* CREATE A GREY LINE BELOW THE TOP PANEL */}
                <br></br>
                <hr></hr>

                {/* INFORMATION ABOUT THE QUIZ */}
                <div className="mb-4">
                    <div id="wd-css-responsive-forms-1">
                        <div className="row mt-4">
                            <h5><b> {quizDetails.title} </b></h5>
                            <label htmlFor="wd-points"
                                className="col-sm-5 col-form-label text-end">
                                <b>Quiz Type</b>
                            </label>
                            <div className="col-sm-7 col-form-label text-start">
                                <label htmlFor="wd-points"
                                    className="wd-type">
                                    {quizDetails.quizType}
                                </label>
                            </div>
                        </div>

                        <div className="row">
                            <label htmlFor="assignmentgroup"
                                className="col-sm-5 text-end">
                                <b>Points</b>
                            </label>
                            <div className="col-sm-7 text-start">
                                <label htmlFor="wd-points"
                                    className="wd-type">
                                    {quizDetails.points}
                                </label>
                            </div>
                        </div>

                        <div className="row">
                            <label htmlFor="grade"
                                className="col-sm-5 col-form-label text-end">
                                <b>Assignment Group</b>
                            </label>
                            <div className="col-sm-7 col-form-label text-start">
                                <label htmlFor="wd-points"
                                    className="wd-type">
                                    {quizDetails.assignmentGroup}
                                </label>
                            </div>
                        </div>

                        <div className="row ">
                            <label htmlFor="grade"
                                className="col-sm-5 col-form-label text-end">
                                <b>Shuffle Answers</b>
                            </label>
                            <div className="col-sm-7 col-form-label text-start">
                                <label htmlFor="wd-points"
                                    className="wd-type">
                                    {quizDetails.shuffleAnswers}
                                </label>
                            </div>
                        </div>

                        <div className="row">
                            <label htmlFor="grade"
                                className="col-sm-5 col-form-label text-end">
                                <b>Time Limit</b>
                            </label>
                            <div className="col-sm-7 col-form-label text-start">
                                <label htmlFor="wd-points"
                                    className="wd-type">
                                    {quizDetails.timeLimit}
                                </label>
                            </div>
                        </div>

                        <div className="row">
                            <label htmlFor="grade"
                                className="col-sm-5 col-form-label text-end">
                                <b>Multiple Attempts</b>
                            </label>
                            <div className="col-sm-7 col-form-label text-start">
                                <label htmlFor="wd-points"
                                    className="wd-type">
                                    {quizDetails.multipleAttempts}
                                </label>
                            </div>
                        </div>

                        <div className="row">
                            <label htmlFor="grade"
                                className="col-sm-5 col-form-label text-end">
                                <b>View Responses</b>
                            </label>
                            <div className="col-sm-7 col-form-label text-start">
                                <label htmlFor="wd-points"
                                    className="wd-type">
                                    {quizDetails.viewResponses}
                                </label>
                            </div>
                        </div>

                        <div className="row">
                            <label htmlFor="grade"
                                className="col-sm-5 col-form-label text-end">
                                <b>Show Correct Answers</b>
                            </label>
                            <div className="col-sm-7 col-form-label text-start">
                                <label htmlFor="wd-points"
                                    className="wd-type">
                                    {quizDetails.showAnswers}
                                </label>
                            </div>
                        </div>

                        <div className="row">
                            <label htmlFor="grade"
                                className="col-sm-5 col-form-label text-end">
                                <b>One Question at a Time</b>
                            </label>
                            <div className="col-sm-7 col-form-label text-start">
                                <label htmlFor="wd-points"
                                    className="wd-type">
                                    {quizDetails.oneQuestionAtATime}
                                </label>
                            </div>
                        </div>

                        <div className="row">
                            <label htmlFor="grade"
                                className="col-sm-5 col-form-label text-end">
                                <b>Require Respondus Lockdown Browser</b>
                            </label>
                            <div className="col-sm-7 col-form-label text-start">
                                <label htmlFor="wd-points"
                                    className="wd-type">
                                   {quizDetails.respondusLockDown ? "Yes" : "No"}
                                </label>
                            </div>
                        </div>

                        <div className="row">
                            <label htmlFor="grade"
                                className="col-sm-5 col-form-label text-end">
                                <b>Required to View Quiz Results</b>
                            </label>
                            <div className="col-sm-7 col-form-label text-start">
                                <label htmlFor="wd-points"
                                    className="wd-type">
                                    {quizDetails.requiredViewResults ? "Yes" : "No"}
                                </label>
                            </div>
                        </div>

                        <div className="row">
                            <label htmlFor="grade"
                                className="col-sm-5 col-form-label text-end">
                                <b>Webcam Required</b>
                            </label>
                            <div className="col-sm-7 col-form-label text-start">
                                <label htmlFor="wd-points"
                                    className="wd-type">
                                    {quizDetails.webcam}
                                </label>
                            </div>
                        </div>

                        <div className="row">
                            <label htmlFor="grade"
                                className="col-sm-5 col-form-label text-end">
                                <b>Lock Questions After Answering</b>
                            </label>
                            <div className="col-sm-7 col-form-label text-start">
                                <label htmlFor="wd-points"
                                    className="wd-type">
                                    {quizDetails.lockQuestions}
                                </label>
                            </div>
                        </div>

                    </div>
                </div>


                {/* THE BOTTOM TABLE */}
                <div id="wd-css-responsive-tables"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '10vh',
                    }}
                >
                    <div className="table-responsive col-sm-8">
                        <table className="table">
                            <thead>
                                <tr><th>Due</th><th>For</th><th>Available From</th><th>Until</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{quizDetails.dueDate}</td><td>{quizDetails.assignTo}</td><td>{quizDetails.until}</td><td>{quizDetails.dueDate}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        )
    }
}