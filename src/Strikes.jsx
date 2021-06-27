import React from "react"

class Strikes extends React.Component {
  render(props) {
    const strikesArray = ["", "X", "X X", "X X X"]
    return <span>{strikesArray[this.props.count]}</span>
  }
}

export default Strikes
