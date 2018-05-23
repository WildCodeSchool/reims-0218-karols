import React from "react"
import { Label } from "reactstrap"

const SelectClient = () => {
  return (
    <Label for="SelectClient">
      Select person :
      <input type="number" step="1" value="0" min="0" max="14" />
    </Label>
  )
}

export default SelectClient
