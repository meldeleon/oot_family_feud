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
        onChange={(values) => {
          console.log(values[0].value)
          this.props.action(values[0].value)
        }}
      />
    )
  }
}

export default Winner
