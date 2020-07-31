import React from 'react'
import * as bs from 'react-bootstrap'
// import { Link} from 'react-router-dom'
import AppContext from './context'
import Answer from './answer'

function Results(props) {
    const context = React.useContext(AppContext)
    console.log(context.questions[0].question)
    let score = 0

    for (let q of context.questions){
        if (q.selected === q.answer){
            score += 1
        }
    }

    return (
        <>
            <bs.Button onClick={() => context.getQuestions()} className={"float-right mt-2 mr-2"}>Start Over</bs.Button>
            <h4>Total Score: {score}/10</h4>
            {Object.values(context.questions).map((Question, index) => (
                <bs.Card key={index} className="my-4 shadow mb-5 bg-white rounded" style={{ width: '100%' }}>
                    <bs.Card.Body>
                        <bs.Card.Title>Question #{index + 1} &nbsp;&nbsp;&nbsp; {context.questions[index].selected === context.questions[index].answer ? "(1/1)" : "(0/1)"}</bs.Card.Title>
                        <h4>{Question.question}</h4>
                        {Question.choices.map((choice, ind) => (
                            <Answer key={ind} qNum={index} text={choice} />
                        ))}
                        <h5>Learn More:</h5>
                        <h6>{Question.reference}</h6>
                    </bs.Card.Body>
                </bs.Card>
            ))}
        </>
        
    )
}
export default Results