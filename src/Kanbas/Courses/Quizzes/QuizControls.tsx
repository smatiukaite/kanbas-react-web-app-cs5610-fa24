import { FaPlus } from "react-icons/fa6";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { useSelector, useDispatch } from "react-redux";
import { IoEllipsisVertical } from "react-icons/io5";
import { createQuiz } from "./reducer";

export default function QuizControls({ cid }: { cid: string }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const quizzes = useSelector((state: any) => state.quizReducer.quizzes);

    //CREATE A NEW QUIZ WITH THE DEFAULT VALUES AND NAVIGATES TO THE QUIZ EDITOR SCREEN
    const handleCreateQuiz = () => {
        navigate(`/Kanbas/Courses/${cid}/Quizzes/Editor/`); // Navigate to the editor
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
                    id="wd-add-quiz-btn"
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