import React from "react"
import { Button } from "reactstrap"

const Counter = ({ count, handleMinus, handlePlus, sex }) => {
  return (
    <div>
      <Button
        onClick={() => {
          handleMinus(sex)
        }}
        size="sm"
        style={{ display: "inline-block" }}
        className="mr-3"
      >
        -
      </Button>
      <p style={{ display: "inline-block" }}>{count}</p>
      <Button
        onClick={() => {
          handlePlus(sex)
        }}
        size="sm"
        style={{ display: "inline-block" }}
        className="ml-3"
      >
        +
      </Button>
    </div>
  )
}

export default Counter
