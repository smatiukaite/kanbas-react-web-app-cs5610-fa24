import { useState } from 'react';
import { TiPencil } from 'react-icons/ti';
import { FaTrash, FaPlus } from 'react-icons/fa';

interface Answer {
    id: number;
    text: string;
}

const FillInTheBlank: React.FC = () => {
    const [answers, setAnswers] = useState<Answer[]>([{ id: 1, text: '' }]); // Initial answer

    // Add a new blank answer
    const handleAddAnswer = (): void => {
        setAnswers([...answers, { id: answers.length + 1, text: '' }]);
    };

    // Handle text change for an answer
    const handleAnswerChange = (id: number, newText: string): void => {
        setAnswers(answers.map(answer => (answer.id === id ? { ...answer, text: newText } : answer)));
    };

    // Delete an answer
    const handleDeleteAnswer = (id: number): void => {
        setAnswers(answers.filter(answer => answer.id !== id));
    };

    return (
        <div>
            {/* Points Input */}
            <div className="col-md-3 mt-3 mb-3">
                <div className="d-flex align-items-center">
                    <span className="me-2">pts:</span>
                    <input
                        className="form-control"
                        type="number"
                        id="wd-number-input"


                        min="0"
                        max="100"
                        size={3}

                    />
                </div>
            </div>
            <div>Enter your question with a blank space (_) for the correct answer.</div>
            <textarea placeholder="Question with blank space" className="form-control" />

            <br></br>

            {/* List of Open Answers */}
            <div>
                <label>Possible Answers:</label>
                {answers.map((answer, index) => (
                    <div key={answer.id} className="d-flex align-items-center mt-2">
                        {/* Answer Text */}
                        <input
                            type="text"
                            value={answer.text}
                            placeholder={`Answer ${index + 1}`}
                            className="form-control me-3"
                            onChange={(e) => handleAnswerChange(answer.id, e.target.value)}
                        />

                        {/* Pencil and Trash Icons */}
                        <div className="d-flex align-items-center">
                            <TiPencil
                                className="text-success me-2"
                                size={24}
                                onClick={() => console.log(`Edit answer ${index + 1}`)} // Handle edit click
                                style={{ cursor: 'pointer' }}
                            />
                            <FaTrash
                                className="text-danger"
                                size={24}
                                onClick={() => handleDeleteAnswer(answer.id)} // Handle delete click
                                style={{ cursor: 'pointer' }}
                            />
                        </div>
                    </div>
                ))}

                {/* Add Another Answer */}
                <div className="text-add-another-answer float-end mt-3" onClick={handleAddAnswer}>
                    <FaPlus className="text-plus" style={{ color: "red", cursor: 'pointer' }} />
                    &nbsp;
                    <span style={{ color: 'red', cursor: 'pointer' }}>Add Another Answer</span>
                </div>
            </div>
        </div>
    );
};

export default FillInTheBlank;