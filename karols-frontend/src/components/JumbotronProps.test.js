import React from "react"
import ReactDOM from "react-dom"
import JumbotronProps from "./JumbotronProps"
import renderer from "react-test-renderer"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<JumbotronProps />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders correctly", () => {
  const tree = renderer.create(<JumbotronProps />).toJSON()
  expect(tree).toMatchSnapshot()
})
