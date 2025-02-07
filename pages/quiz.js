import { QuizContext } from "@/contexts/QuizContext";
import { useContext } from "react";

export default function Quiz() {
  const { questions, score, handleAnswer } = useContext(QuizContext);
  return (
    <div>
      <div className="min-h-screen bg-blue-500 flex flex-col justify-center items-center">
        <h1 className="text-white text-5xl font-bold text-center mb-6">
          Welcome to the quiz
        </h1>
        <h2 className="text-white text-2xl mb-6">Score: {score}</h2>

        {questions.map((question, index) => {
          return (
            <div key={index} className="text-center mb-6">
              <p className="text-white text-xl">{question.text}</p>

              <div className="flex gap-2 justify-center">
                {question.alt.map((answer, answerIndex) => (
                  <button
                    key={answerIndex}
                    className="px-3 py-1 text-lg font-semibold text-white bg-blue-900 rounded-lg hover:bg-blue-950"
                    onClick={() => handleAnswer(index, answerIndex)}
                  >
                    {answer}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
