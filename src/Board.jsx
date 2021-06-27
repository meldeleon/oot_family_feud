import React from "react"
import Answers from "./Answers.jsx"

let card_data = {
  question: "Besides cuccos, what enemy would make the tastiest dish?",
  score: 0,
  answers: [
    { number: 1, name: "Big Octo/Octorok", value: 40 },
    { number: 2, name: "Dodongo", value: 21 },
    { number: 3, name: "Lizalfos", value: 10 },
    { number: 4, name: "Ganondorf", value: 8 },
    { number: 5, name: "Guay", value: 8 },
  ],
}

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = card_data
  }
  render() {
    return (
      <div id="board_container">
        <div id="title">Zelda Feud</div>
        <div id="score">{this.state.score}</div>
        <div id="question">{this.state.question}</div>
        <Answers answer_list={this.state.answers}></Answers>
      </div>
    )
  }
}

export default Board
