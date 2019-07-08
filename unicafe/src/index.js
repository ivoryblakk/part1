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
        <FeedbackBtn name="good" value={1} setFeedback= {setGood} feedback = {good} />
        <FeedbackBtn name="neutral" value={0} setFeedback= {setNeutral} feedback = {neutral}  />
        <FeedbackBtn name="bad" value={-1} setFeedback= {setBad} feedback = {bad}/>
        </>
    )
  };
  //Reusable button 
  
  const FeedbackBtn = ({name, value,  feedback, setFeedback}) => {
    return <button  onClick={()=>{ setFeedback(feedback +1 )}}> {name}</button>;
  }

  const Statistics =() => {
      const all = good+neutral+bad; 
      const averages = ((1*good) +(-1*bad) )/all;
    return (
        <>
        <span> <p> good {good}</p></span>
        <span> <p> neutral {neutral}</p></span>
        <span> <p> bad {bad}</p></span>
        <span> <p> all {all}</p></span>
        <span> <p> average {averages}</p></span>
        <span> <p> positive {good/all * 100} %</p></span>
        </>
    )

  }


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