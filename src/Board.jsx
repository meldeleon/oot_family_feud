import React from "react"
import Answers from "./Answers.jsx"

let round_data = {
  question: "Besides cuccos, what enemy would make the tastiest dish?",
  score: 0,
  answers: [
    { number: 1, name: "Big Octo/Octorok", points: 40, addable: false },
    { number: 2, name: "Dodongo", points: 21, addable: false },
    { number: 3, name: "Lizalfos", points: 10, addable: false },
    { number: 4, name: "Ganondorf", points: 8, addable: false },
    { number: 5, name: "Guay", points: 8, addable: false },
  ],
}

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = round_data
    this.handler = this.handler.bind(this)
  }
  handler(points) {
    this.setState({
      score: this.state.score + points,
    })
    console.log(this)
  }
  render() {
    return (
      <div id="board_container">
        <div id="title">Zelda Feud</div>
        <div id="score">{this.state.score}</div>
        <div id="question">{this.state.question}</div>
        <Answers
          answer_list={this.state.answers}
          action={this.handler}
        ></Answers>
      </div>
    )
  }
}

export default Board
