import React from "react"
import "bulma/css/bulma.min.css"
import { FaAngleDown } from "react-icons/fa"
import { Icon } from "react-bulma-components"
import { Dropdown } from "react-bulma-components"

class Team extends React.Component {
  constructor(props) {
    super(props)
  }
  render(props) {
    console.log(props)
    let right_label =
      this.props.right_team_name + " : " + this.props.right_team_score
    let left_label =
      this.props.left_team_name + " : " + this.props.left_team_score
    return (
      <div class="columns">
        <div class="column">
          <Dropdown
            closeOnSelect={true}
            color="blue"
            icon={<FaAngleDown></FaAngleDown>}
            label={left_label}
            onChange={(e) => {
              if (e === "rename") {
                let newName = prompt(
                  "What would you like to rename the Left Team?"
                )
                this.props.action("left", newName)
              } else if (e === "edit_points") {
                let newPoints = prompt("Enter new value of points.")
                this.props.override("left", newPoints)
              } else if (e === "clear_score") {
                this.props.override("left", 0)
              } else {
                //do nothing
              }
            }}
          >
            <Dropdown.Item value="rename">Rename Team</Dropdown.Item>
            <Dropdown.Item value="edit_points">Edit Points</Dropdown.Item>
            <Dropdown.Item value="clear_score">Clear Points</Dropdown.Item>
          </Dropdown>
        </div>
        <div class="column">
          <Dropdown
            closeOnSelect={true}
            color=""
            icon={<FaAngleDown></FaAngleDown>}
            label={right_label}
            onChange={(e) => {
              if (e === "rename") {
                //function that pops up input
                let newName = prompt(
                  "What would you like to rename the Left Team?"
                )
                //rename via actions
                this.props.action("right", newName)
              } else if (e === "edit_points") {
                let newPoints = prompt("Enter new value of points.")
                this.props.override("right", newPoints)
              } else if (e === "clear_score") {
                this.props.override("right", 0)
              } else {
                //do nothing
              }
            }}
          >
            <Dropdown.Item value="rename">Rename Team</Dropdown.Item>
            <Dropdown.Item value="edit_points">Edit Points</Dropdown.Item>
            <Dropdown.Item value="clear_score">Clear Points</Dropdown.Item>
          </Dropdown>
        </div>
      </div>
    )
  }
}
export default Team
