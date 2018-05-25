import React from "react"
import ReactDOM from "react-dom"
import ListChoiceGender from "./ListChoiceGender"
import renderer from "react-test-renderer"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<ListChoiceGender />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders correctly", () => {
  const tree = renderer.create(<ListChoiceGender />).toJSON()
  expect(tree).toMatchSnapshot()
})
