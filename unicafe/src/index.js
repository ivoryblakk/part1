import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Feedback = () =>{

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
  
  const FeedbackBtn = ({name, feedback, setFeedback}) => {
    return <button  onClick={()=>{ setFeedback(feedback +1 )}}> {name}</button>;
  }

  const Statistic = (props) =>{
      const {text, value} = props;
      return <tr> <td> {text} </td> <td> {value} {text == 'positive'? "%": "" } </td> </tr> ;
  }

  const Statistics =(props) => {
      const all = good+neutral+bad; 
      const averages = ((1*good) +(-1*bad) )/all;
    return (
        <>
        <h1>Statistics </h1>
        <table>
        <Statistic text="good" value={good} />
        <Statistic text="neutral" value={neutral} />
        <Statistic text="bad" value={bad} />
        <Statistic text="all" value={all} />
        <Statistic text="average" value={averages.toFixed(1)} />
        <Statistic text="positive" value={(good/all * 100).toFixed(1)} />
        </table>
        </>
    )

  }

  return (
    <div>
      <Feedback />
      <br/>
      {good == 0 && neutral == 0 && bad == 0 ? " No feedback given" : <Statistics/>}
    </div>
  )
};

ReactDOM.render(<App />, 
  document.getElementById('root')
)