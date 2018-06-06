import React from "react"
import ReactDOM from "react-dom"
import ChoiceShop from "./ChoiceShop"
import renderer from "react-test-renderer"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<ChoiceShop />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders correctly", () => {
  const tree = renderer.create(<ChoiceShop />).toJSON()
  expect(tree).toMatchSnapshot()
})
