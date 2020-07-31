import React from 'react'
import * as bs from 'react-bootstrap'
// import { useRouteMatch} from 'react-router-dom'
import AppContext from './context'

function Categories(props) {
    const context = React.useContext(AppContext)
    
    return (
        <bs.Card className="my-4 shadow mb-5 bg-white rounded">
            <bs.Card.Body style={{textAlign: "center"}}>
                <bs.Card.Title>Test your knowledge of the Book of Mormon!</bs.Card.Title>
                <bs.Card.Text className={"px-5"}>This test will give you 10 random questions that test your knowledge of the Book of Mormon. Make sure you look at the results page to know what you missed and to study the additional materials!</bs.Card.Text>
                <bs.Button onClick={() => context.start()}>Start</bs.Button>
            </bs.Card.Body>
        </bs.Card>
    )
}
export default Categories


  
