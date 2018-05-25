import React from "react"
import { FormGroup, Input, Label } from "reactstrap"

const ListChoiceGender = () => {
  return (
    <div>
      <FormGroup check>
        <Label check>
          <Input type="radio" name="gender" /> Femme
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="radio" name="gender" /> Homme
        </Label>
      </FormGroup>
    </div>
  )
}

export default ListChoiceGender
