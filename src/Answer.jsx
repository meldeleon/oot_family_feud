import React from "react"

function Answer({ number, name, points, action }) {
  const [showResults, setShowResults] = React.useState(false)
  console.log(action)
  const onClick = () => {
    setShowResults(true)
    action(points)
  }

  return (
    <div>
      <input type="button" value={number} onClick={onClick} />
      {showResults ? <Results name={name} points={points} /> : null}
    </div>
  )
}

function Results({ name, points }) {
  return (
    <span id="results" className="search-results">
      {name} {points}
    </span>
  )
}

export default Answer
