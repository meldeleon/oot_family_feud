import React from "react"
import Round from "./Round.jsx"

let game_data = {
  right_team_name: "Right Team",
  right_team_score: 0,
  left_team_name: "Left Team",
  left_team_score: 0,
  questions: [],
}

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = game_data
    this.teamPointChange = this.teamPointChange.bind(this)
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

  render() {
    return (
      <div id="game_container">
        <div id="team_points">
          <div id="leftTeam">
            {this.state.left_team_name} : {this.state.left_team_score}
          </div>
          <div id="rightTeam">
            {this.state.right_team_name} : {this.state.right_team_score}
          </div>
        </div>
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
