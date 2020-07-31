import React from 'react'
import * as bs from 'react-bootstrap'
// import { Link} from 'react-router-dom'
import AppContext from './context'
import Answer from './answer'

function Quiz(props) {
    const context = React.useContext(AppContext)

    return (
        <bs.Card className="my-4 shadow mb-5 bg-white rounded" style={{ width: '100%'}}>
            <bs.Card.Body>
                <bs.Card.Title>Question #{context.currentQuestion + 1}</bs.Card.Title>
                <h4>{props.question}</h4>
                {props.choices.map((choice, index) => (
                    <Answer key={index} text={choice} />
                ))}
                {context.questions[context.currentQuestion].selected !== "" && 
                    <bs.Button className={"float-right"} onClick={() => context.nextQuestion()}>>></bs.Button>
                }
            </bs.Card.Body>
        </bs.Card>
    )
}
export default Quiz


  
