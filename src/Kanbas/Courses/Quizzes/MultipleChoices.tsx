import React, { useState } from 'react';
import { TiPencil } from 'react-icons/ti';
import { FaTrash, FaPlus } from 'react-icons/fa';

interface MultipleChoicesProps {
    points?: number; // Optional prop for points input (can extend later if needed)
}

const MultipleChoices: React.FC<MultipleChoicesProps> = () => {
    const [answers, setAnswers] = useState<{ id: number; text: string }[]>([
        { id: 1, text: '' },
        { id: 2, text: '' },
        { id: 3, text: '' },
    ]);

    const handleAddAnswer = () => {
        setAnswers([...answers, { id: answers.length + 1, text: '' }]);
    };

    const handleAnswerChange = (id: number, newText: string) => {
        setAnswers(answers.map(answer => (answer.id === id ? { ...answer, text: newText } : answer)));
    };

    const handleDeleteAnswer = (id: number) => {
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

            <div>Enter your question and multiple answers, then select the correct answer.</div>
            <textarea placeholder="Question Text" className="form-control" />

            {/* List of Answers */}
            <div>
                <label>Answers:</label>
                {answers.map((answer, index) => (
                    <div key={answer.id} className="d-flex align-items-center mt-2">
                        {/* Correct Answer Radio Button */}
                        <input type="radio" name="correct-answer" className="me-2" />

                        {/* Answer Textarea */}
                        <textarea
                            placeholder={`Answer ${index + 1}`}
                            className="form-control me-3"
                            value={answer.text}
                            onChange={(e) => handleAnswerChange(answer.id, e.target.value)}
                        />

                        {/* Pencil and Trash Icons */}
                        <div className="d-flex align-items-center">
                            <TiPencil
                                className="text-success me-2"
                                size={24}
                                onClick={() => console.log(`Edit answer ${index + 1}`)}
                                style={{ cursor: 'pointer' }}
                            />
                            <FaTrash
                                className="text-danger"
                                size={24}
                                onClick={() => handleDeleteAnswer(answer.id)}
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

export default MultipleChoices;
