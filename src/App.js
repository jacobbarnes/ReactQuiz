import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';
import * as bs from 'react-bootstrap'
import Header from './header'
// import Left from './Left'
import About from './About'
import Footer from './Footer'
import Quiz from './Quiz'
import Start from './Start'
import AppContext from './context'
import Results from './Results'

function App(props) {
  const context = React.useContext(AppContext)

  // console.log("context.questions:")
  // console.log(context.questions)

  return (
    <Router>
      <bs.Container fluid className='p-0 min-vh-100 d-flex flex-column'>
        <bs.Row noGutters>
          <bs.Col>
            <Header />
          </bs.Col>
        </bs.Row>
        <bs.Row noGutters className='flex-grow-1'>
          {/* <bs.Col md='2' style={{ backgroundColor: 'lightgray'}}>
            <Left />
          </bs.Col> */}
          <bs.Col md="3"></bs.Col>
          <bs.Col md='6' style={{ backgroundColor: ''}} className='px-2'>
            <Switch>
              <Route path='/about'>
                <About />
              </Route>
              <Route path='/'>
                {(context.currentQuestion == null) && <Start />}
                {(context.currentQuestion != null && context.currentQuestion < 10) &&
                  <Quiz 
                    question={context.questions[context.currentQuestion].question}
                    choices={context.questions[context.currentQuestion].choices}
                    reference={context.questions[context.currentQuestion].reference}
                    answer={context.questions[context.currentQuestion].answer}
                  />}
                {(context.currentQuestion === 10) && <Results />}
              </Route>
            </Switch>
          </bs.Col>
          <bs.Col md="3"></bs.Col>
        </bs.Row>
        <bs.Row noGutters className="flex-grow-0 flex-shrink-0">
          <bs.Col className='px-3 py-2' style={{ backgroundColor: '#CC99CC'}}>
            <Footer />
          </bs.Col>
        </bs.Row>
      </bs.Container>
    </Router>
  );
}

export default App;
