import React from "react"
import { Label, Input, FormGroup } from "reactstrap"

//la valeur affichée devrait venir des props
// onChange devrait appeler une fonction depuis les props

const SelectClient = ({ onCountChange, count }) => {
  return (
    <FormGroup className="mt-3">
      <Label for="select-client">Select client : </Label>
      <Input
        type="number"
        id="select-client"
        max="48"
        min="2"
        value={count}
        placeholder="Indiquez le nombre de personnes"
        onChange={onCountChange}
      />
    </FormGroup>
  )
}

export default SelectClient
