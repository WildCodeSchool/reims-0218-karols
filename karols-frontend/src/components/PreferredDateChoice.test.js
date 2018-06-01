import React from "react"
import ReactDOM from "react-dom"
import PreferredDateChoice from "./PreferredDateChoice"
import renderer from "react-test-renderer"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<PreferredDateChoice />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders correctly", () => {
  const tree = renderer.create(<PreferredDateChoice />).toJSON()
  expect(tree).toMatchSnapshot()
})
