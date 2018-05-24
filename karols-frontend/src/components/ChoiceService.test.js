import React from "react"
import ReactDOM from "react-dom"
import ChoiceService from "./ChoiceService"
import renderer from "react-test-renderer"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<ChoiceService />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders correctly", () => {
  const tree = renderer.create(<ChoiceService />).toJSON()
  expect(tree).toMatchSnapshot()
})
