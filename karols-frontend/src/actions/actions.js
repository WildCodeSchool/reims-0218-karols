export const CHOOSE_SERVICE = "CHOOSE_SERVICE"

export const makeChooseServiceAction = serviceId => ({
  type: CHOOSE_SERVICE,
  serviceId
})
