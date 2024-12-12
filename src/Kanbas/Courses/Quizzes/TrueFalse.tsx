import React, { useState } from 'react';

interface TrueFalseProps {
    points?: number; // Optional prop for points input (can extend later if needed)
}

const TrueFalse: React.FC<TrueFalseProps> = () => {
    const [questionText, setQuestionText] = useState('');
    const [correctAnswer, setCorrectAnswer] = useState<string | null>(null);

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

            <div>Enter your question and select True or False as the correct answer.</div>

            {/* Question Text */}
            <textarea
                placeholder="Question Text"
                className="form-control"
                value={questionText}
                onChange={(e) => setQuestionText(e.target.value)}
            />

            {/* True/False Options */}
            <div className="mt-3">
                <div className="d-flex align-items-center mt-2">
                    <input
                        type="radio"
                        name="correct-answer"
                        value="true"
                        className="me-2"
                        checked={correctAnswer === 'true'}
                        onChange={() => setCorrectAnswer('true')}
                    />
                    <label className="ms-2">True</label>
                </div>
                <div className="d-flex align-items-center mt-2">
                    <input
                        type="radio"
                        name="correct-answer"
                        value="false"
                        className="me-2"
                        checked={correctAnswer === 'false'}
                        onChange={() => setCorrectAnswer('false')}
                    />
                    <label className="ms-2">False</label>
                </div>
            </div>
        </div>
    );
};

export default TrueFalse;
