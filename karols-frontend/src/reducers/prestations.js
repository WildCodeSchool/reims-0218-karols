import { CHOOSE_PRESTATION } from "../actions/actions"

const initialState = []

const prestations = (prevState = initialState, action) => {
  if (action.type === CHOOSE_PRESTATION) {
    return prevState.map(prestation => ({
      ...prestation,
      selected: action.prestationId === prestation.id
    }))
  }
  return prevState
}

export default prestations
