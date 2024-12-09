import { FaPlus } from 'react-icons/fa6';
import { useNavigate, useParams } from 'react-router-dom';

export default function QuizPreview() {
    const navigate = useNavigate();
    const { cid } = useParams<{ cid: string }>();
    
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