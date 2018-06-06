export const CHOOSE_PRESTATION = "CHOOSE_PRESTATION"
export const CHOOSE_SERVICE = "CHOOSE_SERVICE"
export const CHOOSE_SEX = "CHOOSE_SEX"
export const CHOOSE_SHOP = "CHOOSE_SHOP"
export const CHOOSE_TIMESLOT = "CHOOSE_TIMESLOT"

export const makeChoosePrestation = prestationId => ({
  type: CHOOSE_PRESTATION,
  prestationId
})

export const makeChooseService = serviceId => ({
  type: CHOOSE_SERVICE,
  serviceId
})

export const makeChooseSex = sexId => ({
  type: CHOOSE_SEX,
  sexId
})

export const makeChooseShop = shopId => ({
  type: CHOOSE_SHOP,
  shopId
})

export const makeChooseSlotReservation = timeSlotId => ({
  type: CHOOSE_TIMESLOT,
  timeSlotId
})
