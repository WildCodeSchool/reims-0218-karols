import { makeChooseSlotReservation, CHOOSE_TIMESLOT } from "../actions/actions"

import timeSlots from "./timeSlots"

describe("timeSlots", () => {
  it("should not change the state for unhandled action", () => {
    const prevState = [
      {
        id: 1,
        name: "Homme",
        selected: false
      },
      {
        id: 2,
        name: "Femme",
        selected: false
      }
    ]

    const anyAction = {
      type: "ANY_ACTION"
    }

    expect(timeSlots(prevState, anyAction)).toEqual(prevState)
  })

  it("should change the state for choose gender action", () => {
    const prevState = [
      {
        id: 1,
        name: "Homme",
        selected: false
      },
      {
        id: 2,
        name: "Femme",
        selected: false
      }
    ]
    const expectedState = [
      {
        id: 1,
        name: "Homme",
        selected: true
      },
      {
        id: 2,
        name: "Femme",
        selected: false
      }
    ]

    const action = makeChooseSlotReservation(1)
    expect(timeSlots(prevState, action)).toEqual(expectedState)
  })
})
