import React from "react"
import Answers from "./Answers.jsx"

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      question: "Besides cuccos, what enemy would make the tastiest dish?",
      score: 0,
      answers: {
        1: { name: "Big Octo/Octorok", value: 40 },
        2: { name: "Dodongo", value: 21 },
        3: { name: "Lizalfos", value: 10 },
        4: { name: "Ganondorf", value: 8 },
        5: { name: "Guay", value: 8 },
      },
    }
  }
  render() {
    return (
      <div id="board_container">
        <div id="title">Zelda Feud</div>
        <div id="score">{this.state.score}</div>
        <div id="question"></div>
        <Answers></Answers>
      </div>
    )
  }
}

export default Board
