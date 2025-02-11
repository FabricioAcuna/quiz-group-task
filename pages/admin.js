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
    <div className="bg-gradient-to-l from-slate-400 to-slate-500 min-h-max p-4">
      <Link className="underline ml-2" href={"/quiz"}>
        Quiz home
      </Link>
      <div className="flex flex-col gap-4 pt-4 mx-2 md:w-1/3">
        <h2 className="font-bold text-2xl">Add new question</h2>
        <label className="font-semibold">Question:</label>
        <input
          className="border border-black px-1 text-black"
          value={questionName}
          onChange={(e) => setQuestionName(e.target.value)}
        />
        <label className="font-semibold">Answer alternatives:</label>
        {answerAlts.map((alt, index) => (
          <input
            key={index}
            className="border border-black px-1 text-black"
            value={alt}
            onChange={(e) => {
              const updatedAnswerAlts = [...answerAlts];
              updatedAnswerAlts[index] = e.target.value;
              setAnswerAlts(updatedAnswerAlts);
            }}
          />
        ))}
        <label className="font-semibold">Correct answer :</label>
        <input
          className="border border-black px-1 text-black"
          value={correctAnswer}
          onChange={(e) => setCorrectAnswer(e.target.value)}
        />
      </div>
      <button
        className="border border-solid border-black font-semibold bg-teal-600 hover:bg-teal-700 px-6 py-3 mt-10 ml-2 rounded-lg"
        onClick={handleAddQuestion}
      >
        Add Question
      </button>

      <h2 className="font-bold text-2xl mt-8 ml-2">Current questions</h2>
      {questions.map((question, index) => (
        <div className="flex flex-col gap-4 py-4 mx-2 md:w-1/3" key={index}>
          <label className="font-semibold">Question:</label>
          <input
            className="border px-1 border-black text-black"
            type="text"
            value={question.text}
            onChange={(e) => updateQuizText(e.target.value, index)}
          />

          {question.alt.map((alt, altIndex) => (
            <div className="flex flex-col gap-4" key={altIndex}>
              <label className="font-semibold">Answer alt {altIndex + 1}</label>
              <input
                className="border px-1 border-black text-black"
                type="text"
                value={alt}
                onChange={(e) =>
                  updateAnswerAlternatives(index, e.target.value, altIndex)
                }
              />
            </div>
          ))}
          <label className="font-semibold">Correct Answer:</label>
          <input
            className="border px-1 border-black text-black"
            type="number"
            value={question.correct}
            onChange={(e) => updateCorrectAnswer(index, e.target.value)}
          />
          <button
            className="mt-2 border border-solid border-black font-semibold bg-red-500 hover:bg-red-600 px-2 py-1 rounded-lg w-fit"
            onClick={() => handleDeleteQuiz(index)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
