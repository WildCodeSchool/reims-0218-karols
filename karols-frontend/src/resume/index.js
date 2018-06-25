export const getSelectedShop = state => state.shops.find(shop => shop.selected)

export const getSelectedService = state =>
  state.services.find(service => service.selected)

export const getSelectedForm = state =>
  state.form.contact ? state.form.contact.values : {}

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

export const getSelectedTimeSlot = state =>
  state.timeSlots
    .filter(
      timeSlot =>
        timeSlot.timeSlots.filter(timeSlot => timeSlot.selected).length > 0
    )
    .map(timeSlot => ({
      ...timeSlot,
      timeSlots: timeSlot.timeSlots.filter(timeSlot => timeSlot.selected)
    }))

// export const getSelectedTimeSlot = state =>
// state.timeSlots.filter(
//   timeSlot =>
//     timeSlot.timeSlots.filter(timeSlot => timeSlot.selected).length > 0
// )

// export const getSelectedTimeSlot = state =>
//   state.timeSlots
//     .filter(
//       timeSlot =>
//         timeSlot.timeSlots.filter(timeSlot => timeSlot.selected).length > 0
//     )
//     .map(timeSlot => ({
//       ...timeSlot,
//       timeSlots: timeSlot.timeSlots.filter(timeSlot => timeSlot.selected)
//     }))
