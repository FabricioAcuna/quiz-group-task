import { QuizContext } from "@/contexts/QuizContext";
import { useContext } from "react";

export default function Quiz() {
  const { questions } = useContext(QuizContext);
  return (
    <div>
      <div className="min-h-screen bg-blue-500 flex flex-col justify-center items-center">
      <h1 className="text-white text-5xl font-bold text-center mb-6">Welcome to the quiz</h1>
        {questions.map((question, index) => {
          return (
            <div key={index}>
              <p>{question.text}</p>
              <div className="flex gap-2">
              <button className="px-3 py-1 text-lg font-semibold text-white bg-blue-900 rounded-lg hover:bg-blue-950">{question.alt[0]}</button>
              <button className="px-3 py-1 text-lg font-semibold text-white bg-blue-900 rounded-lg hover:bg-blue-950">{question.alt[1]}</button>
              <button className="px-3 py-1 text-lg font-semibold text-white bg-blue-900 rounded-lg hover:bg-blue-950">{question.alt[2]}</button>
              </div>
              <p>{question.score}</p>
            </div>
          );
        })}
      </div>
    </div>
  )
}


