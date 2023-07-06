export default function Result({score, quizLenght, handleReset}) {
  return (
    <div>
      <h3>Result </h3>
      <p>Your score {score} out of {quizLenght}</p>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
