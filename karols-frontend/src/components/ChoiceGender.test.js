import React from "react"
import ReactDOM from "react-dom"
import ChoiceGender from "./ChoiceGender"
import renderer from "react-test-renderer"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<ChoiceGender />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders correctly", () => {
  const tree = renderer.create(<ChoiceGender />).toJSON()
  expect(tree).toMatchSnapshot()
})
