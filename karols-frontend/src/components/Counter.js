import React from "react"
import { Button } from "reactstrap"

const Counter = ({ count, handleMinus, handlePlus }) => {
  return (
    <div>
      <Button
        onClick={handleMinus}
        size="large"
        style={{
          display: "inline-block",
          backgroundColor: "#FFF",
          color: "#000",
          fontWeight: "bold"
        }}
        className="mr-3"
      >
        -
      </Button>
      <p style={{ display: "inline-block" }}>{count}</p>
      <Button
        onClick={handlePlus}
        size="large"
        style={{
          display: "inline-block",
          backgroundColor: "#FFF",
          color: "#000",
          fontWeight: "bold"
        }}
        className="ml-3"
      >
        +
      </Button>
    </div>
  )
}

export default Counter
