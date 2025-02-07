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
}