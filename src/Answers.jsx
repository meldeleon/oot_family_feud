import React from "react"
import Answer from "./Answer.jsx"

function Answers({ answer_list }) {
  return answer_list.map((answer) => {
    console.log(answer)
    return (
      <Answer
        number={answer.number}
        name={answer.name}
        value={answer.value}
      ></Answer>
    )
  })
}

export default Answers
