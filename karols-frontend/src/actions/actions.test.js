import { CHOOSE_SEX, chooseSexAction } from "./actions"

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
