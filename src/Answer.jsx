import React from "react"

function Answer({ number, name, points, action, addable }) {
  const [showResults, setShowResults] = React.useState(false)
  const [disabledState, setDisabled] = React.useState(false)
  const onClick = () => {
    setShowResults(true)
    action(points)
    setDisabled(true)
  }

  return (
    <div>
      <input
        type="button"
        value={number}
        onClick={onClick}
        disabled={disabledState ? true : false}
      />
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
