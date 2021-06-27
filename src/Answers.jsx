import React from "react"
import Answer from "./Answer.jsx"

function Answers({ answer_list, action }) {
  return answer_list.map((answer) => {
    console.log(answer)
    return (
      <Answer
        number={answer.number}
        name={answer.name}
        points={answer.points}
        action={action}
        addable={answer.addable}
      ></Answer>
    )
  })
}

export default Answers
