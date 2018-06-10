import React from "react"
import ReactDOM from "react-dom"
import CardModel from "./CardModel"
import renderer from "react-test-renderer"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<CardModel />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders correctly", () => {
  const tree = renderer.create(<CardModel />).toJSON()
  expect(tree).toMatchSnapshot()
})
