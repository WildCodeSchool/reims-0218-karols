import React from "react"
import { Label, Input, FormGroup } from "reactstrap"

const SelectClient = () => {
  return (
    <FormGroup className="mt-3">
      <Label for="select-client">Select client : </Label>
      <Input
        type="number"
        id="select-client"
        max="6"
        min="0"
        placeholder="Indiquez le nombre de personnes"
        onChange={() => {}}
      />
    </FormGroup>
  )
}

export default SelectClient
