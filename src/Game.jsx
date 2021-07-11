import React from "react"
import Round from "./Round.jsx"
import Team from "./Team.jsx"
import "bulma/css/bulma.min.css"

let game_data = {
  right_team_name: "Right Team",
  right_team_score: 0,
  left_team_name: "Left Team",
  left_team_score: 0,
  rounds: [],
}

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = game_data
    this.teamPointChange = this.teamPointChange.bind(this)
    this.teamName = this.teamName.bind(this)
    this.overridePoints = this.overridePoints.bind(this)
  }
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
        ></Round>
      </div>
    )
  }
}

export default Game
