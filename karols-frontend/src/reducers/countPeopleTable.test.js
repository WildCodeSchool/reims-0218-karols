import { makeChooseCountPeopleTable } from "../actions/actions"

import countPeopleTable from "./countPeopleTable"

describe("countPeopleTable", () => {
  it("should not change the state for unhandled action", () => {
    const prevState = {
      count: 0
    }

    const anyAction = {
      type: "ANY_ACTION"
    }

    expect(countPeopleTable(prevState, anyAction)).toEqual(prevState)
  })

  it("should change the state for choose count of people for a table success action", () => {
    const prevState = {
      count: 0
    }

    const expectedState = {
      count: 6
    }

    const action = makeChooseCountPeopleTable(6)
    expect(countPeopleTable(prevState, action)).toEqual(expectedState)
  })
})
