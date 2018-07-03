export const CHOOSE_PRESTATION = "CHOOSE_PRESTATION"
export const CHOOSE_SERVICE = "CHOOSE_SERVICE"
export const CHOOSE_SEX = "CHOOSE_SEX"
export const CHOOSE_SHOP = "CHOOSE_SHOP"
export const CHOOSE_TIMESLOT = "CHOOSE_TIMESLOT"
export const SHOPS_PRESTATIONS_RECEIVED = "SHOPS_PRESTATIONS_RECEIVED"
export const TIMESLOTS_RECEIVED = "TIMESLOTS_RECEIVED"
export const SUCCESS_RESERVATION = "SUCCESS_RESERVATION"
export const CHOOSE_COUNT_PEOPLE = "CHOOSE_COUNT_PEOPLE"
export const INCREMENT_SEX = "INCREMENT_SEX"
export const DECREMENT_SEX = "DECREMENT_SEX"
export const INCREMENT_PRESTATION = "INCREMENT_PRESTATION"
export const DECREMENT_PRESTATION = "DECREMENT_PRESTATION"
export const INCREMENT_TABLE = "INCREMENT_TABLE"
export const DECREMENT_TABLE = "DECREMENT_TABLE"

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

export const makeIncrementSex = sex => ({
  type: INCREMENT_SEX,
  sex
})

export const makeDecrementSex = sex => ({
  type: DECREMENT_SEX,
  sex
})

export const makeIncrementPrestation = (prestationId, preparationId) => ({
  type: INCREMENT_PRESTATION,
  prestationId,
  preparationId
})

export const makeDecrementPrestation = (prestationId, preparationId) => ({
  type: DECREMENT_PRESTATION,
  prestationId,
  preparationId
})

export const makeIncrementTable = () => ({
  type: INCREMENT_TABLE
})

export const makeDecrementTable = () => ({
  type: DECREMENT_TABLE
})
