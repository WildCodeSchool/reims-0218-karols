import { CHOOSE_SEX } from "../actions/actions"

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
  return prevState
}

export default genders
