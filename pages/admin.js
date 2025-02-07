import { useState, useContext } from "react";

//lägga till, ta bort och redigera frågor till quiz

export default function Admin() {

    const [questionName, setQuestionName] = useState("");
    const [answerAlts, setAnswerAlts] = useState([]);
    const [correctAnswer, setCorrectAnswer] = useState("");

    function handleAddQuestion() {
        if (question && alts && correct) {
            const newQuestion = {
                name: questionName,
                alts: answerAlts,
                correct: correctAnswer
            }

            setQuestionName("");
            setAnswerAlts("");
            setCorrectAnswer("");
        }
    }

    return (
        <div>
            <div className="flex flex-col gap-4">
                <h2 className="font-bold">Add new question</h2>
                <label>Question:</label>
                <input className="border" value={questionName}
                    onChange={(e) => setQuestionName(e.target.value)} />
                <label>Answer alternatives:</label>
                <input className="border" value={answerAlts}
                    onChange={(e) => setQuestionName(e.target.value)} />
                <label>Correct answer:</label>
                <input className="border" value={correctAnswer}
                    onChange={(e) => setQuestionName(e.target.value)} />
            </div>
        </div>
    )
}