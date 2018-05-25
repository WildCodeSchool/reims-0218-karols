import React from "react"
import ReactDOM from "react-dom"
import ResultCalendar from "./ResultCalendar"
import renderer from "react-test-renderer"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<ResultCalendar />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders correctly", () => {
  const tree = renderer.create(<ResultCalendar />).toJSON()
  expect(tree).toMatchSnapshot()
})
