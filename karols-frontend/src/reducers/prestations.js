import {
  CHOOSE_PRESTATION,
  SHOPS_PRESTATIONS_RECEIVED
} from "../actions/actions"

const initialState = []

const prestations = (prevState = initialState, action) => {
  if (action.type === CHOOSE_PRESTATION) {
    // si action type = choose_prestation alors =>
    return prevState.map(prestation => ({
      // return prevstate, parcours chaque prestation
      ...prestation, // on destructure l'objet
      preparations: prestation.preparations.map(preparation => ({
        // propriété preparations, sous objet à l'intérieur
        ...preparation, // on faits une copie de chaque élément
        // on rajoute la propriété selected
        selected:
          prestation.id === action.prestationId // elle est vraie si prestation.id = action.prestationId
            ? preparation.id === action.preparationId
              ? !preparation.selected
              : false
            : preparation.selected
      }))
    }))
  }
  if (action.type === SHOPS_PRESTATIONS_RECEIVED) {
    return action.response.prestations
  }
  return prevState
}

export default prestations
