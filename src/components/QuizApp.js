import React, { useEffect, useState } from "react";
import Quiz from "./Quiz";
import "./QuizApp.css";

function QuizApp() {
  const apiUrl =
    "https://opentdb.com/api.php?amount=50&difficulty=easy&type=multiple";

  const [quizs, setQuizs] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl);
      const jsonData = await response.json();
      setQuizs(jsonData.results);
    } catch (e) {
      console.log(e, "error");
    }
  };

  const handleAnswerButtonClick = (selectedAnswer) => {
    const quiz = quizs[currentQuestion];
    if (selectedAnswer === quiz.correct_answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizs.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div>
      <h2>QUIZ APP</h2>
      {quizs.length > 0 ? (
        showScore ? (
          <div>
            <h2>Quiz Completed!</h2>
            <p>Your Score : {score}</p>
          </div>
        ) : (
          <Quiz
            quiz={quizs[currentQuestion]}
            handleAnswerButtonClick={handleAnswerButtonClick}
          />
        )
      ) : (
        <p>Loading ...</p>
      )}
    </div>
  );
}

export default QuizApp;
