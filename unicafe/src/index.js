import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Feedback = () =>{
    // TODO header Give  Feedback 


    return (
        <>
        <h1>  Give Feedback </h1>
        <br/>
        <FeedbackBtn name="good" setFeedback= {setGood} feedback = {good} />
        <FeedbackBtn name="neutral" setFeedback= {setNeutral} feedback = {neutral}  />
        <FeedbackBtn name="bad" setFeedback= {setBad} feedback = {bad}/>
        </>
    )
  };
  //Reusable button 
  const FeedbackBtn = ({name, feedback, setFeedback}) => {
    return <button  onClick={()=>{ setFeedback(feedback +1 )}}> {name}</button>;
  }

  const Statistics =() => {

    return (
        <>
        <span> <p> good {good}</p></span>
        <span> <p> neutral {neutral}</p></span>
        <span> <p> bad {bad}</p></span>
        </>
    )

  }
  //Add function

  //Average

  //

 

  return (
    <div>
      <Feedback />
      <br/>
      <Statistics/>
    </div>
  )
};

ReactDOM.render(<App />, 
  document.getElementById('root')
)