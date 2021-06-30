import React from "react"
import Select from "react-dropdown-select"

class Winner extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
  }
  render(props) {
    return (
      <Select
        options={this.props.teams}
        onChange={(values) => this.props.action(values)}
      />
    )
  }
}

export default Winner
