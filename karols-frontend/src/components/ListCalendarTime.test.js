import React from "react"
import ReactDOM from "react-dom"
import ListCalendarTime from "./ListCalendarTime"
import renderer from "react-test-renderer"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<ListCalendarTime />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders correctly", () => {
  const tree = renderer.create(<ListCalendarTime />).toJSON()
  expect(tree).toMatchSnapshot()
})
