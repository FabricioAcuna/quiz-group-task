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
  } = useContext(QuizContext);

  if (isQuizCompleted) {
    return (
      <div className="min-h-screen bg-blue-500 flex flex-col justify-center items-center">
        <h1 className="text-white text-4xl font-bold mb-4">Quiz Completed!</h1>
        <p className="text-white text-3xl font-semibold mb-6 flex items-center">
          <span className="mr-2">Total Score:</span>
          <span className="text-4xl font-bold text-yellow-400">{score}</span>
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

  return (
    <div className="min-h-screen bg-blue-400 flex flex-col justify-center items-center py-10">
      <h1 className="text-blue-900 text-5xl font-bold text-center mb-8">
        Capital cities quiz
      </h1>
      {/* <h2 className="text-white text-2xl mb-6">Score: {score}</h2> */}

      {questions.map((question, index) => (
        <div key={index} className="text-center mb-6">
          <p className="text-white text-xl font-semibold mb-4">{question.text}</p>
          <div className="flex gap-2 justify-center">
            {question.alt.map((answer, answerIndex) => {
              const answerState = selectedAnswers[index];
              let buttonClass =
                "px-4 py-2 text-lg text-white bg-blue-900 rounded-lg";

              if (answerState) {
                if (answerState.selected === answerIndex) {
                  buttonClass += answerState.correct
                    ? " bg-green-500"
                    : " bg-red-500";
                } else {
                  buttonClass += " opacity-50";
                }
              }

              return (
                <button
                  key={answerIndex}
                  className={buttonClass}
                  onClick={() => handleAnswer(index, answerIndex)}
                  disabled={!!answerState}
                >
                  {answer}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
