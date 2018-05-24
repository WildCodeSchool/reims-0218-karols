import React from "react"
import { Form, FormGroup, Label, Input } from "reactstrap"

export default class SelectPerson extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleSelect">Select person :</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>3 Person</option>
            <option>4 Person</option>
            <option>5 Person</option>
            <option>6 Person</option>
            <option>7 Person</option>
            <option>8 Person</option>
            <option>9 Person</option>
            <option>10 Person</option>
          </Input>
        </FormGroup>
      </Form>
    )
  }
}
