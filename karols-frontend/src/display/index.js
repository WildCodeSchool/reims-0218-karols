// déclaration de toutes les fonctions qui détermineront si nous voulons montrer ou non une section

// afficher les services si un magasin est sélectionné
export const showServices = state =>
  state.shops.filter(shop => shop.selected).length > 0

// montrer le sexe si la préparation est sélectionnée (le service avec l'identifiant 1)

// on filtre le tableau services du state pour récuperer le service dont la propriete selected es à true et dont l'id est 1
// on va calculer la longueur du tableau et si la longueur et superieur a 0 il renvoi true
export const showSex = state =>
  state.services.filter(service => service.selected && service.id === 1)
    .length > 0

export const showFemalePrestation = state =>
  state.genders.filter(gender => gender.selected && gender.sex === "F").length >
    0 && showSex(state)

export const showMalePrestation = state =>
  state.genders.filter(gender => gender.selected && gender.sex === "M").length >
    0 && showSex(state)

export const showDatePicker = state =>
  state.prestations.filter(
    prestation =>
      prestation.preparations.filter(preparation => preparation.selected)
        .length > 0
  ).length > 0 && showSex(state)
