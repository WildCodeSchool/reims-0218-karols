export const ADD_SLOTS = "ADD_SLOTS"
export const CHOOSE_SEX = "CHOOSE_SEX"
export const CHOOSE_SERVICE = "CHOOSE_SERVICE"

export const choiceSlotReservation = timeSlot => ({
  type: ADD_SLOTS,
  timeSlot
})

export const chooseSexAction = sex => ({
  type: CHOOSE_SEX,
  sex
})

export const makeChooseServiceAction = serviceId => ({
  type: CHOOSE_SERVICE,
  serviceId
})
