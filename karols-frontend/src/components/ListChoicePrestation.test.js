import React from "react"
import ReactDOM from "react-dom"
import ListChoicePrestation from "./ListChoicePrestation"
import renderer from "react-test-renderer"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<ListChoicePrestation />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders correctly", () => {
  const tree = renderer.create(<ListChoicePrestation />).toJSON()
  expect(tree).toMatchSnapshot()
})
