import React from "react"
import ReactDOM from "react-dom"
import CardSelected from "./CardSelected"
import renderer from "react-test-renderer"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<CardSelected />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders correctly", () => {
  const tree = renderer.create(<CardSelected />).toJSON()
  expect(tree).toMatchSnapshot()
})
