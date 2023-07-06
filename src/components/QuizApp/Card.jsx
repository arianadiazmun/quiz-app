export default function Card({ data, quizId, quizLenght, handleAnswer }) {
  return (
    <div className="quiz-card">
      <p>
        {quizId + 1}/{quizLenght}
      </p>
      <h3>{data[quizId].question}</h3>
      <ul>
        {data[quizId].options.map((element, index) => {
          return (<li key={index}
          onClick={ () => {handleAnswer(element.isCorrect)} }>{element.answer}</li>);
        }
        )
        }
      </ul>
    </div>
  );
}
