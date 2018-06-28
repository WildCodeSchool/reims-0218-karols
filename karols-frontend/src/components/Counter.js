import React from "react"
import { Button } from "reactstrap"

const HandleMinus = () => {
  console.log("Moins")
}

const HandlePLus = () => {
  console.log("Plus")
}

const Counter = () => {
  return (
    <div>
      <Button
        onClick={HandleMinus}
        size="sm"
        style={{ display: "inline-block" }}
        className="mr-3"
      >
        -
      </Button>
      <p style={{ display: "inline-block" }}>0</p>
      <Button
        onClick={HandlePLus}
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
