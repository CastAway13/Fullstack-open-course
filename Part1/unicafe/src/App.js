import { useState } from 'react'

const StatisticLine = ({ name, value, operator }) => 
<tr>
<td>{name}</td>
<td>{value}{operator}</td>
</tr>

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  let total = good + neutral + bad
  let average = (good -bad)/total
  let positive = (good/total)*100

  if(total === 0){
    return (
      <div>
        <h1>give feedback</h1>
        <br></br>
        <Button
          onClick={increaseGood}
          text='good'
        />
        <Button
          onClick={increaseNeutral}
          text='neutral'
        />
        <Button
          onClick={increaseBad}
          text='bad'
        />
        <br></br>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <h1>give feedback</h1>
      <br></br>
      <Button
        onClick={increaseGood}
        text='good'
      />
      <Button
        onClick={increaseNeutral}
        text='neutral'
      />
      <Button
        onClick={increaseBad}
        text='bad'
      />
      <br></br>
      <h1>statistics</h1>
      <table>
      <tbody> 
      <StatisticLine name="good " value={good} />
      <StatisticLine name="neutral " value={neutral} />
      <StatisticLine name="bad " value={bad} />
      <StatisticLine name="all  " value={total} />
      <StatisticLine name="average  " value={average} />
      <StatisticLine name="positive  " value={positive} operator="%"/> 
      </tbody>
      </table>
      
    </div>
  )
}

export default App