import { FaPlus } from "react-icons/fa6";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { useSelector, useDispatch } from "react-redux";
import { IoEllipsisVertical } from "react-icons/io5";
import { createQuiz } from "./reducer";

export default function QuizControls({ cid }: { cid: string }) {
    // const { qid } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const quizzes = useSelector((state: any) => state.quizReducer.quizzes);

    const getNextId = () => {
        if (quizzes.length === 0) return 1;
        const maxId = Math.max(...quizzes.map((quiz: any) => Number(quiz._id) || 0));
        return maxId + 1;
    };

    //CREATE A NEW QUIZ WITH THE DEFAULT VALUES AND NAVIGATES TO THE QUIZ EDITOR SCREEN
    const handleCreateQuiz = () => {
        // const qid = getNextId();
        const newQuiz = {
            _id: new Date().getTime().toString(),
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
            visibility: "Unpublished",
            viewResponses: "Always",
            respondusLockDown: false,
            requiredViewResults: false,
            questionData: [],
        };
        dispatch(createQuiz(newQuiz)); // Dispatch Redux action to add a new quiz
        navigate(`/Kanbas/Courses/${cid}/Quizzes/Editor/${newQuiz._id}`); // Navigate to the editor
    };

    return (
        <div>
            <div id="wd-quiz-controls" className="text-nowrap float-end">
                <button
                    id="wd-add-assignment-group"
                    className="btn btn-md btn-secondary me-2 float-end">
                    <IoEllipsisVertical />
                </button>

                {/* BUTTON TO CREATE A NEW QUIZ */}
                <button
                    className="btn btn-danger me-2"
                    onClick={handleCreateQuiz}
                >
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    Add Quiz
                </button>
            </div>
            <div>
                {/* Search and the magnifier */}
                <div className="wd-flex-containe">
                    <div className="wd-search-container">
                        <CiSearch className="wd-search-icon" />
                        <input
                            id="wd-search-quiz"
                            placeholder="Search for Quiz"
                            className="wd-search-input" />
                    </div>
                </div>
            </div>

        </div>
    );
}