import { CHOOSE_SEX, GENDERS_SERVICES_RECEIVED } from "../actions/actions"

const initialState = [
  {
    sex: "M",
    selected: false
  },
  {
    sex: "F",
    selected: false
  }
]

const genders = (prevState = initialState, action) => {
  if (action.type === CHOOSE_SEX) {
    return prevState.map(sexObject => ({
      ...sexObject,
      selected: action.sex === sexObject.sex
    }))
  }
  if (action.type === GENDERS_SERVICES_RECEIVED) {
    return action.response.prestations
  }
  return prevState
}

export default genders
