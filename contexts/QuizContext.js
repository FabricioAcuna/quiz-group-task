import { createContext, useState } from "react";

export const QuizContext = createContext();

export default function QuizProvider({ children }) {
  const [questions, setQuestions] = useState([
    { text: "Vad är Sveriges huvudstad?", alt: ["Stockholm", "Göteborg", "Malmö"], correct: 0 },
    { text: "Vad är Norges huvudstad?", alt: ["Stockholm", "Oslo", "Köpenhamn"], correct: 1 },
    
    { text: "Vad är Tysklands huvudstad?", alt: ["a", "b", "c"], correct: 2 },
    { text: "Vad är Finlands huvudstad?", alt: ["a", "b", "c"], correct: 0 },
    { text: "Vad är Spaniens huvudstad?", alt: ["a", "b", "c"], correct: 2 },
  ]);

  const [score, setScore] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({}); 
  
// Spåra valda svar här ovanför

  const handleAnswer = (questionIndex, selectedAnswerIndex) => {
    const isCorrect = selectedAnswerIndex === questions[questionIndex].correct;
    if (isCorrect) setScore((prevScore) => prevScore + 1);

    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: { selected: selectedAnswerIndex, correct: isCorrect },
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

// Den här ovanför sparar det valda svaret om det är korrekt.

  return (
    <QuizContext.Provider value={{ questions, score, selectedAnswers, handleAnswer }}>
      {children}
    </QuizContext.Provider>
  );
}
