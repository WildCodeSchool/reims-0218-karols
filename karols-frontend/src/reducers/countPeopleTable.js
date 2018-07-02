// import { CHOOSE_COUNT_PEOPLE } from "../actions/actions"
import { INCREMENT_TABLE } from "../actions/actions"
import { DECREMENT_TABLE } from "../actions/actions"

// const initialState = {
//   count: 2
// }
// const countPeopleTable = (prevState = initialState, action) => {
//   if (action.type === CHOOSE_COUNT_PEOPLE) {
//     return {
//       ...prevState,
//       count: action.count
//     }
//   }
//   return prevState
// }

// export default countPeopleTable

const initialState = {
  count: 0
}

const countPeopleTable = (prevState = initialState, action) => {
  // if (action.type === CHOOSE_SEX) {
  //   return prevState.map(sexObject => ({
  //     ...sexObject,
  //     selected: action.sex === sexObject.sex
  //   }))
  // }
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
