import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState( Array.apply(null, new Array(props.anecdotes.length)).map(Number.prototype.valueOf,0))
  const [mostVoted, setMostVoted] = useState(0)
  const copy = [...points]
  let topVotePosition = 0
  
  const random = () => {
    const randomNumber = Math.floor((Math.random() * anecdotes.length));
    setSelected( randomNumber);
  }

  const upVote = () =>{
      copy[selected] += 1;
      console.log("this the copy array in upVote",copy)
      setPoints(copy);
      topVoted();
  }
  const topVoted = () => {
    for(let position = 0 ; position < copy.length; position++) {
        if ( copy[position] > copy[topVotePosition] ) {
            topVotePosition = position;
            console.log("position = ", position)
            console.log('topVotePosition = ', topVotePosition)
            console.log("points = ", points)
        }
     }
     setMostVoted(topVotePosition);
  }
  
  return (
    <div>
      <h1>Anecdote of the Day</h1> 
      {props.anecdotes[selected]}
      <div>has {points[selected]} votes </div>
      <br/>
      <button onClick ={random}>next anecdote</button>
      <button onClick ={() => upVote()}> upVote </button>
      <h1>Anecdote with the Most Votes</h1>
      {props.anecdotes[mostVoted]}
      <div>has {copy[mostVoted]} votes </div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)