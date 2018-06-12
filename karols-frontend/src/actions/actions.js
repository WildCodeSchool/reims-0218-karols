export const CHOOSE_PRESTATION = "CHOOSE_PRESTATION"
export const CHOOSE_SERVICE = "CHOOSE_SERVICE"
export const CHOOSE_SEX = "CHOOSE_SEX"
export const CHOOSE_SHOP = "CHOOSE_SHOP"
export const CHOOSE_TIMESLOT = "CHOOSE_TIMESLOT"
export const SHOPS_PRESTATIONS_RECEIVED = "SHOPS_PRESTATIONS_RECEIVED"
export const GENDERS_SERVICES_RECEIVED = "GENDERS_SERVICES_RECEIVED"

export const makeChoosePrestation = (prestationId, preparationId) => ({
  type: CHOOSE_PRESTATION,
  prestationId,
  preparationId
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
