import React from "react"
import { Label, Input, FormGroup } from "reactstrap"

const SelectClient = () => {
  return (
    <FormGroup className="mt-3">
      <Label for="select-client">Select client : </Label>
      <Input
        id="select-client"
        type="number"
        min="1"
        max="6"
        placeholder="Indiquez le nombre de personnes"
        onChange={() => {}}
      />
    </FormGroup>
  )
}

export default SelectClient
