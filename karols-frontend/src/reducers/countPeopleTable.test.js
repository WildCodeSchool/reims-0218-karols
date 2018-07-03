import { makeIncrementTable, makeDecrementTable } from "../actions/actions"

import countPeopleTable from "./countPeopleTable"

describe("Count", () => {
  it("should not change the state for unhandled action", () => {
    const prevState = {
      count: 0
    }

    const anyAction = {
      type: "ANY_ACTION"
    }

    expect(countPeopleTable(prevState, anyAction)).toEqual(prevState)
  })

  it("should change the state for increment count table action", () => {
    const prevState = {
      count: 0
    }
    const expectedState = {
      count: 1
    }
    const action = makeIncrementTable()
    expect(countPeopleTable(prevState, action)).toEqual(expectedState)
  })
})

describe("Counte", () => {
  it("should not change the state for unhandled action", () => {
    const prevState = {
      count: 0
    }

    const anyAction = {
      type: "ANY_ACTION"
    }

    expect(countPeopleTable(prevState, anyAction)).toEqual(prevState)
  })

  it("should change the state for decrement count table action", () => {
    const prevState = {
      count: 2
    }
    const expectedState = {
      count: 1
    }
    const action = makeDecrementTable()
    expect(countPeopleTable(prevState, action)).toEqual(expectedState)
  })
})
