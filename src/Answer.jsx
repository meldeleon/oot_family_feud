import React from "react"

function Answer({ number, name, value }) {
  const [showResults, setShowResults] = React.useState(false)
  const onClick = () => setShowResults(true)
  return (
    <div>
      <input type="button" value={number} onClick={onClick} />
      {showResults ? <Results show={name} /> : null}
    </div>
  )
}

function Results({ show }) {
  return (
    <div id="results" className="search-results">
      {show}
    </div>
  )
}

export default Answer
