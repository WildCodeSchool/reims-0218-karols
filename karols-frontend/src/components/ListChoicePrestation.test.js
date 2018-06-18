import React from "react"
import ReactDOM from "react-dom"
import ListChoicePrestation from "./ListChoicePrestation"
import renderer from "react-test-renderer"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<ListChoicePrestation prestations={[]}/>, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders correctly", () => {
  const tree = renderer.create(<ListChoicePrestation prestations={[]}/>).toJSON()
  expect(tree).toMatchSnapshot()
})
