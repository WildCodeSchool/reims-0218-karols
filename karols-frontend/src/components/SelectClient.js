import React from "react"
import { Label, Input, FormGroup } from "reactstrap"

const SelectClient = () => {
  return (
    <FormGroup>
      <Label for="select-person">Select person : </Label>
      <Input
        type="number"
        id="select-person"
        step="1"
        value="0"
        min="0"
        max="14"
      />
    </FormGroup>
  )
}

export default SelectClient
