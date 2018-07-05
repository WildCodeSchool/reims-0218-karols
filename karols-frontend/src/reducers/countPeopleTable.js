import { INCREMENT_TABLE } from "../actions/actions"
import { DECREMENT_TABLE } from "../actions/actions"
import { SHOPS_PRESTATIONS_RECEIVED } from "../actions/actions"

const initialState = {}

const countPeopleTable = (prevState = initialState, action) => {
  if (action.type === INCREMENT_TABLE) {
    return {
      ...prevState,
      count: prevState.count + 1
      // la propriete count incremente de 1 la valeur de count si action.count === countObjet.count
      // sinon il renvoie la valeur de countObjet par defaut
    }
  }
  if (action.type === DECREMENT_TABLE) {
    return {
      ...prevState,
      count: prevState.count - 1
    }
    // la propriete count decremente de 1 la valeur de count si action.count === countObjet.count
    // sinon il renvoie la valeur de countObjet par defaut
  }
  if (action.type === SHOPS_PRESTATIONS_RECEIVED) {
    return action.response.table
  }

  return prevState
}

export default countPeopleTable
