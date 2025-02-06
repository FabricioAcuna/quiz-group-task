import { createContext, useState } from "react";

export const QuizContext = createContext();

export default function QuizProvider({ children }) {
  const [questions, setQuestions] = useState([
    { text: "Vad är...?", alt: ["a", "b", "c"], correct: 0 },
    { text: "Vad är...?", alt: ["a", "b", "c"], correct: 0 },
    { text: "Vad är...?", alt: ["a", "b", "c"], correct: 0 },
    { text: "Vad är...?", alt: ["a", "b", "c"], correct: 0 },
    { text: "Vad är...?", alt: ["a", "b", "c"], correct: 0 },
  ]);

  return (
    <QuizContext.Provider value={{ questions, setQuestions }}>
      {children}
    </QuizContext.Provider>
  );
}
