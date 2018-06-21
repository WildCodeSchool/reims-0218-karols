import React from "react"
import ReactDOM from "react-dom"
import CalendarTime from "./CalendarTime"
import renderer from "react-test-renderer"

it("renders without crashing", () => {
  const div = document.createElement("div")
  const timeSlot = {
    available: true,
    time: {
      s: "2018-07-25T09:00:00.000+02:00",
      e: "2018-07-25T09:15:00.000+02:00",
      invalid: null
    }
  }
  ReactDOM.render(<CalendarTime timeSlot={timeSlot} />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders correctly", () => {
  const timeSlot = {
    available: true,
    time: {
      s: "2018-07-25T09:00:00.000+02:00",
      e: "2018-07-25T09:15:00.000+02:00",
      invalid: null
    }
  }
  const tree = renderer.create(<CalendarTime timeSlot={timeSlot} />).toJSON()
  expect(tree).toMatchSnapshot()
})
