import { QuizContext } from "@/contexts/QuizContext";
import { useContext } from "react";

export default function Quiz() {
  const { questions, score, selectedAnswers, handleAnswer } = useContext(QuizContext);

  return (
    <div className="min-h-screen bg-blue-500 flex flex-col justify-center items-center">
      <h1 className="text-white text-5xl font-bold text-center mb-6">
        Welcome to the Quiz
      </h1>
      <h2 className="text-white text-2xl mb-6">Score: {score}</h2>

      {questions.map((question, index) => (
        <div key={index} className="text-center mb-6">
          <p className="text-white text-xl mb-4">{question.text}</p>
          <div className="flex gap-2 justify-center">
            {question.alt.map((answer, answerIndex) => {
              const answerState = selectedAnswers[index];
              let buttonClass =
                "px-4 py-2 text-lg font-semibold text-white bg-blue-900 rounded-lg hover:bg-blue-950";

              if (answerState) {
                if (answerState.selected === answerIndex) {
                  buttonClass += answerState.correct
                    ? " bg-green-500"
                    : " bg-red-500";
                } else {
                  buttonClass += " opacity-50";
                }
              }

// Här ovanför byts färgerna till grönt eller rött och opacity-50 gör att om man inte väljer nån svar då syns de mindre 

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
