import React from "react"
import Round from "./Round.jsx"
import Team from "./Team.jsx"
import { game_data } from "./data.js"
import "bulma/css/bulma.min.css"
import { Button } from "react-bulma-components"

let current_game_data = game_data

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = current_game_data
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
        right_team_score: points,
      })
    } else {
      this.setState({
        left_team_score: points,
      })
    }
  }
  changeRounds(round_number) {
    this.setState({
      current_round_number: round_number,
    })
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
          round_handler={this.changeRounds}
        ></Round>
      </div>
    )
  }
}

export default Game
