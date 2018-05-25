import React from "react"
import ReactDOM from "react-dom"
import CalendarTime from "./CalendarTime"
import renderer from "react-test-renderer"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<CalendarTime />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders correctly", () => {
  const tree = renderer.create(<CalendarTime />).toJSON()
  expect(tree).toMatchSnapshot()
})
