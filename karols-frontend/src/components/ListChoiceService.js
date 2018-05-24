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
          image="https://images.unsplash.com/photo-1481501940778-c8bb63e376c5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=842a2f0d2f40bb7bb59bbdfd78289a0f&auto=format&fit=crop&w=1050&q=80"
        />
        <ChoiceService
          name="Table"
          description="Description Table"
          image="https://images.unsplash.com/uploads/1412198485051133af17f/5049dacb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dddba89812ed0325b966bf07aba683e3&auto=format&fit=crop&w=1050&q=80"
        />
        <ChoiceService
          name="Table + Préparation"
          description="Description Table & Préparation"
          image="https://images.unsplash.com/photo-1521001819313-f84e889dd60f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4138705d19bea36b2955d3e799285feb&auto=format&fit=crop&w=634&q=80"
        />
      </div>
    )
  }
}
