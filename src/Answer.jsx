import React from "react"

function Answer({ number, name, points, action }) {
  const [showResults, setShowResults] = React.useState(false)
  const [disabledState, setDisabled] = React.useState(false)
  const onClick = () => {
    setShowResults(true)
    action(points)
    setDisabled(true)
  }

  return (
    <div class="column is-half is-offset-one-quarter">
      <div class="box">
        <input
          type="button"
          value={number}
          onClick={onClick}
          disabled={disabledState ? true : false}
          class="button"
        />
        <span class="title is-5">
          {showResults ? <Results name={name} points={points} /> : null}
        </span>
      </div>
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
