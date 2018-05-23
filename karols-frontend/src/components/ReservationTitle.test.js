import React from "react"
import ReactDOM from "react-dom"
import ReservationTitle from "./ReservationTitle"
import renderer from "react-test-renderer"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<ReservationTitle />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders correctly", () => {
  const tree = renderer.create(<ReservationTitle />).toJSON()
  expect(tree).toMatchSnapshot()
})
