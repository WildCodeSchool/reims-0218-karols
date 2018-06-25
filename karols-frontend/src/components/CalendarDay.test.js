import React from "react"
import ReactDOM from "react-dom"
import CalendarDay from "./CalendarDay"
import renderer from "react-test-renderer"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<CalendarDay />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders correctly", () => {
  const tree = renderer.create(<CalendarDay />).toJSON()
  expect(tree).toMatchSnapshot()
})
