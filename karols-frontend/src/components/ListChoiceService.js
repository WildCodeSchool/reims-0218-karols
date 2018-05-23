import React from "react"
import { Button } from "reactstrap"

export default class Service extends React.Component {
  render() {
    return (
      <div>
        <Button outline color="primary">
          Préparation
        </Button>{" "}
        <Button outline color="secondary">
          Table
        </Button>{" "}
        <Button outline color="success">
          Table + Préparation
        </Button>{" "}
      </div>
    )
  }
}
