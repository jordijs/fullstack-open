import { useState } from 'react'

const Title = ({ text }) => <h1>{text}</h1>

const Display = ({ value, text }) => <div>{text} {value}</div>

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  const average = () => {
    if (all === 0) return 0
    return (good - bad) / all
  }
  const percentagePositive = () => {
    if (all === 0) return 0
    return (good / all) * 100 + ' %'
  }

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  return (
    <div>
      <Title text="give feedback" />
      <div>
        <Button onClick={increaseGood} text={'good'} />
        <Button onClick={increaseNeutral} text={'neutral'} />
        <Button onClick={increaseBad} text={'bad'} />
      </div>
      <Title text="statistics" />
      <Display value={good} text='good' />
      <Display value={neutral} text='neutral' />
      <Display value={bad} text='bad' />
      <Display value={all} text='all' />
      <Display value={average()} text='average' />
      <Display value={percentagePositive()} text='positive' />
    </div>
  )
}

export default App