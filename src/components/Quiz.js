import React from "react";
import "./Quiz.css";

function Quiz({ quiz, handleAnswerButtonClick }) {
  return (
    <div>
      <h4 className="question">{quiz.question}</h4>
      <div className="answer">
        <ul>
          {quiz.incorrect_answers.map((answer, index) => (
            <li key={index}>
              <button
                className="answer-list"
                onClick={() => handleAnswerButtonClick(answer)}
              >
                {answer}
              </button>
            </li>
          ))}
          <li>
            <button
              className="answer-list"
              onClick={() => handleAnswerButtonClick(quiz.correct_answer)}
            >
              {quiz.correct_answer}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Quiz;
