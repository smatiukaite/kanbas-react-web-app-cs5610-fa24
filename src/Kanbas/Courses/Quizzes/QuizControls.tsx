import { FaPlus } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { useSelector } from "react-redux";
import QuizEditor from "./QuizEditor";
import { quizzes } from "../../Database";
import { IoEllipsisVertical } from "react-icons/io5";
export default function AssignmentControls({ cid }: { cid: string }) {
    const navigate = useNavigate();
    const getNextId = () => {
        if (quizzes.length === 0) return 1; // Default to 1 if no assignments
        const maxId = Math.max(...quizzes.map((quiz: any) => Number(quiz._id || 0)));
        return maxId + 1;
    };

    return (
        <div id="wd-quiz-controls" className="text-nowrap">
            <button id="wd-add-assignment-group" className="btn btn-md btn-secondary me-2 float-end">
                <IoEllipsisVertical />
            </button>

            <Link id="wd-add-quiz-btn" to={`/Kanbas/Courses/${cid}/Quizzes/QuizEditor`}
                className="btn btn-md btn-danger me-2 float-end">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Quiz
            </Link>

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