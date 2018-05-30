import React from "react"
import { Button, Form, FormGroup, Label, Input } from "reactstrap"
import ListChoiceGender from "./components/ListChoiceGender"

export default class InfoClient extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Name</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Sandrine"
          />
        </FormGroup>
        <ListChoiceGender />
      </Form>
    )
  }
}
