import React from "react"
import ReactDOM from "react-dom"
import JumboRecap from "./JumboRecap"
import renderer from "react-test-renderer"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<JumboRecap />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders correctly", () => {
  const tree = renderer.create(<JumboRecap />).toJSON()
  expect(tree).toMatchSnapshot()
})
