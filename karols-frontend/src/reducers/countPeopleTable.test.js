// import { makeChooseCountPeopleTable } from "../actions/actions"

// import countPeopleTable from "./countPeopleTable"

// describe("countPeopleTable", () => {
//   it("should not change the state for unhandled action", () => {
//     const prevState = {
//       count: 0
//     }

//     const anyAction = {
//       type: "ANY_ACTION"
//     }

//     expect(countPeopleTable(prevState, anyAction)).toEqual(prevState)
//   })

//   it("should change the state for choose count of people for a table success action", () => {
//     const prevState = {
//       count: 0
//     }

//     const expectedState = {
//       count: 6
//     }

//     const action = makeChooseCountPeopleTable(6)
//     expect(countPeopleTable(prevState, action)).toEqual(expectedState)
//   })
// })

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
    const action = makeIncrementTable(1)
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
    const action = makeDecrementTable(1)
    expect(countPeopleTable(prevState, action)).toEqual(expectedState)
  })
})
