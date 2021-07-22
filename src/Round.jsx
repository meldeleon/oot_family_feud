import React from "react"
import Answers from "./Answers.jsx"
import Strikes from "./Strikes.jsx"
import Winner from "./Winner.jsx"
import { rounds } from "./data.js"

let current_round = 0
class Round extends React.Component {
  constructor(props) {
    super(props)
    this.pointsHandler = this.pointsHandler.bind(this)
    this.setWinner = this.setWinner.bind(this)
    this.state = rounds[current_round]
    this.checkForRoundBounds = this.checkForRoundBounds.bind(this)
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
  checkForRoundBounds(round) {
    if (round < 0) {
      alert("There are no previous rounds.")
      return false
    } else if (round >= rounds.length) {
      alert("You have reached the end of the rounds")
      return false
    } else {
      return true
    }
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
        <div id="change_rounds_container">
          <button
            onClick={() => {
              if (this.checkForRoundBounds(current_round - 1)) {
                current_round = this.state.number - 1
                this.setState(rounds[current_round])
                this.props.round_handler(current_round + 1)
                console.log("current round is now: " + current_round)
              }
              console.log(current_round)
            }}
            class="button"
          >
            Previous Round
          </button>
          <button
            onClick={() => {
              if (this.checkForRoundBounds(current_round + 1)) {
                current_round = this.state.number + 1
                this.setState(rounds[current_round])
                this.props.round_handler(current_round + 1)
                console.log("current round is now: " + current_round)
              }
              console.log(current_round)
            }}
            class="button"
          >
            Next Round
          </button>
        </div>
      </div>
    )
  }
}

export default Round
