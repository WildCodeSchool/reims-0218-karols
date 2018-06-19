export const getShopResume = state => state.shops.find(shop => shop.selected)

export const getServiceResume = state =>
  state.services.find(service => service.selected)

export const getGenderResume = state =>
  state.genders.find(gender => gender.selected)
