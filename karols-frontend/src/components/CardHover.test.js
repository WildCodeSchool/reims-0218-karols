import React from "react"
import ReactDOM from "react-dom"
import CardHover from "./CardHover"
import renderer from "react-test-renderer"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<CardHover />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders correctly", () => {
  const tree = renderer.create(<CardHover />).toJSON()
  expect(tree).toMatchSnapshot()
})
