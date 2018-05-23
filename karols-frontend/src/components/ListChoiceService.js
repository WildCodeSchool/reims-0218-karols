import React from "react"
// Component
import ChoiceService from "./ChoiceService"

export default class Service extends React.Component {
  render() {
    return (
      <div>
        <ChoiceService />
        <ChoiceService />
        <ChoiceService />
      </div>
    )
  }
}
