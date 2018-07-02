import React from "react"
import { Button } from "reactstrap"

const Counter = ({ count, handleMinus, handlePlus, id }) => {
  return (
    <div>
      <Button
        onClick={() => handleMinus(id)}
        size="sm"
        style={{ display: "inline-block" }}
        className="mr-3"
      >
        -
      </Button>
      <p style={{ display: "inline-block" }}>{count}</p>
      <Button
        onClick={() => handlePlus(id)}
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
