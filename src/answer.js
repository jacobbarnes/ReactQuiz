import React, {useState} from 'react'
import * as bs from 'react-bootstrap'
import AppContext from './context'

function Answer(props) {
    const [bg, setBg] = useState("bg-white")
    const context = React.useContext(AppContext)
    const selectedBg = "bg-gradient-primary"

    console.log(context)
    console.log(props)

    if (!context.questions){
        return (<div>Loading . . .</div>)
    }

    if (context.currentQuestion === 10 && context.questions[props.qNum].selected === props.text && context.questions[props.qNum].selected !== context.questions[props.qNum].answer && bg !== "bg-gradient-danger") {
        setBg("bg-gradient-danger")
    }
    else if ((context.currentQuestion === 10 && context.questions[props.qNum].selected === props.text && context.questions[props.qNum].selected === context.questions[props.qNum].answer && bg !== "bg-gradient-success") || (context.currentQuestion === 10 && props.text === context.questions[props.qNum].answer && bg !== "bg-gradient-success")) {
        setBg("bg-gradient-success")
    }
    else if (context.currentQuestion < 10 && context.questions[context.currentQuestion].selected === props.text && bg !== selectedBg){
        setBg(selectedBg)
        // console.log("after: " + context.selected)
    }
    else if (context.currentQuestion < 10 && context.questions[context.currentQuestion].selected !== props.text && bg !== "bg-white"){
        setBg("bg-white")
    }
    

    return (
        <bs.Card className={"my-4 p-4 shadow rounded " + bg} style={context.currentQuestion < 10 ? { width: '80%', cursor: "pointer", marginRight: "auto", marginLeft: "auto"} : { width: '80%', marginRight: "auto", marginLeft: "auto"}} onClick={context.currentQuestion < 10 ? () => context.chooseSelected(props.text) : () => {}}>{props.text}</bs.Card>           
    )
}
export default Answer