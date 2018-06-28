import { CHOOSE_SEX, INCREMENT_SEX } from "../actions/actions"

const initialState = [
  {
    sex: "M",
    selected: false,
    count: 0,
    image:
      "https://images.unsplash.com/photo-1475403614135-5f1aa0eb5015?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=aa32268d819cd488975b3d92e88ab1bc&auto=format&fit=crop&w=1650&q=80"
  },
  {
    sex: "F",
    selected: false,
    count: 0,
    image:
      "https://images.unsplash.com/photo-1523264653568-d3d4032d1476?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9f5bb4869d80176df6b68e5f160b1c76&auto=format&fit=crop&w=1834&q=80"
  }
]

const genders = (prevState = initialState, action) => {
  if (action.type === CHOOSE_SEX) {
    return prevState.map(sexObject => ({
      ...sexObject,
      selected: action.sex === sexObject.sex
    }))
  }
  if (action.type === INCREMENT_SEX) {
    return prevState.map(counterSex => ({
      ...counterSex,
      count: counterSex.count + 1
    }))
  }
  return prevState
}

export default genders
