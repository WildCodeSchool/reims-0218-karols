import React from "react"
import ReactDOM from "react-dom"
import ListChoiceShop from "./ListChoiceShop"
import renderer from "react-test-renderer"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<ListChoiceShop />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders correctly", () => {
  const tree = renderer.create(<ListChoiceShop />).toJSON()
  expect(tree).toMatchSnapshot()
})
