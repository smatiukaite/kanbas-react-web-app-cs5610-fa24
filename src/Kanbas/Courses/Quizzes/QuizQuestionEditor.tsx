import { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import FillInTheBlank from './FillInTheBlank';
import MultipleChoices from './MultipleChoices';
import TrueFalse from './TrueFalse';
import { createQuestion, updateQuestion } from './reducer';

export default function QuizQuestionEditor(
    { question = null

    }: { question: any | null }

) {
    const { cid, qid: quizId } = useParams<{ cid: string, qid: string }>();
    //const reducer = useSelector((state: any) => state.quizReducer);
    const [questionState, setQuestion] = useState(() => {
        if (question) {
            return question;
        }
        else {
            return {
                _id: null,
                title: "New Question",
                quizId: quizId,
                questionType: "MULTIPLE CHOICE",
                questionText: "",
                points: 0,

            }
        }
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    // SWITCH FOR THE QUESTIONS
    const renderQuestionTemplate = (question: any, setQuestion: React.Dispatch<any>) => {
        switch (question.questionType) {
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

    return (
        <div>
            <div className="col-md-6">
                <input className="form-control"
                    value={questionState.title}
                    onChange={(e) => setQuestion({ ...questionState, title: e.target.value })}
                    type="text"
                    placeholder='Question title'
                    typeof="text"

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
                    value={questionState.questionType}
                    onChange={(e) => setQuestion({ ...questionState, questionType: e.target.value })}
                    className="form-select ms-3"
                >
                    <option value="MULTIPLE CHOICE">Multiple Choice</option>
                    <option value="TRUE FALSE">True/False</option>
                    <option value="FILL IN THE BLANK">Fill in the Blank</option>
                </select>
            </div>

            {renderQuestionTemplate(questionState, setQuestion)}

            <div style={{ display: "flex", justifyContent: "right", alignItems: "center", gap: "10px" }}>
                <button onClick={() => {/*handleDeleteQuestionClick*/ }}
                    type="button"
                    className="btn btn-secondary">
                    Delete
                </button>

                <button
                    id="wd-save-quiz"
                    className="btn btn-md btn-success me-0"
                    onClick={() => {
                        if (questionState)
                            dispatch(updateQuestion(questionState))
                        else {
                            dispatch(createQuestion(questionState));
                        }
                    }}
                >
                    {questionState ?
                        (<span>Update Question</span>)
                        :
                        (<span>Create Question</span>)
                    }
                </button>
            </div>
            <hr></hr>
        </div>
    )
};


