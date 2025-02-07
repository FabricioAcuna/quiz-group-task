import { QuizContext } from "@/contexts/QuizContext";
import { useState, useContext } from "react";

//lägga till, ta bort och redigera frågor till quiz

export default function Admin() {
    const { questions, setQuestions } = useContext(QuizContext);

    const [questionName, setQuestionName] = useState("");
    const [answerAlts, setAnswerAlts] = useState([]);
    const [correctAnswer, setCorrectAnswer] = useState("");

    function handleAddQuestion() {
        if (questionName && answerAlts && correctAnswer) {
            const newQuestion = {
                name: questionName,
                alt: answerAlts,
                correct: correctAnswer,
            };

            setQuestions([...questions, newQuestion]);
            setQuestionName("");
            setAnswerAlts("");
            setCorrectAnswer("");
        }
    }

    return (
        <div>
            <div className="flex flex-col gap-4 mx-24">
                <h2 className="font-bold">Add new question</h2>
                <label>Question:</label>
                <input
                    className="border"
                    value={questionName}
                    onChange={(e) => setQuestionName(e.target.value)}
                />
                <label>Answer alternatives:</label>
                <input
                    className="border"
                    value={answerAlts}
                    onChange={(e) => setAnswerAlts(e.target.value)}
                />   
                <input
                    className="border"
                    value={answerAlts}
                    onChange={(e) => setAnswerAlts(e.target.value)}
                />
                <input
                    className="border"
                    value={answerAlts}
                    onChange={(e) => setAnswerAlts(e.target.value)}
                />
                <label>Correct answer:</label>
                <input
                    className="border"
                    value={correctAnswer}
                    onChange={(e) => setCorrectAnswer(e.target.value)}
                />
                <button className="bg-blue-500" onClick={handleAddQuestion}>Add</button>
            </div>
        </div>
    );
}
