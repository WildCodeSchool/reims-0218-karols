import { choiceSlotReservation } from "./actions"
import { CHOOSE_SEX, chooseSexAction } from "./actions"
import { CHOOSE_SERVICE, makeChooseServiceAction } from "./actions"

describe("action add slot creator", () => {
  it("should return an action ADD_SLOTS WITH TIME", () => {
    const expected = {
      type: "ADD_SLOTS",
      timeSlot: { year: 2018, month: 4, day: 24, hour: 12 }
    }
    expect(choiceSlotReservation(expected.timeSlot)).toEqual(expected)
  })
})

describe("action choose sex creator", () => {
  it("should return M gender", () => {
    const expectedForMale = {
      type: CHOOSE_SEX,
      sex: "M"
    }

    expect(chooseSexAction("M")).toEqual(expectedForMale)
  })

  it("should return F gender", () => {
    const expectedForFemale = {
      type: CHOOSE_SEX,
      sex: "F"
    }
    expect(chooseSexAction("F")).toEqual(expectedForFemale)
  })
})

describe("action choose service creator", () => {
  it("should return an CHOOSE_SERVICE action with serviceId", () => {
    const expected = {
      type: CHOOSE_SERVICE,
      serviceId: 1
    }

    expect(makeChooseServiceAction(1)).toEqual(expected)
  })
})
