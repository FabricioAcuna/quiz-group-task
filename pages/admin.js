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
        correct: parseInt(correctAnswer),
      };

      setQuestions([...questions, newQuestion]);

      setQuestionName("");
      setAnswerAlts(["", "", ""]);
      setCorrectAnswer("");
    }
  }
  function updateQuizText(text, index) {
    const updatedQuestions = questions.map((question, i) => {
      if (i === index) {
        return {
          ...question,
          text: text,
        };
      }
      return question;
    });
    setQuestions(updatedQuestions);
  }
  function updateAnswerAlternatives(index, value, altIndex) {
    const updatedQuestions = questions.map((question, i) => {
      if (i === index) {
        const updatedAlts = [...question.alt];
        updatedAlts[altIndex] = value;
        return {
          ...question,
          alt: updatedAlts,
        };
      }
      return question;
    });
    setQuestions(updatedQuestions);
  }
  function updateCorrectAnswer(index, value) {
    const updatedQuestions = questions.map((question, i) => {
      if (i === index) {
        return {
          ...question,
          correct: parseInt(value),
        };
      }
      return question;
    });
    setQuestions(updatedQuestions);
  }

  function handleDeleteQuiz(index) {
    const updatedQuiz = questions.filter((_, i) => i !== index);
    setQuestions(updatedQuiz);
  }

  return (
    <div className="bg-gradient-to-l from-slate-600 to-slate-800 min-h-max">
      <Link className=" underline" href={"/quiz"}>
        Quiz home
      </Link>
      <div className="flex flex-col gap-4 pl-4 pt-4">
        <h2 className="font-bold text-2xl">Add new question</h2>
        <label className="font-bold text-xl">Question:</label>
        <input
          className="border text-black w-1/2"
          value={questionName}
          onChange={(e) => setQuestionName(e.target.value)}
        />
        <label className="font-bold text-xl">Answer alternatives:</label>
        {answerAlts.map((alt, index) => (
          <input
            key={index}
            className="border text-black w-1/2"
            value={alt}
            onChange={(e) => {
              const updatedAnswerAlts = [...answerAlts];
              updatedAnswerAlts[index] = e.target.value;
              setAnswerAlts(updatedAnswerAlts);
            }}
          />
        ))}
        <label className="font-bold text-xl">Correct answer :</label>
        <input
          className="border text-black w-1/2"
          value={correctAnswer}
          onChange={(e) => setCorrectAnswer(e.target.value)}
        />
      </div>
      <button
        className="border border-solid border-black font-semibold bg-teal-700 px-8 py-4 mt-10 ml-4"
        onClick={handleAddQuestion}
      >
        Skapa Fråga
      </button>

      <h2 className="font-bold text-2xl text-center">Nuvarande frågor</h2>
      {questions.map((question, index) => (
        <div className="text-center pt-5" key={index}>
          <label className="flex justify-center p-2">Question:</label>
          <input
            className="border border-solid border-black text-black"
            type="text"
            value={question.text}
            onChange={(e) => updateQuizText(e.target.value, index)}
          />

          {question.alt.map((alt, altIndex) => (
            <div key={altIndex}>
              <label className="flex justify-center p-2">Answers :</label>
              <input
                className="border border-solid border-black text-black"
                type="text"
                value={alt}
                onChange={(e) =>
                  updateAnswerAlternatives(index, e.target.value, altIndex)
                }
              />
            </div>
          ))}
          <label className="flex justify-center p-2">Correct Answer:</label>
          <input
            className="border border-solid border-black text-black"
            type="number"
            value={question.correct}
            onChange={(e) => updateCorrectAnswer(index, e.target.value)}
          />
          <p className="p-2">Correct: {question.correct}</p>
          <button
            className="mt-2 border border-solid border-black font-semibold bg-red-600"
            onClick={() => handleDeleteQuiz(index)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
