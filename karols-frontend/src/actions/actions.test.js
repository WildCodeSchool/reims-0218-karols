import { choiceSlotReservation } from "./actions"

describe("action add slot creator", () => {
  it("should return an action ADD_SLOTS WITH TIME", () => {
    const expected = {
      type: "ADD_SLOTS",
      timeSlot: { year: 2018, month: 4, day: 24, hour: 12 }
    }
    expect(choiceSlotReservation(expected.timeSlot)).toEqual(expected)
  })
})
