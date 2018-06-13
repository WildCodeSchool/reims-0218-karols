import {
  CHOOSE_PRESTATION,
  SHOPS_PRESTATIONS_RECEIVED
} from "../actions/actions"

const initialState = []

const prestations = (prevState = initialState, action) => {
  if (action.type === CHOOSE_PRESTATION) {
    // si action type = choose_prestation alors =>
    return prevState.map(prestation => ({
      //return prevstate parcours chaque prestation
      ...prestation, // destructuration de l'objet
      preparations: prestation.preparations.map(preparation => ({
        ...preparation,
        selected:
          action.prestationId === prestation.id
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
