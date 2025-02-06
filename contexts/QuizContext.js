import { createContext, useState } from "react";

export const QuizContext = createContext();

export default function QuizProvider({ children }) {
  const [questions, setQuestions] = useState([
    { text: "Vad är Sveriges huvudstad?", alt: ["a", "b", "c"], correct: 0 },
    { text: "Vad är Norges huvudstad?", alt: ["a", "b", "c"], correct: 1 },
    { text: "Vad är Tysklands huvudstad?", alt: ["a", "b", "c"], correct: 2 },
    { text: "Vad är Finlands huvudstad?", alt: ["a", "b", "c"], correct: 0 },
    { text: "Vad är Spaniens huvudstad?", alt: ["a", "b", "c"], correct: 2 },
  ]);

  return (
    <QuizContext.Provider value={{ questions, setQuestions }}>
      {children}
    </QuizContext.Provider>
  );
}
