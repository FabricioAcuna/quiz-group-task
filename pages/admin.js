import { QuizContext } from "@/contexts/QuizContext";
import Link from "next/link";
import { useState, useContext } from "react";

export default function Admin() {
  const { questions, setQuestions } = useContext(QuizContext);

  const [questionName, setQuestionName] = useState("");
  const [answerAlts, setAnswerAlts] = useState(["", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState("");

  function handleAddQuestion() {
    if (
      questionName &&
      answerAlts.every((alt) => alt !== "") &&
      correctAnswer !== ""
    ) {
      const newQuestion = {
        text: questionName,
        alt: answerAlts,
        correct: parseInt(correctAnswer, 10),
      };

      setQuestions([...questions, newQuestion]);

      setQuestionName("");
      setAnswerAlts(["", "", ""]);
      setCorrectAnswer("");
    } else {
      alert("Please fill in all fields");
    }
  }

  function handleDeleteQuiz(index) {
    const updatedQuiz = questions.filter((_, i) => i !== index);
    setQuestions(updatedQuiz);
  }

  function handleAnswerChange(index, value) {
    const updatedAnswers = [...answerAlts];
    updatedAnswers[index] = value;
    setAnswerAlts(updatedAnswers);
  }

  return (
    <div className=" bg-blue-500 min-h-max">
      <Link href={"/quiz"}>Quiz home</Link>
      <div className="flex flex-col gap-4">
        <h2 className="font-bold">Add new question</h2>
        <label>Question:</label>
        <input
          className="border text-black"
          value={questionName}
          onChange={(e) => setQuestionName(e.target.value)}
        />
        <label>Answer alternatives:</label>
        {answerAlts.map((alt, index) => (
          <input
            key={index}
            className="border text-black"
            value={alt}
            onChange={(e) => handleAnswerChange(index, e.target.value)}
          />
        ))}
        <label>Correct answer (index):</label>
        <input
          className="border text-black"
          value={correctAnswer}
          onChange={(e) => setCorrectAnswer(e.target.value)}
        />
      </div>
      <button
        className="border border-solid border-black"
        onClick={handleAddQuestion}
      >
        Skapa Fråga
      </button>

      <h2 className="font-bold mt-4">Nuvarande frågor</h2>
      {questions.map((question, index) => (
        <div className="text-center" key={index}>
          <p>{question.text}</p>
          <p>
            {Array.isArray(question.alt) &&
              question.alt.map((alt, i) => <span key={i}>{alt} </span>)}
          </p>
          <p>Correct: {question.correct}</p>
          <button
            className="mt-2 border border-solid border-black"
            onClick={() => handleDeleteQuiz(index)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
