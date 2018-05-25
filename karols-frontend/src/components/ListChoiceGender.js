import React from "react"
import { FormGroup, Input, Label, Form } from "reactstrap"

const ListChoiceGender = () => {
  return (
    <Form>
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
    </Form>
  )
}

export default ListChoiceGender
