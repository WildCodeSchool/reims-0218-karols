import React from "react"
import { Button } from "reactstrap"

const Counter = ({
  count,
  handleMinus,
  handlePlus,
  id,
  prestationId,
  preparationId
}) => {
  return (
    <div>
      <Button
        onClick={() => handleMinus(id, preparationId)}
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
      <p style={{ display: "inline-block", color: "#FFF", fontWeight: "bold" }}>
        {count}
      </p>
      <Button
        onClick={() => handlePlus(id, preparationId)}
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
