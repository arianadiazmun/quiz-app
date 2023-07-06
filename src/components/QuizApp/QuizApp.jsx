import { useState } from "react";
import "./QuizApp.css";
import Card from "./Card";
import data from "../../data/movie.json";
import Result from "./Result";

const quizLenght = data.length;

export default function QuizApp() {
  const [quizId, setQuizId] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (isCorrect) => {
    isCorrect && setScore(score + 1);

    //Increment the quizzId by 1 once the user clicks on an asnwer.
    const newQuizId = quizId + 1;

    newQuizId < quizLenght ? setQuizId(newQuizId) : setShowResult(true);
  };

  const handleReset = () => {
    setQuizId(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <>
      {!showResult ? (
        <Card
          data={data}
          quizLenght={quizLenght}
          quizId={quizId}
          handleAnswer={handleAnswer}
        />
      ) : (
        <Result
          score={score}
          quizLenght={quizLenght}
          handleReset={handleReset}
        />
      )}
    </>
  );
}
