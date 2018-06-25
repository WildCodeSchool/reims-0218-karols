import React from "react"
import ReactDOM from "react-dom"
import CardModelGender from "./CardModelGender"
import renderer from "react-test-renderer"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<CardModelGender />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders correctly", () => {
  const tree = renderer.create(<CardModelGender />).toJSON()
  expect(tree).toMatchSnapshot()
})
