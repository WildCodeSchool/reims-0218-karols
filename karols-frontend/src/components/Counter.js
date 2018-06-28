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
      <Button onClick={HandleMinus} size="sm">
        -
      </Button>
      <p>0</p>
      <Button onClick={HandlePLus} size="sm">
        +
      </Button>
    </div>
  )
}

export default Counter
