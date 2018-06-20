export const getShopResume = state => state.shops.find(shop => shop.selected)

export const getServiceResume = state =>
  state.services.find(service => service.selected)

export const getGenderResume = state =>
  state.genders.find(gender => gender.selected)

export const getPreparationResume = state =>
  state.prestations
    .filter(
      prestation =>
        prestation.preparations.filter(preparation => preparation.selected)
          .length > 0
    )
    .map(prestation => ({
      ...prestation,
      preparations: prestation.preparations.filter(
        preparation => preparation.selected
      )
    }))

// reste à faire : fonction datepicker resume
