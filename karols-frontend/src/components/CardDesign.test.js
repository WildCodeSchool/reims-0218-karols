import React from "react"
import ReactDOM from "react-dom"
import CardDesign from "./CardDesign"
import renderer from "react-test-renderer"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<CardDesign />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders correctly", () => {
  const tree = renderer.create(<CardDesign />).toJSON()
  expect(tree).toMatchSnapshot()
})
