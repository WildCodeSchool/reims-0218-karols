export const CHOOSE_PRESTATION = "CHOOSE_PRESTATION"
export const CHOOSE_SERVICE = "CHOOSE_SERVICE"
export const CHOOSE_SEX = "CHOOSE_SEX"
export const CHOOSE_SHOP = "CHOOSE_SHOP"
export const CHOOSE_TIMESLOT = "CHOOSE_TIMESLOT"
export const SHOPS_PRESTATIONS_RECEIVED = "SHOPS_PRESTATIONS_RECEIVED"
export const TIMESLOTS_RECEIVED = "TIMESLOTS_RECEIVED"
export const SUCCESS_RESERVATION = "SUCCESS_RESERVATION"
export const CHOOSE_COUNT_PEOPLE = "CHOOSE_COUNT_PEOPLE"

export const makeChoosePrestation = (prestationId, preparationId) => ({
  type: CHOOSE_PRESTATION,
  prestationId,
  preparationId
})

export const makeSuccessReservation = () => ({
  type: SUCCESS_RESERVATION
})

export const makeChooseService = serviceId => ({
  type: CHOOSE_SERVICE,
  serviceId
})

export const makeChooseSex = sex => ({
  type: CHOOSE_SEX,
  sex
})

export const makeChooseShop = shopId => ({
  type: CHOOSE_SHOP,
  shopId
})

export const makeChooseSlotReservation = timeSlot => ({
  type: CHOOSE_TIMESLOT,
  timeSlot
})

export const makeShopsPrestationsReceived = response => ({
  type: SHOPS_PRESTATIONS_RECEIVED,
  response
})

export const makeTimeslotsReceived = response => ({
  type: TIMESLOTS_RECEIVED,
  response
})

export const makeChooseCountPeopleTable = count => ({
  type: CHOOSE_COUNT_PEOPLE,
  count
})
