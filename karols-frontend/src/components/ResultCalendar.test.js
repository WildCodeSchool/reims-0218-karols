import React from "react"
import ReactDOM from "react-dom"
import ResultCalendar from "./ResultCalendar"
import renderer from "react-test-renderer"

it("renders without crashing", () => {
  const div = document.createElement("div")
  const weekTimeSlots = [
    {
      date: "2018-07-25T00:00:00.000+02:00",
      timeSlots: [
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
    },
    {
      date: "2018-07-26T00:00:00.000+02:00",
      timeSlots: [
        {
          available: true,
          time: {
            s: "2018-07-26T09:00:00.000+02:00",
            e: "2018-07-26T09:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T09:15:00.000+02:00",
            e: "2018-07-26T09:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T09:30:00.000+02:00",
            e: "2018-07-26T09:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T09:45:00.000+02:00",
            e: "2018-07-26T10:00:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T10:00:00.000+02:00",
            e: "2018-07-26T10:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T10:15:00.000+02:00",
            e: "2018-07-26T10:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T10:30:00.000+02:00",
            e: "2018-07-26T10:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T10:45:00.000+02:00",
            e: "2018-07-26T11:00:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T11:00:00.000+02:00",
            e: "2018-07-26T11:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T11:15:00.000+02:00",
            e: "2018-07-26T11:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T11:30:00.000+02:00",
            e: "2018-07-26T11:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T11:45:00.000+02:00",
            e: "2018-07-26T12:00:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T12:00:00.000+02:00",
            e: "2018-07-26T12:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T12:15:00.000+02:00",
            e: "2018-07-26T12:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T12:30:00.000+02:00",
            e: "2018-07-26T12:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T12:45:00.000+02:00",
            e: "2018-07-26T13:00:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T13:00:00.000+02:00",
            e: "2018-07-26T13:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T13:15:00.000+02:00",
            e: "2018-07-26T13:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T13:30:00.000+02:00",
            e: "2018-07-26T13:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T13:45:00.000+02:00",
            e: "2018-07-26T14:00:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T14:00:00.000+02:00",
            e: "2018-07-26T14:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T14:15:00.000+02:00",
            e: "2018-07-26T14:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T14:30:00.000+02:00",
            e: "2018-07-26T14:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T14:45:00.000+02:00",
            e: "2018-07-26T15:00:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T15:00:00.000+02:00",
            e: "2018-07-26T15:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T15:15:00.000+02:00",
            e: "2018-07-26T15:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T15:30:00.000+02:00",
            e: "2018-07-26T15:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T15:45:00.000+02:00",
            e: "2018-07-26T16:00:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T16:00:00.000+02:00",
            e: "2018-07-26T16:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T16:15:00.000+02:00",
            e: "2018-07-26T16:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T16:30:00.000+02:00",
            e: "2018-07-26T16:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T16:45:00.000+02:00",
            e: "2018-07-26T17:00:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T17:00:00.000+02:00",
            e: "2018-07-26T17:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T17:15:00.000+02:00",
            e: "2018-07-26T17:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T17:30:00.000+02:00",
            e: "2018-07-26T17:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T17:45:00.000+02:00",
            e: "2018-07-26T18:00:00.000+02:00",
            invalid: null
          }
        }
      ]
    },
    {
      date: "2018-07-27T00:00:00.000+02:00",
      timeSlots: [
        {
          available: true,
          time: {
            s: "2018-07-27T09:00:00.000+02:00",
            e: "2018-07-27T09:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T09:15:00.000+02:00",
            e: "2018-07-27T09:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T09:30:00.000+02:00",
            e: "2018-07-27T09:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T09:45:00.000+02:00",
            e: "2018-07-27T10:00:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T10:00:00.000+02:00",
            e: "2018-07-27T10:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T10:15:00.000+02:00",
            e: "2018-07-27T10:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T10:30:00.000+02:00",
            e: "2018-07-27T10:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T10:45:00.000+02:00",
            e: "2018-07-27T11:00:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T11:00:00.000+02:00",
            e: "2018-07-27T11:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T11:15:00.000+02:00",
            e: "2018-07-27T11:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T11:30:00.000+02:00",
            e: "2018-07-27T11:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T11:45:00.000+02:00",
            e: "2018-07-27T12:00:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T12:00:00.000+02:00",
            e: "2018-07-27T12:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T12:15:00.000+02:00",
            e: "2018-07-27T12:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T12:30:00.000+02:00",
            e: "2018-07-27T12:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T12:45:00.000+02:00",
            e: "2018-07-27T13:00:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T13:00:00.000+02:00",
            e: "2018-07-27T13:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T13:15:00.000+02:00",
            e: "2018-07-27T13:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T13:30:00.000+02:00",
            e: "2018-07-27T13:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T13:45:00.000+02:00",
            e: "2018-07-27T14:00:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T14:00:00.000+02:00",
            e: "2018-07-27T14:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T14:15:00.000+02:00",
            e: "2018-07-27T14:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T14:30:00.000+02:00",
            e: "2018-07-27T14:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T14:45:00.000+02:00",
            e: "2018-07-27T15:00:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T15:00:00.000+02:00",
            e: "2018-07-27T15:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T15:15:00.000+02:00",
            e: "2018-07-27T15:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T15:30:00.000+02:00",
            e: "2018-07-27T15:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T15:45:00.000+02:00",
            e: "2018-07-27T16:00:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T16:00:00.000+02:00",
            e: "2018-07-27T16:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T16:15:00.000+02:00",
            e: "2018-07-27T16:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T16:30:00.000+02:00",
            e: "2018-07-27T16:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T16:45:00.000+02:00",
            e: "2018-07-27T17:00:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T17:00:00.000+02:00",
            e: "2018-07-27T17:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T17:15:00.000+02:00",
            e: "2018-07-27T17:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T17:30:00.000+02:00",
            e: "2018-07-27T17:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T17:45:00.000+02:00",
            e: "2018-07-27T18:00:00.000+02:00",
            invalid: null
          }
        }
      ]
    },
    {
      date: "2018-07-28T00:00:00.000+02:00",
      timeSlots: [
        {
          available: true,
          time: {
            s: "2018-07-28T09:00:00.000+02:00",
            e: "2018-07-28T09:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T09:15:00.000+02:00",
            e: "2018-07-28T09:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T09:30:00.000+02:00",
            e: "2018-07-28T09:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T09:45:00.000+02:00",
            e: "2018-07-28T10:00:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T10:00:00.000+02:00",
            e: "2018-07-28T10:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T10:15:00.000+02:00",
            e: "2018-07-28T10:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T10:30:00.000+02:00",
            e: "2018-07-28T10:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T10:45:00.000+02:00",
            e: "2018-07-28T11:00:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T11:00:00.000+02:00",
            e: "2018-07-28T11:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T11:15:00.000+02:00",
            e: "2018-07-28T11:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T11:30:00.000+02:00",
            e: "2018-07-28T11:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T11:45:00.000+02:00",
            e: "2018-07-28T12:00:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T12:00:00.000+02:00",
            e: "2018-07-28T12:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T12:15:00.000+02:00",
            e: "2018-07-28T12:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T12:30:00.000+02:00",
            e: "2018-07-28T12:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T12:45:00.000+02:00",
            e: "2018-07-28T13:00:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T13:00:00.000+02:00",
            e: "2018-07-28T13:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T13:15:00.000+02:00",
            e: "2018-07-28T13:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T13:30:00.000+02:00",
            e: "2018-07-28T13:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T13:45:00.000+02:00",
            e: "2018-07-28T14:00:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T14:00:00.000+02:00",
            e: "2018-07-28T14:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T14:15:00.000+02:00",
            e: "2018-07-28T14:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T14:30:00.000+02:00",
            e: "2018-07-28T14:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T14:45:00.000+02:00",
            e: "2018-07-28T15:00:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T15:00:00.000+02:00",
            e: "2018-07-28T15:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T15:15:00.000+02:00",
            e: "2018-07-28T15:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T15:30:00.000+02:00",
            e: "2018-07-28T15:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T15:45:00.000+02:00",
            e: "2018-07-28T16:00:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T16:00:00.000+02:00",
            e: "2018-07-28T16:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T16:15:00.000+02:00",
            e: "2018-07-28T16:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T16:30:00.000+02:00",
            e: "2018-07-28T16:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T16:45:00.000+02:00",
            e: "2018-07-28T17:00:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T17:00:00.000+02:00",
            e: "2018-07-28T17:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T17:15:00.000+02:00",
            e: "2018-07-28T17:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T17:30:00.000+02:00",
            e: "2018-07-28T17:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T17:45:00.000+02:00",
            e: "2018-07-28T18:00:00.000+02:00",
            invalid: null
          }
        }
      ]
    },
    {
      date: "2018-07-29T00:00:00.000+02:00",
      timeSlots: [
        {
          available: true,
          time: {
            s: "2018-07-29T09:00:00.000+02:00",
            e: "2018-07-29T09:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T09:15:00.000+02:00",
            e: "2018-07-29T09:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T09:30:00.000+02:00",
            e: "2018-07-29T09:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T09:45:00.000+02:00",
            e: "2018-07-29T10:00:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T10:00:00.000+02:00",
            e: "2018-07-29T10:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T10:15:00.000+02:00",
            e: "2018-07-29T10:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T10:30:00.000+02:00",
            e: "2018-07-29T10:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T10:45:00.000+02:00",
            e: "2018-07-29T11:00:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T11:00:00.000+02:00",
            e: "2018-07-29T11:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T11:15:00.000+02:00",
            e: "2018-07-29T11:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T11:30:00.000+02:00",
            e: "2018-07-29T11:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T11:45:00.000+02:00",
            e: "2018-07-29T12:00:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T12:00:00.000+02:00",
            e: "2018-07-29T12:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T12:15:00.000+02:00",
            e: "2018-07-29T12:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T12:30:00.000+02:00",
            e: "2018-07-29T12:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T12:45:00.000+02:00",
            e: "2018-07-29T13:00:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T13:00:00.000+02:00",
            e: "2018-07-29T13:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T13:15:00.000+02:00",
            e: "2018-07-29T13:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T13:30:00.000+02:00",
            e: "2018-07-29T13:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T13:45:00.000+02:00",
            e: "2018-07-29T14:00:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T14:00:00.000+02:00",
            e: "2018-07-29T14:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T14:15:00.000+02:00",
            e: "2018-07-29T14:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T14:30:00.000+02:00",
            e: "2018-07-29T14:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T14:45:00.000+02:00",
            e: "2018-07-29T15:00:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T15:00:00.000+02:00",
            e: "2018-07-29T15:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T15:15:00.000+02:00",
            e: "2018-07-29T15:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T15:30:00.000+02:00",
            e: "2018-07-29T15:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T15:45:00.000+02:00",
            e: "2018-07-29T16:00:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T16:00:00.000+02:00",
            e: "2018-07-29T16:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T16:15:00.000+02:00",
            e: "2018-07-29T16:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T16:30:00.000+02:00",
            e: "2018-07-29T16:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T16:45:00.000+02:00",
            e: "2018-07-29T17:00:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T17:00:00.000+02:00",
            e: "2018-07-29T17:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T17:15:00.000+02:00",
            e: "2018-07-29T17:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T17:30:00.000+02:00",
            e: "2018-07-29T17:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T17:45:00.000+02:00",
            e: "2018-07-29T18:00:00.000+02:00",
            invalid: null
          }
        }
      ]
    }
  ]
  ReactDOM.render(<ResultCalendar weekTimeSlots={weekTimeSlots} />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders correctly", () => {
  const weekTimeSlots = [
    {
      date: "2018-07-25T00:00:00.000+02:00",
      timeSlots: [
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
    },
    {
      date: "2018-07-26T00:00:00.000+02:00",
      timeSlots: [
        {
          available: true,
          time: {
            s: "2018-07-26T09:00:00.000+02:00",
            e: "2018-07-26T09:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T09:15:00.000+02:00",
            e: "2018-07-26T09:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T09:30:00.000+02:00",
            e: "2018-07-26T09:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T09:45:00.000+02:00",
            e: "2018-07-26T10:00:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T10:00:00.000+02:00",
            e: "2018-07-26T10:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T10:15:00.000+02:00",
            e: "2018-07-26T10:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T10:30:00.000+02:00",
            e: "2018-07-26T10:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T10:45:00.000+02:00",
            e: "2018-07-26T11:00:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T11:00:00.000+02:00",
            e: "2018-07-26T11:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T11:15:00.000+02:00",
            e: "2018-07-26T11:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T11:30:00.000+02:00",
            e: "2018-07-26T11:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T11:45:00.000+02:00",
            e: "2018-07-26T12:00:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T12:00:00.000+02:00",
            e: "2018-07-26T12:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T12:15:00.000+02:00",
            e: "2018-07-26T12:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T12:30:00.000+02:00",
            e: "2018-07-26T12:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T12:45:00.000+02:00",
            e: "2018-07-26T13:00:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T13:00:00.000+02:00",
            e: "2018-07-26T13:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T13:15:00.000+02:00",
            e: "2018-07-26T13:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T13:30:00.000+02:00",
            e: "2018-07-26T13:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T13:45:00.000+02:00",
            e: "2018-07-26T14:00:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T14:00:00.000+02:00",
            e: "2018-07-26T14:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T14:15:00.000+02:00",
            e: "2018-07-26T14:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T14:30:00.000+02:00",
            e: "2018-07-26T14:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T14:45:00.000+02:00",
            e: "2018-07-26T15:00:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T15:00:00.000+02:00",
            e: "2018-07-26T15:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T15:15:00.000+02:00",
            e: "2018-07-26T15:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T15:30:00.000+02:00",
            e: "2018-07-26T15:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T15:45:00.000+02:00",
            e: "2018-07-26T16:00:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T16:00:00.000+02:00",
            e: "2018-07-26T16:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T16:15:00.000+02:00",
            e: "2018-07-26T16:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T16:30:00.000+02:00",
            e: "2018-07-26T16:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T16:45:00.000+02:00",
            e: "2018-07-26T17:00:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T17:00:00.000+02:00",
            e: "2018-07-26T17:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T17:15:00.000+02:00",
            e: "2018-07-26T17:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T17:30:00.000+02:00",
            e: "2018-07-26T17:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-26T17:45:00.000+02:00",
            e: "2018-07-26T18:00:00.000+02:00",
            invalid: null
          }
        }
      ]
    },
    {
      date: "2018-07-27T00:00:00.000+02:00",
      timeSlots: [
        {
          available: true,
          time: {
            s: "2018-07-27T09:00:00.000+02:00",
            e: "2018-07-27T09:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T09:15:00.000+02:00",
            e: "2018-07-27T09:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T09:30:00.000+02:00",
            e: "2018-07-27T09:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T09:45:00.000+02:00",
            e: "2018-07-27T10:00:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T10:00:00.000+02:00",
            e: "2018-07-27T10:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T10:15:00.000+02:00",
            e: "2018-07-27T10:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T10:30:00.000+02:00",
            e: "2018-07-27T10:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T10:45:00.000+02:00",
            e: "2018-07-27T11:00:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T11:00:00.000+02:00",
            e: "2018-07-27T11:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T11:15:00.000+02:00",
            e: "2018-07-27T11:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T11:30:00.000+02:00",
            e: "2018-07-27T11:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T11:45:00.000+02:00",
            e: "2018-07-27T12:00:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T12:00:00.000+02:00",
            e: "2018-07-27T12:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T12:15:00.000+02:00",
            e: "2018-07-27T12:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T12:30:00.000+02:00",
            e: "2018-07-27T12:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T12:45:00.000+02:00",
            e: "2018-07-27T13:00:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T13:00:00.000+02:00",
            e: "2018-07-27T13:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T13:15:00.000+02:00",
            e: "2018-07-27T13:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T13:30:00.000+02:00",
            e: "2018-07-27T13:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T13:45:00.000+02:00",
            e: "2018-07-27T14:00:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T14:00:00.000+02:00",
            e: "2018-07-27T14:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T14:15:00.000+02:00",
            e: "2018-07-27T14:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T14:30:00.000+02:00",
            e: "2018-07-27T14:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T14:45:00.000+02:00",
            e: "2018-07-27T15:00:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T15:00:00.000+02:00",
            e: "2018-07-27T15:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T15:15:00.000+02:00",
            e: "2018-07-27T15:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T15:30:00.000+02:00",
            e: "2018-07-27T15:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T15:45:00.000+02:00",
            e: "2018-07-27T16:00:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T16:00:00.000+02:00",
            e: "2018-07-27T16:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T16:15:00.000+02:00",
            e: "2018-07-27T16:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T16:30:00.000+02:00",
            e: "2018-07-27T16:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T16:45:00.000+02:00",
            e: "2018-07-27T17:00:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T17:00:00.000+02:00",
            e: "2018-07-27T17:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T17:15:00.000+02:00",
            e: "2018-07-27T17:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T17:30:00.000+02:00",
            e: "2018-07-27T17:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-27T17:45:00.000+02:00",
            e: "2018-07-27T18:00:00.000+02:00",
            invalid: null
          }
        }
      ]
    },
    {
      date: "2018-07-28T00:00:00.000+02:00",
      timeSlots: [
        {
          available: true,
          time: {
            s: "2018-07-28T09:00:00.000+02:00",
            e: "2018-07-28T09:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T09:15:00.000+02:00",
            e: "2018-07-28T09:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T09:30:00.000+02:00",
            e: "2018-07-28T09:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T09:45:00.000+02:00",
            e: "2018-07-28T10:00:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T10:00:00.000+02:00",
            e: "2018-07-28T10:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T10:15:00.000+02:00",
            e: "2018-07-28T10:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T10:30:00.000+02:00",
            e: "2018-07-28T10:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T10:45:00.000+02:00",
            e: "2018-07-28T11:00:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T11:00:00.000+02:00",
            e: "2018-07-28T11:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T11:15:00.000+02:00",
            e: "2018-07-28T11:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T11:30:00.000+02:00",
            e: "2018-07-28T11:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T11:45:00.000+02:00",
            e: "2018-07-28T12:00:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T12:00:00.000+02:00",
            e: "2018-07-28T12:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T12:15:00.000+02:00",
            e: "2018-07-28T12:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T12:30:00.000+02:00",
            e: "2018-07-28T12:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T12:45:00.000+02:00",
            e: "2018-07-28T13:00:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T13:00:00.000+02:00",
            e: "2018-07-28T13:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T13:15:00.000+02:00",
            e: "2018-07-28T13:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T13:30:00.000+02:00",
            e: "2018-07-28T13:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T13:45:00.000+02:00",
            e: "2018-07-28T14:00:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T14:00:00.000+02:00",
            e: "2018-07-28T14:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T14:15:00.000+02:00",
            e: "2018-07-28T14:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T14:30:00.000+02:00",
            e: "2018-07-28T14:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T14:45:00.000+02:00",
            e: "2018-07-28T15:00:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T15:00:00.000+02:00",
            e: "2018-07-28T15:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T15:15:00.000+02:00",
            e: "2018-07-28T15:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T15:30:00.000+02:00",
            e: "2018-07-28T15:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T15:45:00.000+02:00",
            e: "2018-07-28T16:00:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T16:00:00.000+02:00",
            e: "2018-07-28T16:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T16:15:00.000+02:00",
            e: "2018-07-28T16:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T16:30:00.000+02:00",
            e: "2018-07-28T16:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T16:45:00.000+02:00",
            e: "2018-07-28T17:00:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T17:00:00.000+02:00",
            e: "2018-07-28T17:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T17:15:00.000+02:00",
            e: "2018-07-28T17:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T17:30:00.000+02:00",
            e: "2018-07-28T17:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-28T17:45:00.000+02:00",
            e: "2018-07-28T18:00:00.000+02:00",
            invalid: null
          }
        }
      ]
    },
    {
      date: "2018-07-29T00:00:00.000+02:00",
      timeSlots: [
        {
          available: true,
          time: {
            s: "2018-07-29T09:00:00.000+02:00",
            e: "2018-07-29T09:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T09:15:00.000+02:00",
            e: "2018-07-29T09:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T09:30:00.000+02:00",
            e: "2018-07-29T09:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T09:45:00.000+02:00",
            e: "2018-07-29T10:00:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T10:00:00.000+02:00",
            e: "2018-07-29T10:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T10:15:00.000+02:00",
            e: "2018-07-29T10:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T10:30:00.000+02:00",
            e: "2018-07-29T10:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T10:45:00.000+02:00",
            e: "2018-07-29T11:00:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T11:00:00.000+02:00",
            e: "2018-07-29T11:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T11:15:00.000+02:00",
            e: "2018-07-29T11:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T11:30:00.000+02:00",
            e: "2018-07-29T11:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T11:45:00.000+02:00",
            e: "2018-07-29T12:00:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T12:00:00.000+02:00",
            e: "2018-07-29T12:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T12:15:00.000+02:00",
            e: "2018-07-29T12:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T12:30:00.000+02:00",
            e: "2018-07-29T12:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T12:45:00.000+02:00",
            e: "2018-07-29T13:00:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T13:00:00.000+02:00",
            e: "2018-07-29T13:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T13:15:00.000+02:00",
            e: "2018-07-29T13:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T13:30:00.000+02:00",
            e: "2018-07-29T13:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T13:45:00.000+02:00",
            e: "2018-07-29T14:00:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T14:00:00.000+02:00",
            e: "2018-07-29T14:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T14:15:00.000+02:00",
            e: "2018-07-29T14:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T14:30:00.000+02:00",
            e: "2018-07-29T14:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T14:45:00.000+02:00",
            e: "2018-07-29T15:00:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T15:00:00.000+02:00",
            e: "2018-07-29T15:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T15:15:00.000+02:00",
            e: "2018-07-29T15:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T15:30:00.000+02:00",
            e: "2018-07-29T15:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T15:45:00.000+02:00",
            e: "2018-07-29T16:00:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T16:00:00.000+02:00",
            e: "2018-07-29T16:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T16:15:00.000+02:00",
            e: "2018-07-29T16:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T16:30:00.000+02:00",
            e: "2018-07-29T16:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T16:45:00.000+02:00",
            e: "2018-07-29T17:00:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T17:00:00.000+02:00",
            e: "2018-07-29T17:15:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T17:15:00.000+02:00",
            e: "2018-07-29T17:30:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T17:30:00.000+02:00",
            e: "2018-07-29T17:45:00.000+02:00",
            invalid: null
          }
        },
        {
          available: true,
          time: {
            s: "2018-07-29T17:45:00.000+02:00",
            e: "2018-07-29T18:00:00.000+02:00",
            invalid: null
          }
        }
      ]
    }
  ]
  const tree = renderer.create(<ResultCalendar weekTimeSlots={weekTimeSlots} />).toJSON()
  expect(tree).toMatchSnapshot()
})
