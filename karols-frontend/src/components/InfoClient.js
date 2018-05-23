import React from "react"
import { Button, Form, FormGroup, Label, Input } from "reactstrap"

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
        <FormGroup>
          <Label for="examplePassword">Gender</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="Woman"
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    )
  }
}
