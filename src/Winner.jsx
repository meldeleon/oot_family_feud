import React from "react"
import Select from "react-dropdown-select"
import { Dropdown } from "react-bulma-components"
import { FaAngleDown } from "react-icons/fa"

class Winner extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
  }
  render(props) {
    return (
      <Dropdown
        closeOnSelect={true}
        color="blue"
        icon={<FaAngleDown></FaAngleDown>}
        label="Select Round Winner"
        onChange={(e) => this.props.action(e)}
      >
        <Dropdown.Item renderAs="A" value="left">
          {this.props.left_team_name}
        </Dropdown.Item>
        <Dropdown.Item renderAs="A" value="right">
          {this.props.right_team_name}
        </Dropdown.Item>
      </Dropdown>
    )
  }
}

export default Winner
