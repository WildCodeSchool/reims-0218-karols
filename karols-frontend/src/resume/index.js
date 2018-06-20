export const getSelectedShop = state => state.shops.find(shop => shop.selected)

export const getSelectedService = state =>
  state.services.find(service => service.selected)

export const getSelectedGender = state =>
  state.genders.find(gender => gender.selected)

export const getSelectedPreparations = state =>
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
