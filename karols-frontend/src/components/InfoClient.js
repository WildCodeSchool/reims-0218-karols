import React from "react"
import { Button, Form, FormGroup, Label, Input } from "reactstrap"
import ListChoiceGender from "./ListChoiceGender"
// Ajouter un state pour faire fonctionner le formulaire
export default class InfoClient extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="firstname">Prénom :</Label>
          <Input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="saisir votre prénom"
          />
        </FormGroup>
        <ListChoiceGender />
      </Form>
    )
  }
}
