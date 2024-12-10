import { FaPlus } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

export default function QuizEditor() {
    const { cid } = useParams<{ cid: string }>();
    const navigate = useNavigate();
    const quizzes = useSelector((state: any) => state.quizReducer.quizzes);
    const quiz = { ...quizzes.find((it: any) => it._id === cid) };
    const dispatch = useDispatch();

    return (
        <div id="wd-quizzes-editor" className="wd-container-margins">
            <div className="wd-between-elements-margins" key={quiz._id}>
                <label htmlFor="wd-name" className="form-label">
                    Quiz Editor
                </label>

                <button
                    id="wd-add-quiz"
                    className="btn btn-md btn-danger me-2 float-end"
                    onClick={() => navigate(`/Kanbas/Courses/${cid}/Quizzes/`)}>
                    <FaPlus className="position-relative me-2 wd-bottom-padding" />
                    Edit
                </button>
            </div>
        </div>
    )
}