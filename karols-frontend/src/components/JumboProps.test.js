import React from "react"
import ReactDOM from "react-dom"
import JumboProps from "./JumboProps"
import renderer from "react-test-renderer"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<JumboProps />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders correctly", () => {
  const tree = renderer.create(<JumboProps />).toJSON()
  expect(tree).toMatchSnapshot()
})
