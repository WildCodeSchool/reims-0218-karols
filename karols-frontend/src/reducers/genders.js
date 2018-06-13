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
  //  déclaration d'une fonction qui prend en parametre prevstate qui est égal a initalstate / action
  if (action.type === CHOOSE_SEX) {
    // si le type de action est égal a choose_sex (c'est un teste)
    return prevState.map(sexObject => ({
      // je retourne le prevstate et  parcour element par element qui prend en parametre sexObjet
      ...sexObject,
      // je décompose l'objet sexObjet
      selected: action.sex === sexObject.sex
      // dans la proprietée selected je compare le parametre sex de mon action à la proprieté sex de mon objet sexObjet
    }))
  }
  return prevState
  // sinon je retourne  prevstate
}

export default genders
