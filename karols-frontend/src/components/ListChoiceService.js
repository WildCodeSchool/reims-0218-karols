import React from "react"
// Component
import ChoiceService from "./ChoiceService"

export default class Service extends React.Component {
  render() {
    return (
      <div>
        <ChoiceService
          name="Préparation"
          description="Description Préparation"
        />
        <ChoiceService name="Table" description="Description Table" />
        <ChoiceService
          name="Table + Préparation"
          description="Description Table & Préparation"
        />
      </div>
    )
  }
}
