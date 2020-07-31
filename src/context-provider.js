/* To-Do List:
- Check to see if the answer is correct by passing the answer in nextQuestion()
- Keep score
- Take off Left.js or add helpful links for more learning like LDS.org
- center everything
- display results page with references once currentQuestion reaches 10
- play again button at bottom of results page

*/

import React from 'react'
import AppContext from './context'
import App from './App'
import questionService from './Questions'
import {produce} from 'immer'

export default class AppProvider extends React.Component {
    constructor(props) {
        super(props)
        this.actions = {
            chooseSelected: this.chooseSelected,
            start: this.start,
            nextQuestion: this.nextQuestion,
            getQuestions: this.getQuestions,
        }
        this.state = {
            questions: null,
            currentQuestion: null,
        }
    }

    

    getQuestions = () => {
        const resp = questionService()
        const questions = []

        for (let q of resp){
            q["selected"] = ""
            questions.push(q)
        }

        this.setState({
            questions: questions,
            currentQuestion: null,
        })
    }

    chooseSelected = (choice) => {
        // console.log("before: ")
        // console.log(this.state.questions[this.state.currentQuestion])

        //with this
        this.setState(state => produce(state, draft => {
            draft.questions[this.state.currentQuestion].selected = choice
        }),
            // () => {
            //     console.log("after:")
            //     console.log(this.state.questions[this.state.currentQuestion])
            // }
        )

        // console.log("after:")
        // console.log(this.state.questions[this.state.currentQuestion])
    }

    start = () => {
        // console.log("Starting Game")
        this.setState({currentQuestion: 0})
    }

    nextQuestion = () => {
        this.setState({currentQuestion: this.state.currentQuestion + 1})
    }

    render() {
        return (
            <AppContext.Provider 
                value={{
                ...this.state,
                ...this.actions, 
                }}>
                <App />
            </AppContext.Provider>
        )
    }

    componentDidMount() {
        this.getQuestions()
    }
}