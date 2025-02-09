import { createContext, useState } from "react";

export const QuizContext = createContext();

export default function QuizProvider({ children }) {
  const [questions, setQuestions] = useState([
    {
      text: "Who painted the Mona Lisa?",
      alt: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso"],
      correct: 1,
    },
    {
      text: "What is the longest river in the world?",
      alt: ["Nile", "Amazon", "Yangtze"],
      correct: 0,
    },
    {
      text: "What is the capital of Brazil?",
      alt: ["São Paulo", "Rio de Janeiro", "Brasília"],
      correct: 2,
    },
    {
      text: " What is the largest ocean on Earth?",
      alt: ["Atlantic Ocean", " Indian Ocean", "Pacific Ocean"],
      correct: 2,
    },
    {
      text: "Which country is home to the Great Wall?",
      alt: ["Japan", "China", "Thailand"],
      correct: 1,
    },
    {
      text: "What is the fastest land animal?",
      alt: ["Cheetah", "Lion", " Gazelle"],
      correct: 0,
    },
    {
      text: "Which is considered the best football team in Sweden?",
      alt: ["Malmö FF", "AIK", "Djurgårdens IF"],
      correct: 1,
    },
  ]);

  const [score, setScore] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Extra tillagd - Håller koll på vad som visas


  const handleAnswer = (questionIndex, selectedAnswerIndex) => {
    if (selectedAnswers[questionIndex]) return;

    const isCorrect = selectedAnswerIndex === questions[questionIndex].correct;
    if (isCorrect) setScore((prevScore) => prevScore + 1);

    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: { selected: selectedAnswerIndex, correct: isCorrect },
    }));


    // Tidigare kod
    /*if (Object.keys(selectedAnswers).length + 1 === questions.length) {
      setIsQuizCompleted(true);
    } */

      setTimeout(() => {
        if (questionIndex + 1 < questions.length) {
          setCurrentQuestionIndex(questionIndex + 1);
        } else {
          setIsQuizCompleted(true);
        }
      }, 1000);



  };

  const resetQuiz = () => {
    setScore(0);
    setSelectedAnswers({});
    setIsQuizCompleted(false);
    setCurrentQuestionIndex(0); // Tillbaks till första
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
        currentQuestionIndex
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}
