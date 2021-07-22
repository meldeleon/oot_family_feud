import React from "react"
import Round from "./Round.jsx"
import Team from "./Team.jsx"
import { game_data, question_bank } from "./data.js"
import "bulma/css/bulma.min.css"
import { Button } from "react-bulma-components"


class Game extends React.Component {
  constructor(props) {
    super(props)
    this.setState({game_data, question_bank}) // how to set the state for game_data and your question_bank
    this.teamPointChange = this.teamPointChange.bind(this)
    this.teamName = this.teamName.bind(this)
    this.overridePoints = this.overridePoints.bind(this)
    this.changeRounds = this.changeRounds.bind(this)
  }
  //hook up the buttons to retrieving and sending round data to the round component
  teamPointChange(points, team) {
    if (team === "right") {
      this.setState({
        right_team_score: this.state.right_team_score + points,
      })
    } else {
      this.setState({
        left_team_score: this.state.left_team_score + points,
      })
    }
  }
  teamName(team, name) {
    if (team === "right") {
      this.setState({
        right_team_name: name,
      })
    } else {
      this.setState({
        left_team_name: name,
      })
    }
  }
  overridePoints(team, points) {
    if (team === "right") {
      this.setState({
        game_data: {...this.state.game_data, right_team_score: points}, question_bank // this will set the state for game data to set the points
      })
    } else {
      this.setState({
        game_data: {...this.state.game_data, left_team_score: points}, question_bank // this will set the state for game data to set the points
      })
    }
  }
  changeRounds(round_number) {
    this.setState({
      current_round_number: round_number, //You would do a similar thing to 44 and 48 in this line
    })
    Round.forceUpdate()
  }

  render() {
    return (
      <div id="game_container">
        <Team
          right_team_name={this.state.right_team_name}
          left_team_name={this.state.left_team_name}
          right_team_score={this.state.right_team_score}
          left_team_score={this.state.left_team_score}
          action={this.teamName}
          override={this.overridePoints}
        />
        <Round
          right_team_name={this.state.right_team_name}
          left_team_name={this.state.left_team_name}
          action={this.teamPointChange}
          round_number={this.state.current_round_number}
          round_data={this.state.rounds[this.state.current_round_number - 1]}
        ></Round>

        <button
          onClick={() => {
            this.changeRounds(this.state.current_round_number - 1)
          }}
          class="button"
        >
          Previous Round
        </button>
        <button
          class="button"
          onClick={() => {
            this.changeRounds(this.state.current_round_number + 1)
          }}
        >
          Next Round
        </button>
      </div>
    )
  }
}

export default Game
