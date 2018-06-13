import React from "react"
import ReactDOM from "react-dom"
import ListPrestation from "./ListPrestation"
import renderer from "react-test-renderer"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<ListPrestation prestations={[]} />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders correctly", () => {
  const tree = renderer.create(<ListPrestation prestations={[]} />).toJSON()
  expect(tree).toMatchSnapshot()
})
