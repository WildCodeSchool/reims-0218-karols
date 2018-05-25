import React from "react"
import ReactDOM from "react-dom"
import ArrayCalendar from "./ArrayCalendar"
import renderer from "react-test-renderer"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<ArrayCalendar />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders correctly", () => {
  const tree = renderer.create(<ArrayCalendar />).toJSON()
  expect(tree).toMatchSnapshot()
})
