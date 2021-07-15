import React from "react"
import Answers from "./Answers.jsx"
import Strikes from "./Strikes.jsx"
import Winner from "./Winner.jsx"

// let round_data = {
//   question: "Besides cuccos, what enemy would make the tastiest dish?",
//   score: 0,
//   strikes: 0,
//   answers: [
//     { number: 1, name: "Big Octo/Octorok", points: 40, addable: false },
//     { number: 2, name: "Dodongo", points: 21, addable: false },
//     { number: 3, name: "Lizalfos", points: 10, addable: false },
//     { number: 4, name: "Ganondorf", points: 8, addable: false },
//     { number: 5, name: "Guay", points: 8, addable: false },
//   ],
//   winning_team: "",
// }

class Round extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.round_data
    this.pointsHandler = this.pointsHandler.bind(this)
    this.setWinner = this.setWinner.bind(this)
  }
  pointsHandler(points) {
    this.setState({
      score: this.state.score + points,
    })
  }
  setWinner(winner) {
    console.log("the winner is: " + winner)
    this.setState({
      winning_team: winner,
    })
    this.props.action(this.state.score, winner)
  }

  render() {
    const strikeOut = () => {
      if (this.state.strikes <= 2) {
        this.setState({
          strikes: this.state.strikes + 1,
        })
        console.log(this.state.strikes)
      } else {
      }
    }
    return (
      <div id="board_container">
        <div id="title" class="title is-3">
          Zelda Feud
        </div>
        <div id="score">
          Round {this.props.round_number} Total: {this.state.score}
        </div>
        <div id="question" class="title is-4">
          {this.state.question}
        </div>
        <Answers
          answer_list={this.state.answers}
          action={this.pointsHandler}
        ></Answers>
        <div id="strikes_container">
          <div id="current_strikes">
            <Strikes count={this.state.strikes}></Strikes>
          </div>
          <div id="strike_button_container">
            <input
              type="button"
              onClick={strikeOut}
              value="Buzz"
              class="button"
            ></input>
          </div>
        </div>
        <div id="win_container">
          <Winner
            left_team_name={this.props.left_team_name}
            right_team_name={this.props.right_team_name}
            action={this.setWinner}
          ></Winner>
        </div>
      </div>
    )
  }
}

export default Round
