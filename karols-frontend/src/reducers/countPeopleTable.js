import { INCREMENT_TABLE } from "../actions/actions"
import { DECREMENT_TABLE } from "../actions/actions"

const initialState = {
  count: 2,
  image: "http://bar-legacy.com/img/main_6.jpg"
}

const countPeopleTable = (prevState = initialState, action) => {
  if (action.type === INCREMENT_TABLE) {
    return {
      ...prevState,
      count: action.count ? prevState.count + 1 : prevState.count
      // la propriete count incremente de 1 la valeur de count si action.count === countObjet.count
      // sinon il renvoie la valeur de countObjet par defaut
    }
  }
  if (action.type === DECREMENT_TABLE) {
    return {
      ...prevState,
      count: action.count ? prevState.count - 1 : prevState.count
    }
    // la propriete count decremente de 1 la valeur de count si action.count === countObjet.count
    // sinon il renvoie la valeur de countObjet par defaut
  }

  return prevState
}

export default countPeopleTable
