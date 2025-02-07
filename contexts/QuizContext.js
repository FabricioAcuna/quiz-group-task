import { createContext, useState } from "react";

export const QuizContext = createContext();

export default function QuizProvider({ children }) {
  const [questions, setQuestions] = useState([
    {
      text: "What is the capital of Sweden?",
      alt: ["Stockholm", "Gothenburg", "Malmö"],
      correct: 0,
    },
    {
      text: "What is the capital of Norway?",
      alt: ["Helsinki", "Oslo", "Stockholm"],
      correct: 1,
    },
    {
      text: "What is the capital of Finland?",
      alt: ["Oslo", "Copenhagen", "Helsinki"],
      correct: 2,
    },
    {
      text: "What is the capital of Germany?",
      alt: ["Berlin", "Amsterdam", "Frankfurt"],
      correct: 0,
    },
    {
      text: "What is the capital of Spain?",
      alt: ["Sevilla", "Barcelona", "Madrid"],
      correct: 2,
    },
  ]);

  const [score, setScore] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  const handleAnswer = (questionIndex, selectedAnswerIndex) => {
    if (selectedAnswers[questionIndex]) return;

    const isCorrect = selectedAnswerIndex === questions[questionIndex].correct;
    if (isCorrect) setScore((prevScore) => prevScore + 1);

    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: { selected: selectedAnswerIndex, correct: isCorrect },
    }));

    if (Object.keys(selectedAnswers).length + 1 === questions.length) {
      setIsQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setScore(0);
    setSelectedAnswers({});
    setIsQuizCompleted(false);
  };

  return (
    <QuizContext.Provider
      value={{
        questions,
        setQuestions,
        score,
        selectedAnswers,
        isQuizCompleted,
        handleAnswer,
        resetQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}
