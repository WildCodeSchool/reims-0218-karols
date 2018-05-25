import React from "react"
import ReactDOM from "react-dom"
import ListCalendarDayTime from "./ListCalendarDayTime"
import renderer from "react-test-renderer"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<ListCalendarDayTime />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders correctly", () => {
  const tree = renderer.create(<ListCalendarDayTime />).toJSON()
  expect(tree).toMatchSnapshot()
})
