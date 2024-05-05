import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]


  const [selected, setSelected] = useState(0)
  
  const initialVotes = Array(anecdotes.length).fill(0)
  const [votes, setVote] = useState(initialVotes)

  const nextAnecdote = () => {
    let random
    // Prevent displaying again the same anecdote when random number is same as selected
    do {
      random = getRandom()
    } while (random === selected) 

    setSelected(random)
  }

  const getRandom = () =>{
    const maxValue = anecdotes.length
    const random = Math.floor(Math.random() * maxValue)
    return random
  }

  const vote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVote(newVotes)
  }

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={vote}>vote</button>
      <button onClick={nextAnecdote}>next anecdote</button>
    </div>
  )
}

export default App