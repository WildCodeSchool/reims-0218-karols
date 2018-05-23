import React from "react"
import { Label } from "reactstrap"

export default class SelectPerson extends React.Component {
  render() {
    return (
      <Label for="selectClient">
        Select person :
        <input type="number" step="1" value="0" min="0" max="14" />
      </Label>
    )
  }
}
