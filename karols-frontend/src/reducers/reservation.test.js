import { makeSuccessReservation, SUCCESS_RESERVATION } from "../actions/actions"

import reservation from "./reservation"

describe("reservation", () => {
  it("should not change the state for unhandled action", () => {
    const prevState = {
      success: false
    }

    const anyAction = {
      type: "ANY_ACTION"
    }

    expect(reservation(prevState, anyAction)).toEqual(prevState)
  })

  it("should change the state for reservation success action", () => {
    const prevState = {
      success: false
    }

    const expectedState = {
      success: true
    }

    const action = makeSuccessReservation()
    expect(reservation(prevState, action)).toEqual(expectedState)
  })
})
