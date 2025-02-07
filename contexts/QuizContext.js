import { createContext, useState } from "react";

export const QuizContext = createContext();

export default function QuizProvider({ children }) {
  const [questions, setQuestions] = useState([
    {
      text: "Vad är Sveriges huvudstad?",
      alt: ["Stockholm", "Göteborg", "Malmö"],
      correct: 0,
    },
    {
      text: "Vad är Norges huvudstad?",
      alt: ["A: Stockholm", "B: Oslo", "C: Köpenhamn"],
      correct: 1,
    },
    { text: "Vad är Tysklands huvudstad?", alt: ["a", "b", "c"], correct: 2 },
    { text: "Vad är Finlands huvudstad?", alt: ["a", "b", "c"], correct: 0 },
    { text: "Vad är Spaniens huvudstad?", alt: ["a", "b", "c"], correct: 2 },
  ]);

  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState({});

  const handleAnswer = (questionIndex, selectedAnswerIndex) => {
    if (answeredQuestions[questionIndex]) return;
    if (selectedAnswerIndex === questions[questionIndex].correct) {
      setScore((score) => score + 1);
    }

    setAnsweredQuestions((prev) => ({
      ...prev,
      [questionIndex]: true,
    }));
  };

  return (
    <QuizContext.Provider
      value={{ questions, setQuestions, score, handleAnswer }}
    >
      {children}
    </QuizContext.Provider>
  );
}
