const imageUri = process.env.PUBLIC_URL + '/images/';

export default function Card({ data, quizId, quizLenght, handleAnswer }) {
  return (
    <div className="quiz-card">
      <h2>Guess The Movie <span>({quizId + 1}/{quizLenght})</span></h2>
        <img src={imageUri + data[quizId].image} alt = ""/>
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
