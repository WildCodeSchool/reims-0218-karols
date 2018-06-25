import React from "react"
import ReactDOM from "react-dom"
import ValidationReservationButton from "./ValidationReservationButton"
import renderer from "react-test-renderer"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<ValidationReservationButton />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders correctly", () => {
  const tree = renderer.create(<ValidationReservationButton />).toJSON()
  expect(tree).toMatchSnapshot()
})
