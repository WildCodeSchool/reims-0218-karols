import React from "react"
import { FormGroup, Input, Label } from "reactstrap"

const ListChoiceGender = () => {
  return (
    <div className="mt-4 mb-4">
      <FormGroup check inline>
        <Label check>
          <Input type="radio" name="gender" /> Femme
        </Label>
      </FormGroup>
      <FormGroup check inline>
        <Label>
          <Input type="radio" name="gender" /> Homme
        </Label>
      </FormGroup>
    </div>
  )
}

export default ListChoiceGender
