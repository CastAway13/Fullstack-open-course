import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const [selected, setSelected] = useState(0)
  const RandomAnecdotes = () => setSelected(getRandomInt(6))
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const handleVoteClick = () => { 
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy);
  }
  const mostVote = Math.max(...votes)
  const mostVoteIndex = votes.indexOf(mostVote)
  
  return (
    <div>
      <h1>Anecdotes of the days</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <br></br>
      <Button
        onClick={handleVoteClick}
        text='vote'
      />
      <Button
        onClick={RandomAnecdotes}
        text='next anecdote'
      />
      <h1>Anecdotes with most votes</h1>
      <p>{anecdotes[mostVoteIndex]}</p>
      <p>has {mostVote} votes</p>

    </div>
  )
}

export default App