import React, {useState} from "react";
import {Link, Route, Routes, useNavigate} from "react-router-dom";
import {randomQuestion, isCorrectAnswer} from "./questions";

export function FrontPage({correctAnswer, questionsAnswered}) {
    return <div data-testid={"status"}>
            <h1>Welcome to the most simplified quiz ever!!</h1>
            <h2>you have answered {correctAnswer} / {questionsAnswered} correct</h2>
       <Link to={"/showQuestion"}>
           <button>ny quiz</button>
       </Link>
        </div>

}

function ShowQuestion({setCorrectAnswer, setQuestionAnswered}) {
    const [question, setQuestion] = useState(randomQuestion())
    const navigate = useNavigate()
    function handleAnswer( answer) {
        setQuestionAnswered(prev => prev +1)
        if(isCorrectAnswer(question, answer)) {
            setCorrectAnswer(prev => prev +1)
            navigate("/answer/correct")
        } else if(!isCorrectAnswer(question, answer)) {
            navigate("/answer/wrong")
        }

    }
    return<div>
            <h1>Welcome to show question</h1>
            <h2>{question.question}</h2>
            {Object.keys(question.answers).filter(value => question.answers[value]).map(display => {

                return <div key={display}> <button onClick={() => handleAnswer(display)}>{question.answers[display]}</button></div>
            })}
        </div>

}


function ShowAnswer() {
    return <div>
        <Routes>
            <Route path={"correct"} element={<h1>correct</h1>} />
            <Route path={"wrong"} element={<h1>wrong</h1>} />
        </Routes>
        <div>
            <Link to={"/"}>Show score</Link>
        </div>
        <div>
            <Link to={"/showQuestion"}>new question</Link>
        </div>
    </div>;
}

export function App() {
    const [correctAnswer, setCorrectAnswer] = useState(0)
    const [questionsAnswered, setQuestionAnswered] = useState(0)
    console.log(correctAnswer)
    return(
        <Routes>
            <Route path={"/"} element={<FrontPage correctAnswer={correctAnswer} questionsAnswered={questionsAnswered} />}/>
            <Route path={"/showQuestion"} element={<ShowQuestion setCorrectAnswer={setCorrectAnswer} setQuestionAnswered={setQuestionAnswered} />} />
            <Route path={"/answer/*"} element={<ShowAnswer />} />
        </Routes>
    )
}
