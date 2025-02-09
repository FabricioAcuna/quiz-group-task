import { QuizContext } from "@/contexts/QuizContext";
import { useContext } from "react";

export default function Quiz() {
  const {
    questions,
    score,
    selectedAnswers,
    handleAnswer,
    isQuizCompleted,
    resetQuiz,
    currentQuestionIndex, // Tillagd från quizcontext filen
  } = useContext(QuizContext);

  if (isQuizCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-indigo-500 to-pink-500 flex flex-col justify-center items-center">
        <h1 className="text-white text-4xl font-bold mb-4">Quiz Completed!</h1>
        <p className="text-white text-3xl font-semibold mb-6 flex items-center">
          Total score: {score}/{questions.length}
        </p>

        <button
          onClick={resetQuiz}
          className="px-4 py-2 text-lg font-semibold text-white bg-blue-900 rounded-lg hover:bg-blue-950"
        >
          Restart Quiz
        </button>
      </div>
    );
  }

  const question = questions[currentQuestionIndex]

  return (
    <div className="min-h-screen bg-gradient-to-r from-fuchsia-500 to-cyan-500  flex flex-col justify-center items-center py-10">
      <h1 className="text-blue-900 text-6xl font-bold text-center mb-8">
        General knowledge quiz
      </h1>
      {/* <h2 className="text-white text-2xl mb-6">Score: {score}</h2> */}


{/* Gamla koden, denna visar alla frågorna
      {questions.map((question, index) => (
        <div key={index} className="text-center mb-6">
          <p className="text-white text-2xl font-semibold mb-4">
            {question.text}
          </p>
          <div className="flex gap-2 justify-center">
            {question.alt.map((answer, answerIndex) => {
              const answerState = selectedAnswers[index];
              let buttonClass =
                "px-4 py-2 text-base text-white font-semibold bg-blue-900 rounded-lg";

              if (answerState) {
                if (answerState.selected === answerIndex) {
                  buttonClass += answerState.correct
                    ? " bg-green-500"
                    : " bg-red-500";
                } else {
                  buttonClass += " opacity-50";
                }
              }
          */}

        <div className="text-center mb-6">
        <p className="text-white text-2xl font-semibold mb-4">{question.text}</p>
        <div className="flex flex-col gap-4 justify-center">
          {question.alt.map((answer, answerIndex) => {
            const answerState = selectedAnswers[currentQuestionIndex];
            let buttonClass =
              "px-6 py-3 text-lg font-semibold text-white bg-blue-900 rounded-lg transition";

            if (answerState) {
              if (answerState.selected === answerIndex) {
                buttonClass += answerState.correct ? " bg-green-500" : " bg-red-500";
              } else {
                buttonClass += " opacity-50";
              }
            }

            return (
              <button
                key={answerIndex}
                className={buttonClass}
                onClick={() => handleAnswer(currentQuestionIndex, answerIndex)}
                disabled={!!answerState}
              >
                {answer}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
