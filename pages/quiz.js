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
              <button className="px-6 py-3 text-lg font-semibold text-white bg-blue-900 rounded-lg hover:bg-blue-950">{question.alt}</button>
              <p>{question.score}</p>
            </div>
          );
        })}
      </div>
    </div>
  )
}

//   return (
//     <div className="min-h-screen bg-blue-500 flex flex-col justify-center items-center">
//       <h1 className="text-white text-5xl font-bold text-center mb-6">
//         Welcome to the quiz
//       </h1>
//       <button className="px-6 py-3 text-lg font-semibold text-white bg-blue-900 rounded-lg hover:bg-blue-950">
//         Start quiz
//       </button>
//     </div>
//   );
// }
