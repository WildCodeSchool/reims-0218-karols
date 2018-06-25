import React from "react"
import ReactDOM from "react-dom"
import ListCalendarTime from "./ListCalendarTime"
import renderer from "react-test-renderer"

it("renders without crashing", () => {
  const div = document.createElement("div")
  const timeSlots = [
    {
      available: true,
      time: {
        s: "2018-07-25T09:00:00.000+02:00",
        e: "2018-07-25T09:15:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T09:15:00.000+02:00",
        e: "2018-07-25T09:30:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T09:30:00.000+02:00",
        e: "2018-07-25T09:45:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T09:45:00.000+02:00",
        e: "2018-07-25T10:00:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T10:00:00.000+02:00",
        e: "2018-07-25T10:15:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T10:15:00.000+02:00",
        e: "2018-07-25T10:30:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T10:30:00.000+02:00",
        e: "2018-07-25T10:45:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T10:45:00.000+02:00",
        e: "2018-07-25T11:00:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T11:00:00.000+02:00",
        e: "2018-07-25T11:15:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T11:15:00.000+02:00",
        e: "2018-07-25T11:30:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T11:30:00.000+02:00",
        e: "2018-07-25T11:45:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T11:45:00.000+02:00",
        e: "2018-07-25T12:00:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T12:00:00.000+02:00",
        e: "2018-07-25T12:15:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T12:15:00.000+02:00",
        e: "2018-07-25T12:30:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T12:30:00.000+02:00",
        e: "2018-07-25T12:45:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T12:45:00.000+02:00",
        e: "2018-07-25T13:00:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T13:00:00.000+02:00",
        e: "2018-07-25T13:15:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T13:15:00.000+02:00",
        e: "2018-07-25T13:30:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T13:30:00.000+02:00",
        e: "2018-07-25T13:45:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T13:45:00.000+02:00",
        e: "2018-07-25T14:00:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T14:00:00.000+02:00",
        e: "2018-07-25T14:15:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T14:15:00.000+02:00",
        e: "2018-07-25T14:30:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T14:30:00.000+02:00",
        e: "2018-07-25T14:45:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T14:45:00.000+02:00",
        e: "2018-07-25T15:00:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T15:00:00.000+02:00",
        e: "2018-07-25T15:15:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T15:15:00.000+02:00",
        e: "2018-07-25T15:30:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T15:30:00.000+02:00",
        e: "2018-07-25T15:45:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T15:45:00.000+02:00",
        e: "2018-07-25T16:00:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T16:00:00.000+02:00",
        e: "2018-07-25T16:15:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T16:15:00.000+02:00",
        e: "2018-07-25T16:30:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T16:30:00.000+02:00",
        e: "2018-07-25T16:45:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T16:45:00.000+02:00",
        e: "2018-07-25T17:00:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T17:00:00.000+02:00",
        e: "2018-07-25T17:15:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T17:15:00.000+02:00",
        e: "2018-07-25T17:30:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T17:30:00.000+02:00",
        e: "2018-07-25T17:45:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T17:45:00.000+02:00",
        e: "2018-07-25T18:00:00.000+02:00",
        invalid: null
      }
    }
  ]
  ReactDOM.render(<ListCalendarTime timeSlots={timeSlots} />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders correctly", () => {
  const timeSlots = [
    {
      available: true,
      time: {
        s: "2018-07-25T09:00:00.000+02:00",
        e: "2018-07-25T09:15:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T09:15:00.000+02:00",
        e: "2018-07-25T09:30:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T09:30:00.000+02:00",
        e: "2018-07-25T09:45:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T09:45:00.000+02:00",
        e: "2018-07-25T10:00:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T10:00:00.000+02:00",
        e: "2018-07-25T10:15:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T10:15:00.000+02:00",
        e: "2018-07-25T10:30:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T10:30:00.000+02:00",
        e: "2018-07-25T10:45:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T10:45:00.000+02:00",
        e: "2018-07-25T11:00:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T11:00:00.000+02:00",
        e: "2018-07-25T11:15:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T11:15:00.000+02:00",
        e: "2018-07-25T11:30:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T11:30:00.000+02:00",
        e: "2018-07-25T11:45:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T11:45:00.000+02:00",
        e: "2018-07-25T12:00:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T12:00:00.000+02:00",
        e: "2018-07-25T12:15:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T12:15:00.000+02:00",
        e: "2018-07-25T12:30:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T12:30:00.000+02:00",
        e: "2018-07-25T12:45:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T12:45:00.000+02:00",
        e: "2018-07-25T13:00:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T13:00:00.000+02:00",
        e: "2018-07-25T13:15:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T13:15:00.000+02:00",
        e: "2018-07-25T13:30:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T13:30:00.000+02:00",
        e: "2018-07-25T13:45:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T13:45:00.000+02:00",
        e: "2018-07-25T14:00:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T14:00:00.000+02:00",
        e: "2018-07-25T14:15:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T14:15:00.000+02:00",
        e: "2018-07-25T14:30:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T14:30:00.000+02:00",
        e: "2018-07-25T14:45:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T14:45:00.000+02:00",
        e: "2018-07-25T15:00:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T15:00:00.000+02:00",
        e: "2018-07-25T15:15:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T15:15:00.000+02:00",
        e: "2018-07-25T15:30:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T15:30:00.000+02:00",
        e: "2018-07-25T15:45:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T15:45:00.000+02:00",
        e: "2018-07-25T16:00:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T16:00:00.000+02:00",
        e: "2018-07-25T16:15:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T16:15:00.000+02:00",
        e: "2018-07-25T16:30:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T16:30:00.000+02:00",
        e: "2018-07-25T16:45:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T16:45:00.000+02:00",
        e: "2018-07-25T17:00:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T17:00:00.000+02:00",
        e: "2018-07-25T17:15:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T17:15:00.000+02:00",
        e: "2018-07-25T17:30:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T17:30:00.000+02:00",
        e: "2018-07-25T17:45:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T17:45:00.000+02:00",
        e: "2018-07-25T18:00:00.000+02:00",
        invalid: null
      }
    }
  ]
  const tree = renderer
    .create(<ListCalendarTime timeSlots={timeSlots} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
