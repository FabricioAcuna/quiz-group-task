import { QuizContext } from "@/contexts/QuizContext";
import { useContext } from "react";

export default function Quiz() {
  const { questions } = useContext(QuizContext);
  return (
    <div>
      <div className="">
        {questions.map((question, index) => {
          return (
            <div key={index}>
              <p>{question.text}</p>
              <button>{question.alt}</button>
              <p>{question.score}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
