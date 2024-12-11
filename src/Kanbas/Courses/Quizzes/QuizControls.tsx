import { FaPlus } from "react-icons/fa6";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { useSelector, useDispatch } from "react-redux";
import { IoEllipsisVertical } from "react-icons/io5";
import { createQuiz } from "./reducer";

export default function QuizControls({ cid }: { cid: string }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const quizzes = useSelector((state: any) => state.quizReducer.quizzes);

    const getNextId = () => {
        if (quizzes.length === 0) return 1;
        const maxId = Math.max(...quizzes.map((quiz: any) => Number(quiz._id || 0)));
        return maxId + 1;
    };

    //CREATE A NEW QUIZ WITH THE DEFAULT VALUES AND NAVIGATES TO THE QUIZ EDITOR SCREEN
    const createNewQuiz = () => {
        const qid = getNextId();
        const newQuiz = {
            _id: qid,
            name: `New Quiz ${qid}`,
            course: cid,
            lesson: [],
        };
        dispatch(createQuiz(newQuiz)); // Dispatch Redux action to add a new quiz
        navigate(`/Kanbas/Courses/${cid}/Quizzes/Editor/${qid}`); // Navigate to the editor
    };
    return (
        <div>
            <div id="wd-quiz-controls" className="text-nowrap float-end">
                <button id="wd-add-assignment-group" className="btn btn-md btn-secondary me-2 float-end">
                    <IoEllipsisVertical />
                </button>

                {/* <Link id="wd-add-quiz-btn" to={`/Kanbas/Courses/${cid}/Quizzes/QuizEditor/${qid}`}
                className="btn btn-md btn-danger me-2 float-end">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Quiz
            </Link> */}

                <button className="btn btn-danger me-2" onClick={createNewQuiz}>
                    <FaPlus /> Add Quiz
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